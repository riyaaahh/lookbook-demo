import { aboutContent } from '../../data/content'
import MotionReveal from '../ui/MotionReveal'
import SectionHeading from '../ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-sand">
      <div className="section-container max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          <MotionReveal direction="left">
            <div className="relative">
              <div className="absolute -top-3 -left-3 h-full w-full border border-brand-moss-dark/20" />
              <div className="absolute -bottom-3 -right-3 h-full w-full border border-brand-sunbeam/20" />
              <img
                src={aboutContent.image}
                alt="Look Book salon team"
                className="relative h-[420px] w-full object-cover shadow-md shadow-brand-dark/10 md:h-[520px]"
                loading="lazy"
              />
            </div>
          </MotionReveal>

          <div>
            <SectionHeading
              light
              eyebrow={aboutContent.eyebrow}
              title={aboutContent.title}
              align="left"
            />

            <div className="space-y-5">
              {aboutContent.paragraphs.map((paragraph, index) => (
                <MotionReveal key={index} delay={index * 0.1}>
                  <p className="font-body text-sm font-light leading-[1.9] text-brand-muted-dark md:text-base">
                    {paragraph}
                  </p>
                </MotionReveal>
              ))}
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-brand-moss-dark/10 pt-10 sm:grid-cols-4">
              {aboutContent.stats.map((stat, index) => (
                <MotionReveal key={stat.label} delay={0.3 + index * 0.1}>
                  <div className="text-center lg:text-left">
                    <p className="font-display text-3xl font-light text-brand-moss-dark md:text-4xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 font-body text-[10px] font-light uppercase tracking-[0.2em] text-brand-muted-dark">
                      {stat.label}
                    </p>
                  </div>
                </MotionReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
