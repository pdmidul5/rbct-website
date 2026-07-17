import { Link } from 'react-router-dom'
import { Handshake, Download, ArrowRight } from 'lucide-react'
import PageBanner from '../components/PageBanner.jsx'
import GlassCard from '../components/GlassCard.jsx'
import { sponsorTiers } from '../data/sponsors.js'

export default function Sponsors() {
  const hasAnySponsor = sponsorTiers.some((t) => t.sponsors.length > 0)

  return (
    <>
      <PageBanner
        eyebrow="With Thanks"
        title="Sponsors & Partners"
        lead="RBCT gratefully recognises the sponsors and community partners who support our festivals and programs."
        current="Sponsors"
      />

      <section className="section section--tight">
        <div className="container">
          {hasAnySponsor ? (
            sponsorTiers.map(
              (tier) =>
                tier.sponsors.length > 0 && (
                  <div key={tier.tier}>
                    <h2 className="sponsor-tier-title">{tier.tier}</h2>
                    <div className="grid grid-4">
                      {tier.sponsors.map((s, i) => (
                        <GlassCard key={s.name} className="sponsor-card" delay={i * 0.05}>
                          <div className="sponsor-logo">
                            {s.logo ? <img src={s.logo} alt={s.name} /> : s.name}
                          </div>
                          <h3 style={{ fontSize: '1rem' }}>{s.name}</h3>
                          {s.description && <p style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>{s.description}</p>}
                          {s.url && (
                            <a href={s.url} target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 700 }}>
                              Visit website
                            </a>
                          )}
                        </GlassCard>
                      ))}
                    </div>
                  </div>
                )
            )
          ) : (
            <GlassCard style={{ padding: 50, textAlign: 'center' }}>
              <Handshake aria-hidden="true" size={30} style={{ margin: '0 auto 14px', color: 'var(--gold)' }} />
              <h3 style={{ marginBottom: 10 }}>Our sponsor list is growing</h3>
              <p className="section-lead" style={{ margin: '0 auto' }}>
                Approved sponsor logos and details will be published here once confirmed by the
                committee, arranged by sponsorship level.
              </p>
            </GlassCard>
          )}
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <div className="grid grid-2">
            <GlassCard style={{ padding: 34 }}>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Become a Sponsor</h2>
              <p className="section-lead" style={{ marginBottom: 22 }}>
                Partner with RBCT to support Bengali cultural festivals and community events across
                Tasmania, with recognition on our website and at events.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Sponsorship Enquiry <ArrowRight aria-hidden="true" size={16} />
              </Link>
            </GlassCard>
            <GlassCard style={{ padding: 34 }} delay={0.1}>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Sponsorship Proposal</h2>
              <p className="section-lead" style={{ marginBottom: 22 }}>
                Download our sponsorship proposal for full details on packages, benefits and
                recognition levels.
              </p>
              <a
                href="#"
                className="btn btn-secondary"
                onClick={(e) => e.preventDefault()}
                aria-disabled="true"
              >
                <Download aria-hidden="true" size={16} /> Download Proposal (coming soon)
              </a>
            </GlassCard>
          </div>
        </div>
      </section>
    </>
  )
}
