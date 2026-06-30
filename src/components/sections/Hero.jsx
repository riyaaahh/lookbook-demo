import { motion } from 'framer-motion'
import { heroContent } from '../../data/content'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0">
        <img
          src={heroContent.image}
          alt="Luxury salon interior"
          className="h-full w-full scale-105 object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-brand-deep/80" />
        <div className="absolute inset-0 bg-linear-to-b from-brand-deep/90 via-brand-deep/70 to-brand-deep/95" />
        <div className="absolute inset-0 bg-linear-to-r from-brand-deep/35 via-transparent to-brand-deep/35" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-36 text-center md:px-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="ornament text-on-dark-subtle mb-6 text-sm"
        >
          ✦
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-on-dark-subtle font-accent mb-6 text-lg font-light italic tracking-[0.15em] md:text-xl"
        >
          {heroContent.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="text-on-dark font-display mb-8 text-5xl font-light tracking-[0.06em] sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.1]"
        >
          {heroContent.title}
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mb-10 flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-brand-sunbeam/30" />
          <div className="h-1 w-1 rotate-45 bg-brand-sunbeam/50" />
          <div className="h-px w-12 bg-brand-sunbeam/30" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-on-dark-subtle mx-auto mb-12 max-w-md font-body text-sm font-light leading-[1.9] md:text-base"
        >
          {heroContent.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <Button href="#contact" size="lg" onDark>
            {heroContent.ctaPrimary}
          </Button>
          <Button href="#services" variant="secondary" size="lg" onDark>
            {heroContent.ctaSecondary}
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <span className="text-on-dark-subtle font-body text-[10px] font-light uppercase tracking-[0.35em]">
            Scroll
          </span>
          <div className="h-12 w-px bg-linear-to-b from-brand-on-dark/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  )
}
