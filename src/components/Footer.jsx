import { Link } from 'react-router-dom'
import { Facebook, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-brand">
            <div className="brand">
              <span className="brand-mark" style={{ width: 40, height: 40 }} />
              <span>Royal Bengal Club Tasmania</span>
            </div>
            <p>
              Celebrating Bengali culture, festivals, sport and community across Tasmania.
              A volunteer-run, not-for-profit community organisation.
            </p>
            <div className="footer-social">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="RBCT on Facebook">
                <Facebook aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="RBCT on Instagram">
                <Instagram aria-hidden="true" />
              </a>
              <a href="mailto:info@rbctasmania.org.au" aria-label="Email RBCT">
                <Mail aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/membership">Membership</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Organisation</h4>
            <ul>
              <li><Link to="/committee">Committee</Link></li>
              <li><Link to="/sponsors">Sponsors &amp; Partners</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:info@rbctasmania.org.au">info@rbctasmania.org.au</a></li>
              <li><span>Hobart, Tasmania, Australia</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; {year} Royal Bengal Club Tasmania. All rights reserved.</span>
          <div className="legal-links">
            <Link to="/contact">Privacy</Link>
            <Link to="/contact">Photo Consent</Link>
            <Link to="/about">Code of Conduct</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
