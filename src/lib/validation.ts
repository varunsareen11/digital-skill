/** Strips spaces/dashes/brackets and a leading +91, 91 or 0 so only the 10-digit mobile number remains. */
export function normalizePhone(value: string) {
  let digits = value.replace(/[\s\-().]/g, '');
  if (digits.startsWith('+91')) digits = digits.slice(3);
  else if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2);
  else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1);
  return digits;
}

export function validateName(value: string) {
  if (value.length < 2) return 'Please enter your full name.';
  if (/\d/.test(value)) return 'Name should not contain numbers.';
  return '';
}

export function validatePhone(value: string) {
  return /^[6-9]\d{9}$/.test(normalizePhone(value))
    ? ''
    : 'Please enter a valid 10-digit Indian mobile number (e.g. 9876543210).';
}

export function validateEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)
    ? ''
    : 'Please enter a valid email address (e.g. name@example.com).';
}
