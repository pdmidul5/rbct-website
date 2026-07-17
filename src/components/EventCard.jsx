import { Calendar, Clock, MapPin, ArrowRight, ImageOff } from 'lucide-react'
import GlassCard from './GlassCard.jsx'

function formatDate(dateStr) {
  if (!dateStr) return 'Date to be confirmed'
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function EventCard({ event, delay = 0, onViewDetails }) {
  return (
    <GlassCard className="event-card" delay={delay}>
      <div className="event-card-media">
        {event.image ? (
          <img src={event.image} alt={event.title} loading="lazy" />
        ) : (
          <div
            style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 8,
              color: 'var(--muted)',
              fontSize: '0.78rem',
            }}
          >
            <ImageOff aria-hidden="true" size={22} />
            Poster coming soon
          </div>
        )}
        <span className="event-card-category">{event.category}</span>
      </div>
      <div className="event-card-body">
        <div className="event-meta">
          <span><Calendar aria-hidden="true" />{formatDate(event.date)}</span>
          {event.time && <span><Clock aria-hidden="true" />{event.time}</span>}
        </div>
        <h3>{event.title}</h3>
        <div className="event-meta">
          <span><MapPin aria-hidden="true" />{event.venue}</span>
        </div>
        <p>{event.description}</p>
        <button type="button" className="btn btn-secondary" onClick={() => onViewDetails?.(event)}>
          View Details <ArrowRight aria-hidden="true" size={16} />
        </button>
      </div>
    </GlassCard>
  )
}
