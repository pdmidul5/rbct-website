import { motion } from 'framer-motion'
import { FileText, Heart, Eye, Target, Landmark } from 'lucide-react'
import PageBanner from '../components/PageBanner.jsx'
import GlassCard from '../components/GlassCard.jsx'

const values = [
  { icon: Heart, title: 'Community', text: 'Building a warm, welcoming home for Bengali people and friends of Bengali culture across Tasmania.' },
  { icon: Target, title: 'Mission', text: 'Mission statement to be confirmed by the committee for publication.' },
  { icon: Eye, title: 'Vision', text: 'Vision statement to be confirmed by the committee for publication.' },
  { icon: Landmark, title: 'Contribution', text: 'Supporting cultural exchange and community life throughout Tasmania.' },
]

export default function About() {
  return (
    <>
      <PageBanner
        eyebrow="Our Story"
        title="About Royal Bengal Club Tasmania"
        lead="A community organisation preserving and celebrating Bengali heritage, festivals and culture across Tasmania."
        current="About"
      />

      <section className="section section--tight">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <GlassCard style={{ padding: 34 }}>
              <h2 className="section-title" style={{ fontSize: '1.7rem' }}>Who We Are</h2>
              <p className="section-lead" style={{ marginBottom: 0 }}>
                Royal Bengal Club Tasmania (RBCT) is a volunteer-run, not-for-profit community
                organisation for Bengali people and friends of Bengali culture living in Tasmania.
                We bring people together through festivals, cultural events, sport and community
                support, keeping our shared heritage alive for current and future generations.
              </p>
            </GlassCard>
            <GlassCard style={{ padding: 34 }} delay={0.1}>
              <h2 className="section-title" style={{ fontSize: '1.7rem' }}>Our History</h2>
              <p className="section-lead" style={{ marginBottom: 0 }}>
                RBCT was established in Tasmania to give the growing Bengali community a shared
                space for cultural, religious and social life. The exact founding year and key
                milestones will be added here once confirmed by the committee.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <motion.div
            className="section-head"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow">What Guides Us</div>
            <h2 className="section-title">Mission, Vision &amp; Values</h2>
          </motion.div>
          <div className="grid grid-4">
            {values.map((v, i) => (
              <GlassCard key={v.title} className="icon-card" delay={i * 0.06}>
                <div className="icon-wrap"><v.icon aria-hidden="true" /></div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="grid grid-2">
            <GlassCard style={{ padding: 34 }}>
              <h2 className="section-title" style={{ fontSize: '1.5rem' }}>Milestones</h2>
              <p className="section-lead" style={{ marginBottom: 0 }}>
                A timeline of major RBCT activities and milestones will be published here once
                supplied and approved by the committee.
              </p>
            </GlassCard>
            <GlassCard style={{ padding: 34 }} delay={0.1}>
              <h2 className="section-title" style={{ fontSize: '1.5rem' }}>
                <FileText size={22} style={{ marginRight: 8, verticalAlign: '-3px' }} aria-hidden="true" />
                Governance
              </h2>
              <p className="section-lead" style={{ marginBottom: 18 }}>
                If approved by the committee, downloadable governance documents will be made
                available here, such as the club constitution.
              </p>
              <a
                href="#"
                className="btn btn-secondary"
                onClick={(e) => e.preventDefault()}
                aria-disabled="true"
              >
                Constitution (coming soon)
              </a>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  )
}
