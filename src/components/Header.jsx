import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X, Facebook, Instagram, Flower2 } from 'lucide-react'

const NAV_ITEMS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/events', label: 'Events' },
  { to: '/membership', label: 'Membership' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/committee', label: 'Committee' },
  { to: '/sponsors', label: 'Sponsors' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className={`site-header ${scrolled || open ? 'scrolled' : ''}`}>
        <div className="container">
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark"><Flower2 aria-hidden="true" /></span>
            <span className="brand-text">
              Royal Bengal Club
              <span className="full">Tasmania</span>
            </span>
          </NavLink>

          <nav className="nav-desktop" aria-label="Primary">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="header-actions">
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="RBCT on Facebook">
                <Facebook aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="RBCT on Instagram">
                <Instagram aria-hidden="true" />
              </a>
            </div>
            <NavLink to="/membership" className="btn btn-primary">Become a Member</NavLink>
            <button
              className="menu-toggle"
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="mobile-nav" role="dialog" aria-label="Mobile navigation">
          <nav aria-label="Mobile primary">
            <ul>
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink to={item.to} end={item.to === '/'} onClick={() => setOpen(false)}>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <NavLink to="/membership" className="btn btn-primary btn-block" onClick={() => setOpen(false)}>
              Become a Member
            </NavLink>
            <div className="social-icons">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="RBCT on Facebook">
                <Facebook aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="RBCT on Instagram">
                <Instagram aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
