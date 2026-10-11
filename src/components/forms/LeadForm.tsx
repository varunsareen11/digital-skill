import { useEffect, useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { LoaderCircle } from 'lucide-react';
import { courses, getCourse } from '../../data/courses';
import { formEndpoints, site } from '../../data/site';
import { normalizePhone, validateEmail, validateName, validatePhone } from '../../lib/validation';

type Variant = 'application' | 'enquiry';
type TextField = 'full_name' | 'mobile' | 'email' | 'course' | 'city' | 'message';
type Field = TextField | 'consent';

interface Values {
  full_name: string;
  mobile: string;
  email: string;
  course: string;
  city: string;
  message: string;
  consent: boolean;
}

interface Status {
  type: 'success' | 'error' | 'info';
  title: string;
  body: string;
  handoff?: { whatsapp: string; email: string };
}

const settings = {
  application: {
    idPrefix: 'app',
    formType: 'Course Application',
    submitLabel: 'Submit Application',
    courseLabel: 'Select Your Course',
    coursePlaceholder: 'Select your course',
    courseRequired: true,
    messageRequired: false,
    showCity: true,
    endpoint: formEndpoints.application,
    successTitle: 'Application submitted successfully',
  },
  enquiry: {
    idPrefix: 'enq',
    formType: 'Contact Enquiry',
    submitLabel: 'Send Enquiry',
    courseLabel: 'Course of Interest',
    coursePlaceholder: 'Select a course',
    courseRequired: false,
    messageRequired: true,
    showCity: false,
    endpoint: formEndpoints.enquiry,
    successTitle: 'Enquiry sent successfully',
  },
} as const;

const statusStyles: Record<Status['type'], string> = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  error: 'border-red-200 bg-red-50 text-red-900',
  info: 'border-brand-200 bg-brand-50 text-brand-950',
};

const requiredMessages: Record<Field, string> = {
  full_name: 'Please enter your full name.',
  mobile: 'Please enter your mobile number.',
  email: 'Please enter your email address.',
  course: 'Please select a course.',
  city: 'Please enter your city / location.',
  message: 'Please enter your message / query.',
  consent: 'Please confirm that we may contact you.',
};

const emptyValues: Values = { full_name: '', mobile: '', email: '', course: '', city: '', message: '', consent: false };

function summary(formType: string, values: Values) {
  const lines = [
    `Form: ${formType}`,
    `Name: ${values.full_name.trim()}`,
    `Mobile: ${normalizePhone(values.mobile.trim())}`,
    `Email: ${values.email.trim()}`,
  ];
  if (values.course) lines.push(`Course: ${values.course}`);
  if (values.city.trim()) lines.push(`City: ${values.city.trim()}`);
  if (values.message.trim()) lines.push(`Message: ${values.message.trim()}`);
  lines.push('Consent to be contacted: Yes');
  return lines.join('\n');
}

function handoffLinks(variant: Variant, formType: string, values: Values) {
  const text = summary(formType, values);
  const subject = variant === 'application' ? `Course Application: ${values.course}` : 'Website Enquiry';
  return {
    whatsapp: `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(`Hello Digital Skills Academy,\n\n${text}`)}`,
    email: `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`,
  };
}

function RequiredMark() {
  return (
    <span className="text-red-600" aria-hidden="true">
      *
    </span>
  );
}

function Optional() {
  return <span className="font-normal text-slate-500">(optional)</span>;
}

function FieldError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} className="field-error" hidden={!message}>
      {message}
    </p>
  );
}

