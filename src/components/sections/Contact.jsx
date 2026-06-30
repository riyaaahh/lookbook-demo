import { useState } from 'react'
import { motion } from 'framer-motion'
import { contactInfo } from '../../data/content'
import Button from '../ui/Button'
import MotionReveal from '../ui/MotionReveal'
import SectionHeading from '../ui/SectionHeading'

function ContactLink({ href, icon, label, description }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="elegant-card elegant-border group flex items-center gap-5 p-6 transition-all duration-500 hover:border-brand-moss-dark/30 hover:shadow-md hover:shadow-brand-dark/8"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-brand-moss-dark/25 text-brand-moss-dark transition-all duration-500 group-hover:border-brand-moss-dark group-hover:bg-brand-moss-dark/8">
        {icon}
      </div>
      <div>
        <p className="font-display text-lg font-light tracking-wide text-brand-dark">
          {label}
        </p>
        <p className="mt-1 font-body text-sm font-light text-brand-muted-dark">
          {description}
        </p>
      </div>
    </a>
  )
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const inputClass =
    'w-full border border-brand-moss-dark/20 bg-brand-sand/80 px-5 py-3.5 font-body text-sm font-light text-brand-dark placeholder:text-brand-muted-dark/50 outline-none transition-all duration-500 focus:border-brand-moss-dark focus:bg-brand-sand'

  return (
    <section id="contact" className="section-padding bg-brand-ocean/8">
      <div className="section-container max-w-7xl">
        <SectionHeading
          light
          eyebrow="Get In Touch"
          title="Contact Us"
          subtitle="We would love to welcome you. Reach out to book your appointment or enquire about our services."
        />

        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="mb-10 grid gap-4">
              <MotionReveal delay={0.1}>
                <ContactLink
                  href={contactInfo.whatsapp}
                  label="WhatsApp"
                  description={contactInfo.phone}
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  }
                />
              </MotionReveal>

              <MotionReveal delay={0.2}>
                <ContactLink
                  href={contactInfo.instagram}
                  label="Instagram"
                  description="@lookbookmalappuram"
                  icon={
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  }
                />
              </MotionReveal>

              <MotionReveal delay={0.3}>
                <ContactLink
                  href={contactInfo.mapsLink}
                  label="Visit Us"
                  description={contactInfo.address}
                  icon={
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  }
                />
              </MotionReveal>
            </div>

            <MotionReveal delay={0.4}>
              <div className="space-y-3 font-body text-sm font-light text-brand-muted-dark">
                <p>
                  <span className="font-normal text-brand-moss-dark">Email</span>{' '}
                  · {contactInfo.email}
                </p>
                <p>
                  <span className="font-normal text-brand-moss-dark">Hours</span>{' '}
                  · {contactInfo.hours}
                </p>
              </div>
            </MotionReveal>

            <MotionReveal delay={0.5} className="mt-10">
              <div className="overflow-hidden border border-brand-moss-dark/15 shadow-sm shadow-brand-dark/5">
                <iframe
                  title="Look Book Salon Location"
                  src={contactInfo.mapsEmbed}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
            </MotionReveal>
          </div>

          <MotionReveal direction="right">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className={inputClass}
                />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="">Select Service</option>
                  <option value="hair">Hair</option>
                  <option value="beauty">Beauty</option>
                  <option value="makeup">Makeup</option>
                  <option value="nail-art">Nail Art</option>
                  <option value="bridal">Bridal</option>
                </select>
              </div>

              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Send Message
              </Button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="font-accent text-base italic text-brand-moss-dark"
                >
                  Thank you — we&apos;ll be in touch shortly.
                </motion.p>
              )}
            </form>
          </MotionReveal>
        </div>
      </div>
    </section>
  )
}
