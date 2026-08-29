import { useState } from 'react';
import { motion } from 'motion/react';
import { Play, MapPin, Building2 } from 'lucide-react';
import '../styles/showcase.css';

const VIDEO_ID = 'qixLWoCIdZ0';

export function Showcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [thumbFallback, setThumbFallback] = useState(false);

  const featured = ['4th Avenue', 'Vivid Vista', 'Aponjon Housing'];

  return (
    <section id="showcase" className="showcase-band">
      <div className="showcase-band__layer showcase-band__glow" />
      <div className="showcase-band__layer showcase-band__weave" />
      <div className="showcase-band__layer showcase-band__vignette" />
      <div className="showcase-band__rule showcase-band__rule--top" />
      <div className="showcase-band__rule showcase-band__rule--bottom" />

      <div className="showcase-inner">
        <div className="showcase-grid">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="showcase-copy"
          >
            <span className="showcase-eyebrow">
              <span className="showcase-eyebrow__rule" />
              <span className="showcase-eyebrow__text">Event Highlights</span>
            </span>

            <h2 className="showcase-title">
              Investors&rsquo; Meet &amp;
              <span className="showcase-title__accent">Project Showcase 2026</span>
            </h2>

            <p className="showcase-lede">
              Relive the highlights from Vedic Village, Kolkata &mdash; a celebration of trust,
              growth, new opportunities, and our vision for tomorrow.
            </p>

            <div className="showcase-tags">
              <span className="showcase-tags__label">
                <Building2 className="showcase-chip__icon" />
                Featured
              </span>
              {featured.map((name) => (
                <span key={name} className="showcase-tag">
                  {name}
                </span>
              ))}
            </div>

          </motion.div>

          {/* Right: video */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="showcase-stage"
          >
            <div className="showcase-stage__halo" />

            <div className="showcase-frame">
              <div className="showcase-screen">
                {isPlaying ? (
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
                    title="Easymakan Dev Corp. Investors Meet and Project Showcase 2026"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="showcase-embed"
                  />
                ) : (
                  <motion.button
                    type="button"
                    onClick={() => setIsPlaying(true)}
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    aria-label="Play the Investors Meet and Project Showcase 2026 video"
                    className="showcase-trigger"
                  >
                    <motion.img
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.06 } }}
                      transition={{ duration: 0.7 }}
                      src={`https://img.youtube.com/vi/${VIDEO_ID}/${
                        thumbFallback ? 'hqdefault' : 'maxresdefault'
                      }.jpg`}
                      onError={() => setThumbFallback(true)}
                      alt="Investors Meet and Project Showcase 2026 at Vedic Village, Kolkata"
                      loading="lazy"
                      className="showcase-thumb"
                    />
                    <span className="showcase-scrim" />

                    <span className="showcase-play">
                      <span className="showcase-play__stack">
                        <motion.span
                          className="showcase-play__ring"
                          animate={{ scale: [1, 1.8], opacity: [0.7, 0] }}
                          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
                        />
                        <motion.span
                          variants={{ rest: { scale: 1 }, hover: { scale: 1.09 } }}
                          transition={{ type: 'spring', stiffness: 300 }}
                          className="showcase-play__disc"
                        >
                          <Play className="showcase-play__icon" fill="currentColor" />
                        </motion.span>
                      </span>
                    </span>

                    <span className="showcase-caption">
                      <span className="showcase-chip">
                        <MapPin className="showcase-chip__icon" />
                        Vedic Village, Kolkata
                      </span>
                    </span>
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>

          {/* Brand sign-off: under the copy on desktop, after the video on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="showcase-signoff"
          >
            <h3 className="showcase-signoff__name">Easymakan Dev Corp.</h3>
            <p className="showcase-signoff__tagline">
              Building Trust &middot; Creating Communities &middot; Shaping Tomorrow
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