export default function LeadForm({ variant }: { variant: Variant }) {
  const config = settings[variant];
  const id = (field: string) => `${config.idPrefix}-${field}`;

  const [searchParams] = useSearchParams();
  const preselected = getCourse(searchParams.get('course') ?? '')?.title ?? '';

  const [values, setValues] = useState<Values>(() => ({ ...emptyValues, course: preselected }));
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<Field, boolean>>>({});
  const [honeypot, setHoneypot] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<Status | null>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const fieldRefs = useRef<Partial<Record<Field, HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null>>>({});

  useEffect(() => {
    if (preselected) setValues((current) => ({ ...current, course: preselected }));
  }, [preselected]);

  useEffect(() => {
    if (!status || !statusRef.current) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    statusRef.current.focus({ preventScroll: true });
    statusRef.current.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'nearest' });
  }, [status]);

  const isRequired = (field: Field) =>
    field === 'full_name' ||
    field === 'mobile' ||
    field === 'email' ||
    field === 'consent' ||
    (field === 'course' && config.courseRequired) ||
    (field === 'message' && config.messageRequired);

  const errorFor = (field: Field, current: Values) => {
    if (field === 'consent') return current.consent ? '' : requiredMessages.consent;
    const value = current[field].trim();
    if (!value) return isRequired(field) ? requiredMessages[field] : '';
    if (field === 'full_name') return validateName(value);
    if (field === 'mobile') return validatePhone(value);
    if (field === 'email') return validateEmail(value);
    return '';
  };

  const check = (field: Field, current: Values = values) => {
    const message = errorFor(field, current);
    setErrors((previous) => ({ ...previous, [field]: message }));
    return message;
  };

  const handleChange =
    (field: Field) => (event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      const target = event.target;
      const next: Values = {
        ...values,
        [field]: target instanceof HTMLInputElement && target.type === 'checkbox' ? target.checked : target.value,
      };
      setValues(next);
      // Checkboxes and selects validate on change; text fields only re-check once they are showing an error.
      if (field === 'consent' || field === 'course') {
        setTouched((previous) => ({ ...previous, [field]: true }));
        check(field, next);
      } else if (errors[field]) {
        check(field, next);
      }
    };

  const handleBlur = (field: TextField) => () => {
    if (touched[field] || values[field]) {
      setTouched((previous) => ({ ...previous, [field]: true }));
      check(field);
    }
  };

  const domId = (field: Field) => id(field === 'full_name' ? 'name' : field === 'mobile' ? 'phone' : field);
  const errorId = (field: Field) => `${domId(field)}-error`;

  const fieldProps = (field: Field, describedBy: string[] = []) => ({
    id: domId(field),
    name: field,
    ref: (element: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null) => {
      fieldRefs.current[field] = element;
    },
    'aria-invalid': Boolean(errors[field]),
    'aria-required': isRequired(field) || undefined,
    required: isRequired(field),
    'aria-describedby': [...describedBy, errorId(field)].join(' '),
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (submitting) return;

    const order: Field[] = ['full_name', 'mobile', 'email', 'course', 'city', 'message', 'consent'];
    const nextErrors: Partial<Record<Field, string>> = {};
    for (const field of order) nextErrors[field] = errorFor(field, values);
    setErrors(nextErrors);
    setTouched(Object.fromEntries(order.map((field) => [field, true])));

    const firstInvalid = order.find((field) => nextErrors[field]);
    if (firstInvalid) {
      setStatus(null);
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }
    if (honeypot) return;

    if (!config.endpoint) {
      setStatus({
        type: 'info',
        title: 'Online submission is not available yet',
        body: 'Your details are complete, but this form is not yet connected to our system, so nothing has been submitted. Please send your details to us directly using one of the options below.',
        handoff: handoffLinks(variant, config.formType, values),
      });
      return;
    }

    const data = new FormData();
    data.set('form_type', config.formType);
    data.set('full_name', values.full_name.trim());
    data.set('mobile', normalizePhone(values.mobile.trim()));
    data.set('email', values.email.trim());
    if (values.course) data.set('course', values.course);
    if (config.showCity) data.set('city', values.city.trim());
    data.set('message', values.message.trim());
    data.set('consent', 'Yes');
    data.set('page', window.location.href);

    setSubmitting(true);
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(config.endpoint, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
        signal: controller.signal,
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setValues(emptyValues);
      setErrors({});
      setTouched({});
      setStatus({
        type: 'success',
        title: config.successTitle,
        body: 'Thank you! Our team will contact you soon regarding your request.',
      });
    } catch {
      setStatus({
        type: 'error',
        title: 'We could not submit your details',
        body: 'Something went wrong while sending the form. Please check your internet connection and try again, or contact us directly using one of the options below.',
        handoff: handoffLinks(variant, config.formType, values),
      });
    } finally {
      window.clearTimeout(timeout);
      setSubmitting(false);
    }
  };

  const label = (field: Field, text: string, required: boolean): ReactNode => (
    <label htmlFor={domId(field)} className="field-label">
      {text} {required ? <RequiredMark /> : <Optional />}
    </label>
  );

  return (
    <form className="grid gap-5 sm:grid-cols-2" noValidate onSubmit={handleSubmit}>
      <div className="hidden" aria-hidden="true">
        <label>
          Leave this field empty
          <input
            type="text"
            name="_gotcha"
            tabIndex={-1}
            autoComplete="off"
            value={honeypot}
            onChange={(event) => setHoneypot(event.target.value)}
          />
        </label>
      </div>

      <div className="sm:col-span-2">
        {label('full_name', 'Full Name', true)}
        <input
          {...fieldProps('full_name')}
          type="text"
          className="field-input"
          placeholder="Enter your full name"
          autoComplete="name"
          maxLength={80}
          value={values.full_name}
          onChange={handleChange('full_name')}
          onBlur={handleBlur('full_name')}
        />
        <FieldError id={errorId('full_name')} message={errors.full_name ?? ''} />
      </div>

      <div>
        {label('mobile', 'Mobile Number', true)}
        <input
          {...fieldProps('mobile')}
          type="tel"
          className="field-input"
          placeholder="Enter your mobile number"
          autoComplete="tel"
          inputMode="tel"
          maxLength={16}
          value={values.mobile}
          onChange={handleChange('mobile')}
          onBlur={handleBlur('mobile')}
        />
        <FieldError id={errorId('mobile')} message={errors.mobile ?? ''} />
      </div>

      <div>
        {label('email', 'Email Address', true)}
        <input
          {...fieldProps('email')}
          type="email"
          className="field-input"
          placeholder="Enter your email address"
          autoComplete="email"
          inputMode="email"
          maxLength={120}
          value={values.email}
          onChange={handleChange('email')}
          onBlur={handleBlur('email')}
        />
        <FieldError id={errorId('email')} message={errors.email ?? ''} />
      </div>

      <div className="sm:col-span-2">
        {label('course', config.courseLabel, config.courseRequired)}
        <select
          {...fieldProps('course', [id('course-hint')])}
          className="field-input"
          value={values.course}
          onChange={handleChange('course')}
        >
          <option value="">{config.coursePlaceholder}</option>
          {variant === 'enquiry' && <option value="General enquiry">General enquiry</option>}
          {courses.map((course) => (
            <option key={course.slug} value={course.title}>
              {course.title} ({course.duration})
            </option>
          ))}
        </select>
        <p id={id('course-hint')} className="field-hint">
          Only courses currently open for enrollment are listed. Upcoming courses will be added when they launch.
        </p>
        <FieldError id={errorId('course')} message={errors.course ?? ''} />
      </div>

      {config.showCity && (
        <div className="sm:col-span-2">
          {label('city', 'City / Location', false)}
          <input
            {...fieldProps('city')}
            type="text"
            className="field-input"
            placeholder="Enter your city"
            autoComplete="address-level2"
            maxLength={80}
            value={values.city}
            onChange={handleChange('city')}
            onBlur={handleBlur('city')}
          />
          <FieldError id={errorId('city')} message={errors.city ?? ''} />
        </div>
      )}

      <div className="sm:col-span-2">
        {label('message', 'Message / Query', config.messageRequired)}
        <textarea
          {...fieldProps('message')}
          rows={4}
          maxLength={1500}
          className="field-input resize-y"
          placeholder="Write your message"
          value={values.message}
          onChange={handleChange('message')}
          onBlur={handleBlur('message')}
        />
        <FieldError id={errorId('message')} message={errors.message ?? ''} />
      </div>

      <div className="sm:col-span-2">
        <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-4">
          <input
            {...fieldProps('consent')}
            type="checkbox"
            value="Yes"
            checked={values.consent}
            onChange={handleChange('consent')}
            className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded accent-brand-800"
          />
          <label htmlFor={domId('consent')} className="cursor-pointer text-sm leading-relaxed text-slate-700">
            I agree to be contacted by Digital Skills Academy regarding courses, enrollment and related information.{' '}
            <RequiredMark />
            <span className="mt-1 block text-xs text-slate-500">
              Read our{' '}
              <Link to="/privacy-policy" className="font-semibold text-brand-700 underline underline-offset-2">
                Privacy Policy
              </Link>
              .
            </span>
          </label>
        </div>
        <FieldError id={errorId('consent')} message={errors.consent ?? ''} />
      </div>

      <div className="sm:col-span-2">
        <p className="mb-4 text-xs text-slate-500">
          <RequiredMark /> Required fields
        </p>
        <button
          type="submit"
          className="btn btn-primary btn-lg w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
          disabled={submitting}
          aria-busy={submitting}
        >
          {submitting && <LoaderCircle className="h-5 w-5 animate-spin" aria-hidden="true" />}
          <span>{submitting ? 'Submitting…' : config.submitLabel}</span>
        </button>
      </div>

      <div ref={statusRef} className="sm:col-span-2 outline-none" role="status" aria-live="polite" tabIndex={-1}>
        {status && (
          <div className={`rounded-2xl border p-5 ${statusStyles[status.type]}`}>
            <p className="font-bold">{status.title}</p>
            <p className="mt-1 text-sm leading-relaxed">{status.body}</p>
            {status.handoff && (
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a className="btn btn-sm btn-whatsapp" href={status.handoff.whatsapp} target="_blank" rel="noopener">
                  Send via WhatsApp
                </a>
                <a className="btn btn-sm btn-outline" href={status.handoff.email}>
                  Send via Email
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
