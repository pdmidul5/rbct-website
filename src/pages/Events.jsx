import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Calendar, Clock, MapPin, User, Accessibility, ParkingSquare, Link as LinkIcon } from 'lucide-react'
import PageBanner from '../components/PageBanner.jsx'
import EventCard from '../components/EventCard.jsx'
import { events, eventCategories } from '../data/events.js'

function EventDetail({ event, onClose }) {
  return (
    <AnimatePresence>
      {event && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={event.title}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="glass-panel"
            style={{ maxWidth: 640, width: '100%', maxHeight: '84vh', overflowY: 'auto', padding: 34, position: 'relative' }}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
          >
            <button className="lightbox-close" style={{ position: 'absolute', top: 18, right: 18 }} onClick={onClose} aria-label="Close event details">
              <X aria-hidden="true" />
            </button>
            <span className="event-card-category" style={{ position: 'static', display: 'inline-block', marginBottom: 14 }}>
              {event.category}
            </span>
            <h2 className="section-title" style={{ fontSize: '1.7rem' }}>{event.title}</h2>
            <div className="event-meta" style={{ marginBottom: 18 }}>
              <span><Calendar aria-hidden="true" size={15} />{event.date}</span>
              <span><Clock aria-hidden="true" size={15} />{event.time}</span>
              <span><MapPin aria-hidden="true" size={15} />{event.venue}</span>
            </div>
            <p className="section-lead" style={{ marginBottom: 18 }}>{event.description}</p>
            {event.program && (
              <p style={{ color: 'var(--muted)', fontSize: '0.92rem', marginBottom: 14 }}>
                <strong style={{ color: 'var(--text)' }}>Program: </strong>{event.program}
              </p>
            )}
            <div className="contact-info-row">
              <User aria-hidden="true" /> <span>Contact: {event.contactPerson || 'RBCT Events Team'}</span>
            </div>
            {event.accessibility && (
              <div className="contact-info-row">
                <Accessibility aria-hidden="true" /> <span>{event.accessibility}</span>
              </div>
            )}
            {event.parking && (
              <div className="contact-info-row">
                <ParkingSquare aria-hidden="true" /> <span>{event.parking}</span>
              </div>
            )}
            {event.mapUrl && (
              <div className="contact-info-row">
                <MapPin aria-hidden="true" />
                <a href={event.mapUrl} target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            )}
            {event.registrationUrl && event.registrationUrl !== '#' && (
              <a href={event.registrationUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: 20 }}>
                <LinkIcon aria-hidden="true" size={16} /> Register / RSVP
              </a>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Events() {
  const [tab, setTab] = useState('upcoming')
  const [category, setCategory] = useState('All')
  const [year, setYear] = useState('All')
  const [selected, setSelected] = useState(null)

  const years = useMemo(() => {
    const y = new Set(events.map((e) => e.date.slice(0, 4)))
    return ['All', ...Array.from(y).sort()]
  }, [])

  const filtered = useMemo(() => {
    return events
      .filter((e) => (tab === 'upcoming' ? !e.isPast : e.isPast))
      .filter((e) => category === 'All' || e.category === category)
      .filter((e) => year === 'All' || e.date.startsWith(year))
      .sort((a, b) => (tab === 'upcoming' ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date)))
  }, [tab, category, year])

  return (
    <>
      <PageBanner
        eyebrow="What's On"
        title="Events"
        lead="Religious, cultural, sporting and community events run by Royal Bengal Club Tasmania."
        current="Events"
      />

      <section className="section section--tight">
        <div className="container">
          <div className="tab-row">
            <button className={`tab-btn ${tab === 'upcoming' ? 'active' : ''}`} onClick={() => setTab('upcoming')}>
              Upcoming Events
            </button>
            <button className={`tab-btn ${tab === 'past' ? 'active' : ''}`} onClick={() => setTab('past')}>
              Past Events
            </button>
          </div>

          <div className="filter-row" role="group" aria-label="Filter by category">
            {eventCategories.map((c) => (
              <button
                key={c}
                className={`filter-pill ${category === c ? 'active' : ''}`}
                onClick={() => setCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="filter-row" role="group" aria-label="Filter by year">
            {years.map((y) => (
              <button
                key={y}
                className={`filter-pill ${year === y ? 'active' : ''}`}
                onClick={() => setYear(y)}
              >
                {y}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-3">
              {filtered.map((event, i) => (
                <EventCard key={event.id} event={event} delay={i * 0.06} onViewDetails={setSelected} />
              ))}
            </div>
          ) : (
            <div className="glass-card" style={{ padding: 40, textAlign: 'center' }}>
              <p className="section-lead" style={{ margin: '0 auto' }}>
                No events match this filter yet. Check back soon or adjust your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <EventDetail event={selected} onClose={() => setSelected(null)} />
    </>
  )
}
