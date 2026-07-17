import { useMemo, useState } from 'react'
import { ImageOff } from 'lucide-react'
import PageBanner from '../components/PageBanner.jsx'
import GlassCard from '../components/GlassCard.jsx'
import Lightbox from '../components/Lightbox.jsx'
import { galleryAlbums, galleryYears } from '../data/gallery.js'

export default function Gallery() {
  const [year, setYear] = useState('All')
  const [active, setActive] = useState(null)

  const allImages = useMemo(() => {
    return galleryAlbums
      .filter((a) => year === 'All' || a.year === year)
      .flatMap((a) => a.images.map((img) => ({ ...img, event: a.event, year: a.year })))
  }, [year])

  return (
    <>
      <PageBanner
        eyebrow="Memories"
        title="Gallery"
        lead="Approved photographs from RBCT festivals, cultural nights and community events."
        current="Gallery"
      />

      <section className="section section--tight">
        <div className="container">
          <div className="filter-row" role="group" aria-label="Filter by year">
            {galleryYears.map((y) => (
              <button
                key={y}
                className={`filter-pill ${year === y ? 'active' : ''}`}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>

          {allImages.length > 0 ? (
            <div className="gallery-grid">
              {allImages.map((img, i) => (
                <div key={i} className="gallery-item" onClick={() => setActive(img)}>
                  <img src={img.src} alt={img.caption || img.event} loading="lazy" />
                  <div className="gallery-caption">{img.caption || img.event}</div>
                </div>
              ))}
            </div>
          ) : (
            <GlassCard style={{ padding: 50, textAlign: 'center' }}>
              <ImageOff aria-hidden="true" size={30} style={{ margin: '0 auto 14px', color: 'var(--muted)' }} />
              <h3 style={{ marginBottom: 10 }}>Gallery coming soon</h3>
              <p className="section-lead" style={{ margin: '0 auto' }}>
                Approved event photographs will appear here once supplied by the Media Coordinator,
                grouped by event and year, with full photo credit and consent on file.
              </p>
            </GlassCard>
          )}
        </div>
      </section>

      <Lightbox image={active} onClose={() => setActive(null)} />
    </>
  )
}
