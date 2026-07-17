import { useState } from 'react'
import { Check, Landmark } from 'lucide-react'
import PageBanner from '../components/PageBanner.jsx'
import GlassCard from '../components/GlassCard.jsx'

const tiers = [
  {
    id: 'individual',
    name: 'Individual Membership',
    price: 'Fee to be confirmed',
    period: 'per year',
    benefits: [
      'Voting rights at the RBCT AGM',
      'Priority access to events and registration',
      'Member-only updates and newsletters',
      'Discounted or included entry to selected events',
    ],
    featured: false,
  },
  {
    id: 'family',
    name: 'Family Membership',
    price: 'Fee to be confirmed',
    period: 'per year',
    benefits: [
      'Covers eligible household members',
      'Everything in Individual Membership',
      'Priority booking for family-friendly events',
      'Access to youth and education programs',
    ],
    featured: true,
  },
  {
    id: 'student',
    name: 'Student Membership',
    price: 'Fee to be confirmed',
    period: 'per year',
    benefits: [
      'Reduced-rate membership for eligible students',
      'Voting rights at the RBCT AGM',
      'Access to all community and cultural events',
      'Volunteering and leadership opportunities',
    ],
    featured: false,
  },
]

export default function Membership() {
  const [consent, setConsent] = useState(false)

  return (
    <>
      <PageBanner
        eyebrow="Join RBCT"
        title="Membership"
        lead="Become part of a community celebrating Bengali culture, festivals and friendship across Tasmania."
        current="Membership"
      />

      <section className="section section--tight">
        <div className="container">
          <div className="grid grid-3">
            {tiers.map((t, i) => (
              <GlassCard key={t.id} className={`membership-card ${t.featured ? 'featured' : ''}`} delay={i * 0.08}>
                {t.featured && (
                  <span className="event-card-category" style={{ position: 'static', alignSelf: 'flex-start' }}>
                    Most Popular
                  </span>
                )}
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem' }}>{t.name}</h3>
                <div className="membership-price">{t.price} <span>/ {t.period}</span></div>
                <ul>
                  {t.benefits.map((b) => (
                    <li key={b}><Check aria-hidden="true" />{b}</li>
                  ))}
                </ul>
                <a
                  href="#membership-form"
                  className={`btn ${t.featured ? 'btn-primary' : 'btn-secondary'} btn-block`}
                >
                  Join / Renew
                </a>
              </GlassCard>
            ))}
          </div>
          <p className="section-lead" style={{ margin: '32px auto 0', textAlign: 'center' }}>
            Membership period runs for one year from the date of joining unless otherwise advised.
            Eligibility and exact fees are confirmed annually by the committee.
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="grid grid-2">
            <GlassCard style={{ padding: 34 }}>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>
                <Landmark size={20} style={{ marginRight: 8, verticalAlign: '-3px' }} aria-hidden="true" />
                Payment Instructions
              </h2>
              <p className="section-lead" style={{ marginBottom: 0 }}>
                Bank transfer and other approved payment instructions will be supplied here by the
                RBCT Treasurer. Please do not send payment until instructions are confirmed on this page.
              </p>
            </GlassCard>
            <GlassCard style={{ padding: 34 }} delay={0.1}>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Member Responsibilities</h2>
              <p className="section-lead" style={{ marginBottom: 0 }}>
                Members are asked to uphold RBCT&rsquo;s code of conduct, respect shared cultural and
                religious traditions, and support fellow members and volunteers at events.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section" id="membership-form">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Join / Renew</div>
            <h2 className="section-title">Membership Application Form</h2>
            <p className="section-lead">
              Complete the official RBCT membership form below. If the form does not appear,
              use the button to open it directly.
            </p>
          </div>
          <GlassCard style={{ padding: 30, maxWidth: 720, margin: '0 auto' }}>
            <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 22, fontSize: '0.9rem', color: 'var(--muted)' }}>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
                style={{ marginTop: 3 }}
              />
              I have read and agree to RBCT&rsquo;s membership privacy notice and consent to my
              information being used for membership administration only.
            </label>
            {consent ? (
              <div className="form-embed">
                <iframe
                  src="https://docs.google.com/forms/d/e/PASTE_GOOGLE_FORM_EMBED_ID/viewform?embedded=true"
                  width="100%"
                  height="950"
                  frameBorder="0"
                  title="RBCT Membership Form"
                >
                  Loading&hellip;
                </iframe>
              </div>
            ) : (
              <div className="form-placeholder">
                <p>Please confirm the privacy notice above to load the membership form.</p>
              </div>
            )}
          </GlassCard>
        </div>
      </section>
    </>
  )
}
