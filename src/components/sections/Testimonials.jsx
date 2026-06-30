import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../../data/content'
import SectionHeading from '../ui/SectionHeading'

function StarRating({ rating }) {
  return (
    <div className="flex justify-center gap-1.5">
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-brand-sunbeam/80 text-xs">
          ✦
        </span>
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section id="testimonials" className="section-padding bg-brand-mist/50">
      <div className="section-container max-w-7xl">
        <SectionHeading
          light
          eyebrow="Client Love"
          title="Testimonials"
          subtitle="Hear from those who have experienced the Look Book difference firsthand."
        />

        <div className="relative mx-auto max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <StarRating rating={testimonials[active].rating} />

              <p className="font-accent my-10 text-xl font-light italic leading-[1.7] text-brand-dark/85 md:text-2xl lg:text-[1.75rem]">
                &ldquo;{testimonials[active].quote}&rdquo;
              </p>

              <footer>
                <cite className="not-italic">
                  <p className="font-display text-lg font-light tracking-wide text-brand-moss-dark">
                    {testimonials[active].name}
                  </p>
                  <p className="mt-2 font-body text-[10px] font-light uppercase tracking-[0.22em] text-brand-muted-dark">
                    {testimonials[active].role}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() =>
                setActive((prev) =>
                  prev === 0 ? testimonials.length - 1 : prev - 1,
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-moss-dark/25 text-brand-moss-dark transition-all duration-500 hover:border-brand-moss-dark hover:bg-brand-moss-dark/8"
            >
              ←
            </button>

            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setActive(i)}
                  className={`rounded-full transition-all duration-500 ${
                    i === active
                      ? 'h-1.5 w-8 bg-brand-moss-dark'
                      : 'h-1.5 w-1.5 bg-brand-moss-dark/25 hover:bg-brand-moss-dark/50'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() =>
                setActive((prev) =>
                  prev === testimonials.length - 1 ? 0 : prev + 1,
                )
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-brand-moss-dark/25 text-brand-moss-dark transition-all duration-500 hover:border-brand-moss-dark hover:bg-brand-moss-dark/8"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
