import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, ChevronDown, Flame, Users, Music, GraduationCap,
  HandHeart, Trophy, Sparkles,
} from 'lucide-react'
import GlassCard from '../components/GlassCard.jsx'
import EventCard from '../components/EventCard.jsx'
import StatCounter from '../components/StatCounter.jsx'
import { events } from '../data/events.js'

const fadeUp = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
}

const whatWeDo = [
  { icon: Flame, title: 'Religious Festivals', text: 'Durga Puja, Saraswati Puja, Rath Yatra and other observances celebrated together as a community.' },
  { icon: Music, title: 'Cultural Events', text: 'Music, dance, poetry and Bengali New Year celebrations that keep our traditions alive in Tasmania.' },
  { icon: GraduationCap, title: 'Youth & Education', text: 'Programs that connect the next generation with Bengali language, heritage and values.' },
  { icon: HandHeart, title: 'Community Support', text: 'Practical support and welcome for Bengali families settling in Tasmania.' },
  { icon: Trophy, title: 'Sports Activities', text: 'Friendly sports days and tournaments that bring members of all ages together.' },
  { icon: Users, title: 'Volunteering', text: 'Opportunities for members to contribute time and skills to club activities and events.' },
]

export default function Home() {
  const upcoming = events.filter((e) => !e.isPast).slice(0, 4)

  return (
    <>
      <section className="hero">
        <div className="hero-media" />
        <div className="hero-glow" />
        <div className="container">
          <div className="hero-content">
            <motion.div
              className="hero-text"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="eyebrow"><Sparkles size={14} aria-hidden="true" /> Royal Bengal Club Tasmania</div>
              <h1 className="hero-title">
                Celebrating <span className="accent">Bengali Culture</span> in Tasmania
              </h1>
              <p className="hero-sub">
                Royal Bengal Club Tasmania brings people together through culture, community,
                festivals, sports and social activities.
              </p>
              <div className="hero-ctas">
                <Link to="/membership" className="btn btn-primary">
                  Become a Member <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <Link to="/events" className="btn btn-secondary">
                  Explore Events
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="glass-panel hero-quote"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <p>&ldquo;Approved Bengali quotation to be supplied by the committee.&rdquo;</p>
              <span>English meaning to be confirmed for publication</span>
            </motion.div>
          </div>
        </div>
        <div className="hero-scroll">
          Scroll <ChevronDown aria-hidden="true" size={16} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.div className="section-head" {...fadeUp}>
            <div className="eyebrow">What&rsquo;s On</div>
            <h2 className="section-title">Upcoming Events</h2>
            <p className="section-lead">
              Join us for our next gatherings, festivals and community activities across Tasmania.
            </p>
          </motion.div>
          {upcoming.length > 0 ? (
            <div className="grid grid-3">
              {upcoming.map((event, i) => (
                <EventCard key={event.id} event={event} delay={i * 0.08} />
              ))}
            </div>
          ) : (
            <GlassCard className="section-head" style={{ padding: 40 }}>
              <p className="section-lead" style={{ margin: '0 auto' }}>
                Event details will be published here once confirmed by the committee.
              </p>
            </GlassCard>
          )}
          <motion.div style={{ textAlign: 'center', marginTop: 40 }} {...fadeUp}>
            <Link to="/events" className="btn btn-secondary">
              View All Events <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <motion.div className="section-head" {...fadeUp}>
            <div className="eyebrow">Welcome</div>
            <h2 className="section-title">What We Do</h2>
            <p className="section-lead">
              RBCT is a volunteer-run community organisation connecting Bengali people and friends
              of Bengali culture across Tasmania through shared tradition, celebration and support.
            </p>
          </motion.div>
          <div className="grid grid-3">
            {whatWeDo.map((item, i) => (
              <GlassCard key={item.title} className="icon-card" delay={i * 0.06}>
                <div className="icon-wrap"><item.icon aria-hidden="true" /></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <GlassCard className="glass-panel" style={{ padding: '48px 40px', textAlign: 'center' }}>
            <div className="eyebrow" style={{ justifyContent: 'center' }}>Join Us</div>
            <h2 className="section-title">Membership</h2>
            <p className="section-lead" style={{ margin: '0 auto 28px' }}>
              Membership fees and payment details will be confirmed by the RBCT Treasurer.
              Members enjoy priority access to events, voting rights at the AGM and a shared
              role in preserving Bengali culture in Tasmania.
            </p>
            <Link to="/membership" className="btn btn-primary">
              View Membership Options <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </GlassCard>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <motion.div className="section-head" {...fadeUp}>
            <div className="eyebrow">RBCT in Numbers</div>
            <h2 className="section-title">Our Community Impact</h2>
          </motion.div>
          <div className="stats-grid">
            <StatCounter value={0} suffix="+" label="Members (figure to be confirmed)" delay={0} />
            <StatCounter value={0} suffix="+" label="Annual Events (figure to be confirmed)" delay={0.1} />
            <StatCounter value={0} suffix="" label="Years Active (figure to be confirmed)" delay={0.2} />
            <StatCounter value={0} suffix="+" label="Volunteers (figure to be confirmed)" delay={0.3} />
          </div>
          <p className="section-lead" style={{ margin: '20px auto 0', textAlign: 'center' }}>
            Only figures confirmed by the committee will be published on the live site.
          </p>
        </div>
      </section>
    </>
  )
}
