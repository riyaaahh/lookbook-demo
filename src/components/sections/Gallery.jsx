import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { galleryImages } from '../../data/content'
import MotionReveal from '../ui/MotionReveal'
import SectionHeading from '../ui/SectionHeading'

function GalleryImage({ src, alt, className = '' }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-brand-mist ${className}`}
      >
        <span className="font-body text-[10px] font-light uppercase tracking-[0.2em] text-brand-muted-dark">
          {alt}
        </span>
      </div>
    )
  }

  return (
    <>
      {!loaded && (
        <div
          className={`absolute inset-0 animate-pulse bg-brand-mist ${className}`}
        />
      )}
      <img
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-out ${
          loaded ? 'opacity-100' : 'opacity-0'
        } ${className}`}
        loading="lazy"
      />
    </>
  )
}

export default function Gallery() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="gallery" className="section-padding bg-brand-ocean/10">
      <div className="section-container max-w-7xl">
        <SectionHeading
          light
          eyebrow="Our Work"
          title="Gallery"
          subtitle="A glimpse into the artistry, ambience, and transformative experiences that define Look Book."
        />

        <div className="grid grid-cols-2 gap-4 md:gap-5 lg:grid-cols-4 lg:auto-rows-[210px] xl:auto-rows-[250px]">
          {galleryImages.map((image, index) => (
            <MotionReveal
              key={image.id}
              delay={index * 0.08}
              className={`${image.span} h-full min-h-0 cursor-pointer`}
            >
              <motion.div
                whileHover={{ scale: 1.015 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => setSelected(image)}
                className="group relative h-full w-full overflow-hidden bg-brand-mist shadow-sm shadow-brand-dark/5"
              >
                <GalleryImage src={image.src} alt={image.alt} />
                <div className="absolute inset-0 bg-brand-deep/0 transition-all duration-500 group-hover:bg-brand-deep/30" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <span className="ornament text-xs text-brand-sand/80">✦</span>
                  <span className="font-body text-[10px] font-light uppercase tracking-[0.35em] text-brand-sand">
                    View
                  </span>
                </div>
              </motion.div>
            </MotionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-brand-deep/92 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden shadow-2xl"
            >
              <img
                src={selected.src.replace('w=800', 'w=1400')}
                alt={selected.alt}
                className="max-h-[85vh] w-full object-contain"
              />
              <button
                type="button"
                onClick={() => setSelected(null)}
                aria-label="Close gallery"
                className="absolute top-5 right-5 flex h-10 w-10 items-center justify-center rounded-full border border-brand-sand/30 text-brand-sand transition-all duration-500 hover:border-brand-sunbeam hover:bg-brand-sunbeam/20 hover:text-brand-sunbeam"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
