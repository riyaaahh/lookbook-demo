import { useState } from 'react'
import { motion } from 'framer-motion'
import { instagramPosts, instagramProfile } from '../../data/instagram'
import { useInViewAutoplay } from '../../hooks/useInViewAutoplay'
import MotionReveal from '../ui/MotionReveal'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

function ReelIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function SideAction({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-black/20 backdrop-blur-sm">
        {icon}
      </div>
      <span className="text-[10px] font-medium text-white/90">{label}</span>
    </div>
  )
}

function ReelCard({ post }) {
  const { ref, videoRef, isInView } = useInViewAutoplay(0.55)
  const [muted, setMuted] = useState(true)

  const toggleMute = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const next = !muted
    setMuted(next)
    if (videoRef.current) videoRef.current.muted = next
  }

  const isReel = post.type === 'reel' && post.localVideo

  return (
    <motion.a
      ref={ref}
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="reel-card group relative block w-[220px] shrink-0 snap-center overflow-hidden rounded-2xl bg-black shadow-lg shadow-brand-dark/15 sm:w-[240px] md:w-[260px] lg:w-[280px]"
    >
      <div className="relative aspect-[9/16] w-full">
        {isReel ? (
          <video
            ref={videoRef}
            src={post.localVideo}
            poster={post.thumbnail}
            muted={muted}
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <img
            src={post.thumbnail}
            alt={post.caption}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        )}

        {/* Top gradient + reels badge */}
        <div className="absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/50 to-transparent" />
        <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-md bg-black/30 px-2 py-1 backdrop-blur-sm">
          <ReelIcon className="h-3.5 w-3.5 text-white" />
          {isReel && (
            <span className="text-[10px] font-semibold tracking-wide text-white">Reels</span>
          )}
        </div>

        {/* Side actions — Instagram-style */}
        <div className="absolute right-2 bottom-24 flex flex-col gap-4 opacity-90">
          <SideAction
            label=""
            icon={
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
          />
          <SideAction
            label=""
            icon={
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            }
          />
          <SideAction
            label=""
            icon={
              <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            }
          />
        </div>

        {/* Mute toggle for reels */}
        {isReel && (
          <button
            type="button"
            onClick={toggleMute}
            aria-label={muted ? 'Unmute' : 'Mute'}
            className="absolute top-3 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/35 backdrop-blur-sm transition-colors hover:bg-black/50"
          >
            {muted ? (
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        )}

        {/* Playing indicator */}
        {isReel && isInView && (
          <div className="absolute top-3 left-1/2 -translate-x-1/2 rounded-full bg-black/30 px-2.5 py-0.5 backdrop-blur-sm">
            <span className="text-[9px] font-medium uppercase tracking-widest text-white/90">
              Playing
            </span>
          </div>
        )}

        {/* Bottom caption overlay — Instagram style */}
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/80 via-black/40 to-transparent px-3 pt-16 pb-3">
          <div className="flex items-center gap-2 pr-10">
            <img
              src={instagramProfile.profilePic}
              alt={instagramProfile.name}
              className="h-7 w-7 shrink-0 rounded-full border border-white/30 object-cover"
            />
            <span className="truncate text-xs font-semibold text-white">
              {instagramProfile.handle}
            </span>
          </div>
          {post.caption && (
            <p className="mt-2 line-clamp-2 pr-10 text-[11px] leading-relaxed text-white/90">
              {post.caption}
            </p>
          )}
        </div>
      </div>
    </motion.a>
  )
}

export default function Gallery() {
  const reels = instagramPosts.filter((p) => p.type === 'reel' && p.localVideo)

  return (
    <section id="gallery" className="section-padding bg-brand-ocean/10">
      <div className="section-container max-w-7xl">
        <SectionHeading
          light
          eyebrow="From Instagram"
          title="Gallery"
          subtitle="Watch our latest reels — autoplay previews from @lookbookmalappuram."
        />

        {/* Instagram profile bar */}
        <MotionReveal className="mb-10">
          <div className="elegant-card elegant-border mx-auto flex max-w-xl flex-col items-center gap-4 px-8 py-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full border border-brand-moss-dark/20 bg-brand-mist">
              <img
                src={instagramProfile.profilePic}
                alt={instagramProfile.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="font-display text-lg font-light text-brand-dark">
                {instagramProfile.handle}
              </p>
              <p className="mt-1 font-body text-xs font-light text-brand-muted-dark">
                {instagramProfile.followers} followers · {instagramProfile.postCount} posts
              </p>
            </div>
            <Button
              href={instagramProfile.url}
              variant="outline"
              size="sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              Follow
            </Button>
          </div>
        </MotionReveal>

        {/* Reels strip — horizontal scroll, 9:16 cards */}
        <MotionReveal delay={0.1}>
          <div className="relative -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="reels-scroll flex gap-4 overflow-x-auto px-4 pb-4 sm:gap-5 sm:px-6 lg:gap-6 lg:px-8 snap-x snap-mandatory">
              {reels.map((post) => (
                <ReelCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </MotionReveal>

        <MotionReveal delay={0.3} className="mt-10 text-center">
          <Button
            href={instagramProfile.url}
            variant="outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All on Instagram
          </Button>
        </MotionReveal>
      </div>
    </section>
  )
}
