import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner.jsx'
import GlassCard from '../components/GlassCard.jsx'
import { committee, committeeTerm, pastCommittees } from '../data/committee.js'

function initials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
}

export default function Committee() {
  return (
    <>
      <PageBanner
        eyebrow={committeeTerm}
        title="Our Committee"
        lead="The volunteer office-bearers who plan, run and safeguard RBCT on behalf of the community."
        current="Committee"
      />

      <section className="section section--tight">
        <div className="container">
          <div className="grid grid-4">
            {committee.map((m, i) => (
              <GlassCard key={m.id} className="committee-card" delay={i * 0.06}>
                <div className="committee-photo">
                  {m.photo ? <img src={m.photo} alt={m.name} /> : initials(m.name)}
                </div>
                <h3>{m.name}</h3>
                <div className="committee-role">{m.role}</div>
                <p>{m.bio}</p>
              </GlassCard>
            ))}
          </div>
          <p className="section-lead" style={{ margin: '30px auto 0', textAlign: 'center' }}>
            For official enquiries, please use each role&rsquo;s club email address via the
            <Link to="/contact" style={{ color: 'var(--gold)' }}> Contact page</Link> rather than personal contact details.
          </p>
        </div>
      </section>

      {pastCommittees.length > 0 && (
        <section className="section section--tight">
          <div className="container">
            <div className="section-head">
              <div className="eyebrow">Archive</div>
              <h2 className="section-title">Previous Committees</h2>
            </div>
            <div className="grid grid-2">
              {pastCommittees.map((pc) => (
                <GlassCard key={pc.term} style={{ padding: 26 }}>
                  <h3 style={{ marginBottom: 8 }}>{pc.term}</h3>
                  <p style={{ color: 'var(--muted)' }}>{pc.members}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
