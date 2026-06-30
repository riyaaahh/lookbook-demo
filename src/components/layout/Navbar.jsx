import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks } from '../../data/content'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import Button from '../ui/Button'

export default function Navbar() {
  const scrolled = useScrollPosition(60)
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleNavClick = () => setMobileOpen(false)

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'border-b border-brand-moss-dark/10 bg-brand-sand/95 shadow-sm shadow-brand-dark/5 backdrop-blur-md'
            : 'border-b border-white/8 bg-brand-deep/65 backdrop-blur-md'
        }`}
      >
        <nav className="section-container flex max-w-7xl items-center justify-between py-5 md:py-6">
          <a
            href="#home"
            className={`font-display text-xl font-light tracking-[0.25em] md:text-2xl ${
              scrolled ? 'text-brand-dark' : 'text-on-dark'
            }`}
          >
            LOOK{' '}
            <span className={`italic ${scrolled ? 'text-brand-moss-dark' : 'text-brand-sunbeam'}`}>
              Book
            </span>
          </a>

          <ul className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`group relative font-body text-[11px] font-light uppercase tracking-[0.22em] transition-colors duration-500 ${
                    scrolled
                      ? 'text-brand-dark/80 hover:text-brand-moss-dark'
                      : 'text-on-dark-subtle hover:text-brand-on-dark'
                  }`}
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#contact" size="sm" onDark={!scrolled}>
              Book Now
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
            className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span
              className={`block h-px w-5 transition-all duration-500 ${
                scrolled ? 'bg-brand-dark' : 'bg-brand-on-dark'
              } ${mobileOpen ? 'translate-y-[3.5px] rotate-45' : ''}`}
            />
            <span
              className={`block h-px w-5 transition-all duration-500 ${
                scrolled ? 'bg-brand-dark' : 'bg-brand-on-dark'
              } ${mobileOpen ? '-translate-y-[3.5px] -rotate-45' : ''}`}
            />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-brand-sand/98 backdrop-blur-xl lg:hidden"
          >
            <ul className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="font-display text-2xl font-light tracking-wide text-brand-dark transition-colors duration-500 hover:text-brand-moss-dark"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Button href="#contact" onClick={handleNavClick}>
                  Book Now
                </Button>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
