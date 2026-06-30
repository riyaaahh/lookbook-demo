import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}) {
  const alignClass =
    align === 'center'
      ? 'text-center mx-auto'
      : align === 'left'
        ? 'text-left'
        : 'text-right ml-auto'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-16 md:mb-20 max-w-2xl ${alignClass}`}
    >
      {eyebrow && (
        <>
          <p
            className={`ornament mb-2 text-sm md:text-base ${
              light ? 'text-brand-moss-dark' : 'text-brand-sunbeam/90'
            }`}
          >
            ✦
          </p>
          <p
            className={`font-accent mb-5 text-lg font-light italic tracking-[0.12em] md:text-xl ${
              light ? 'text-brand-moss-dark' : 'text-brand-sunbeam'
            }`}
          >
            {eyebrow}
          </p>
        </>
      )}
      <h2
        className={`font-display mb-5 text-3xl font-light tracking-wide md:text-4xl lg:text-[2.75rem] lg:leading-tight ${
          light ? 'text-brand-dark' : 'text-brand-sand'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mx-auto max-w-lg font-body text-sm font-light leading-[1.8] md:text-base ${
            light ? 'text-brand-muted-dark' : 'text-brand-mist/90'
          } ${align === 'center' ? '' : 'mx-0'}`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-8 flex items-center gap-3 ${
          align === 'center' ? 'justify-center' : ''
        }`}
      >
        <div
          className={`h-px w-10 ${
            light ? 'bg-brand-moss-dark/30' : 'bg-brand-sunbeam/40'
          }`}
        />
        <div
          className={`h-1 w-1 rotate-45 ${
            light ? 'bg-brand-moss-dark/50' : 'bg-brand-sunbeam/60'
          }`}
        />
        <div
          className={`h-px w-10 ${
            light ? 'bg-brand-moss-dark/30' : 'bg-brand-sunbeam/40'
          }`}
        />
      </div>
    </motion.div>
  )
}
