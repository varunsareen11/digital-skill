import { whyChooseUs } from '../data/content';
import IconTile from '../components/ui/IconTile';
import SectionHeading from '../components/ui/SectionHeading';

export default function WhyChooseSection() {
  return (
    <section className="section bg-slate-50/80" aria-labelledby="why-heading">
      <div className="container-page">
        <SectionHeading id="why-heading" eyebrow="Why Digital Skills Academy?" title="More Than Just Learning" center />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((item, index) => (
            <article
              key={item.title}
              className="card card-hover group p-6 sm:p-7"
              data-aos="fade-up"
              data-aos-delay={(index % 3) * 70}
            >
              <IconTile icon={item.icon} tone={item.tone} className="transition duration-300 group-hover:scale-110" />
              <h3 className="mt-5 text-lg font-extrabold">
                {index + 1}. {item.title}
              </h3>
              <p className="mt-2 leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
