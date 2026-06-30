import { contactInfo, footerContent, navLinks } from '../../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-brand-moss-dark/15 bg-brand-ocean">
      <div className="section-container max-w-7xl py-20 md:py-24">
        <div className="grid gap-14 md:grid-cols-3">
          <div>
            <a
              href="#home"
              className="font-display text-2xl font-light tracking-[0.2em] text-brand-dark"
            >
              LOOK{' '}
              <span className="italic text-brand-deep">Book</span>
            </a>
            <p className="mt-5 max-w-xs font-body text-sm font-light leading-[1.85] text-brand-dark/85">
              {footerContent.tagline}
            </p>
          </div>

          <div>
            <h4 className="ornament mb-5 text-xs">✦</h4>
            <h4 className="mb-5 font-body text-[10px] font-light uppercase tracking-[0.25em] text-brand-dark">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-sm font-light text-brand-dark/80 transition-colors duration-500 hover:text-brand-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="ornament mb-5 text-xs">✦</h4>
            <h4 className="mb-5 font-body text-[10px] font-light uppercase tracking-[0.25em] text-brand-dark">
              Connect
            </h4>
            <ul className="space-y-3 font-body text-sm font-light text-brand-dark/80">
              <li>{contactInfo.phone}</li>
              <li>{contactInfo.email}</li>
              <li className="pt-2">
                <a
                  href={contactInfo.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-500 hover:text-brand-deep"
                >
                  Instagram
                </a>
                <span className="mx-2 text-brand-dark/30">·</span>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-500 hover:text-brand-deep"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3 border-t border-brand-dark/12 pt-10 text-center">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-brand-dark/20" />
            <div className="h-1 w-1 rotate-45 bg-brand-dark/30" />
            <div className="h-px w-8 bg-brand-dark/20" />
          </div>
          <p className="font-body text-xs font-light text-brand-dark/80">
            {footerContent.copyright}
          </p>
          <p className="font-accent text-[11px] italic text-brand-dark/60">
            {footerContent.demoNote}
          </p>
        </div>
      </div>
    </footer>
  )
}
