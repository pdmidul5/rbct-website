import { Mail, Facebook, Instagram, MapPin, Clock, Users, Calendar, Handshake, HandHeart, Newspaper, MessageSquare } from 'lucide-react'
import PageBanner from '../components/PageBanner.jsx'
import GlassCard from '../components/GlassCard.jsx'

const categories = [
  { icon: Users, label: 'General' },
  { icon: Users, label: 'Membership' },
  { icon: Calendar, label: 'Events' },
  { icon: Handshake, label: 'Sponsorship' },
  { icon: HandHeart, label: 'Volunteering' },
  { icon: Newspaper, label: 'Media' },
  { icon: MessageSquare, label: 'Feedback' },
]

export default function Contact() {
  return (
    <>
      <PageBanner
        eyebrow="Get in Touch"
        title="Contact Us"
        lead="Reach the RBCT committee for general enquiries, membership, events, sponsorship or feedback."
        current="Contact"
      />

      <section className="section section--tight">
        <div className="container">
          <div className="grid grid-2" style={{ alignItems: 'start' }}>
            <GlassCard style={{ padding: 34 }}>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Contact Details</h2>
              <div className="contact-info-row">
                <Mail aria-hidden="true" />
                <a href="mailto:info@rbctasmania.org.au">info@rbctasmania.org.au</a>
              </div>
              <div className="contact-info-row">
                <MapPin aria-hidden="true" />
                <span>Hobart, Tasmania, Australia (general location)</span>
              </div>
              <div className="contact-info-row">
                <Facebook aria-hidden="true" />
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">facebook.com/rbctasmania</a>
              </div>
              <div className="contact-info-row">
                <Instagram aria-hidden="true" />
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer">instagram.com/rbctasmania</a>
              </div>
              <div className="contact-info-row">
                <Clock aria-hidden="true" />
                <span>Response-time wording to be approved by the committee.</span>
              </div>
            </GlassCard>

            <GlassCard style={{ padding: 34 }} delay={0.1}>
              <h2 className="section-title" style={{ fontSize: '1.4rem' }}>Enquiry Categories</h2>
              <p className="section-lead" style={{ marginBottom: 0 }}>
                Select the category that best matches your enquiry when you complete the form below,
                so it reaches the right office-bearer.
              </p>
              <div className="contact-categories">
                {categories.map((c) => (
                  <div key={c.label} className="glass-card">
                    <c.icon aria-hidden="true" />
                    {c.label}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow">Send a Message</div>
            <h2 className="section-title">Contact Form</h2>
            <p className="section-lead">
              This form is powered by Google Forms at no cost to the club. Responses go directly
              to an RBCT-controlled account.
            </p>
          </div>
          <GlassCard style={{ padding: 30, maxWidth: 720, margin: '0 auto' }}>
            <div className="form-embed">
              <iframe
                src="https://docs.google.com/forms/d/e/PASTE_GOOGLE_FORM_EMBED_ID/viewform?embedded=true"
                width="100%"
                height="950"
                frameBorder="0"
                title="RBCT Contact Form"
              >
                Loading&hellip;
              </iframe>
            </div>
          </GlassCard>
        </div>
      </section>
    </>
  )
}
