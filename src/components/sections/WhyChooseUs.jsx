import { whyChooseUs } from '../../data/content'
import MotionReveal from '../ui/MotionReveal'
import SectionHeading from '../ui/SectionHeading'

export default function WhyChooseUs() {
  return (
    <section className="section-padding relative overflow-hidden bg-brand-sand">
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-brand-moss-dark/40 to-transparent" />
        <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-brand-moss-dark/40 to-transparent" />
      </div>

      <div className="section-container relative max-w-7xl">
        <SectionHeading
          light
          eyebrow="The Look Book Difference"
          title="Why Choose Us"
          subtitle="We redefine the salon experience through artistry, luxury, and an unwavering commitment to excellence."
        />

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.12}>
              <div className="group text-center">
                <div className="mx-auto mb-7 flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full border border-brand-moss-dark/25 text-xl text-brand-moss-dark transition-all duration-500 group-hover:border-brand-sunbeam/60 group-hover:bg-brand-sunbeam/20 group-hover:text-brand-dark">
                  {item.icon}
                </div>
                <h3 className="font-display mb-3 text-xl font-light tracking-wide text-brand-dark">
                  {item.title}
                </h3>
                <p className="font-body text-sm font-light leading-[1.85] text-brand-muted-dark">
                  {item.description}
                </p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
