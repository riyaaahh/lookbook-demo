import { motion } from 'framer-motion'
import { services } from '../../data/content'
import MotionReveal from '../ui/MotionReveal'
import SectionHeading from '../ui/SectionHeading'

function ServiceCard({ service, index }) {
  const number = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      className="group relative flex h-full flex-col overflow-hidden bg-brand-sand shadow-sm shadow-brand-dark/4 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-brand-dark/8"
      whileHover={{ transition: { duration: 0.4 } }}
    >
      {/* Image */}
      <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[4/3]">
        <img
          src={service.image}
          alt={service.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-brand-deep/55 via-brand-deep/5 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Number badge */}
        <span className="absolute top-5 left-5 font-accent text-sm tracking-[0.2em] text-brand-sand/90">
          {number}
        </span>

        {/* Title overlay on image bottom */}
        <div className="absolute right-0 bottom-0 left-0 px-6 pb-5 pt-12">
          <h3 className="font-display text-2xl font-light tracking-wide text-brand-sand md:text-[1.65rem]">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 py-6 md:px-7 md:py-7">
        <p className="mb-5 flex-1 font-body text-sm font-light leading-[1.85] text-brand-muted-dark">
          {service.description}
        </p>

        {/* Elegant feature list — no boxy tags */}
        <ul className="space-y-2 border-t border-brand-moss-dark/12 pt-5">
          {service.features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-3 font-body text-[11px] font-light tracking-[0.12em] text-brand-dark/75"
            >
              <span className="h-px w-4 shrink-0 bg-brand-sunbeam/70 transition-all duration-500 group-hover:w-6 group-hover:bg-brand-sunbeam" />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="mt-6 inline-flex items-center gap-2 font-body text-[10px] font-light uppercase tracking-[0.22em] text-brand-moss-dark transition-all duration-500 group-hover:gap-3 group-hover:text-brand-rose-dark"
        >
          Book This Service
          <span aria-hidden="true">→</span>
        </a>
      </div>

      {/* Hover accent line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-brand-sunbeam transition-all duration-500 group-hover:w-full" />
    </motion.article>
  )
}

export default function Services() {
  const topRow = services.slice(0, 3)
  const bottomRow = services.slice(3)

  return (
    <section id="services" className="section-padding bg-brand-mist/50">
      <div className="section-container max-w-7xl">
        <SectionHeading
          light
          eyebrow="What We Offer"
          title="Our Services"
          subtitle="Indulge in a curated selection of premium beauty and grooming experiences, each delivered with meticulous care."
        />

        {/* Top row — 3 equal columns */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {topRow.map((service, index) => (
            <MotionReveal key={service.id} delay={index * 0.1}>
              <ServiceCard service={service} index={index} />
            </MotionReveal>
          ))}
        </div>

        {/* Bottom row — 2 cards centered */}
        <div className="mt-7 grid gap-7 sm:grid-cols-2 lg:mt-8 lg:grid-cols-6 lg:gap-8">
          {bottomRow.map((service, index) => (
            <MotionReveal
              key={service.id}
              delay={(index + 3) * 0.1}
              className={`sm:col-span-1 ${
                index === 0 ? 'lg:col-span-2 lg:col-start-2' : 'lg:col-span-2'
              }`}
            >
              <ServiceCard service={service} index={index + 3} />
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
