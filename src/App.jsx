import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import AnimatedBackground from './components/AnimatedBackground.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Events from './pages/Events.jsx'
import Membership from './pages/Membership.jsx'
import Gallery from './pages/Gallery.jsx'
import Committee from './pages/Committee.jsx'
import Sponsors from './pages/Sponsors.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

const TITLES = {
  '/': 'Royal Bengal Club Tasmania — Celebrating Bengali Culture in Tasmania',
  '/about': 'About Us — Royal Bengal Club Tasmania',
  '/events': 'Events — Royal Bengal Club Tasmania',
  '/membership': 'Membership — Royal Bengal Club Tasmania',
  '/gallery': 'Gallery — Royal Bengal Club Tasmania',
  '/committee': 'Committee — Royal Bengal Club Tasmania',
  '/sponsors': 'Sponsors & Partners — Royal Bengal Club Tasmania',
  '/contact': 'Contact — Royal Bengal Club Tasmania',
}

function ScrollAndTitle() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = TITLES[pathname] || 'Royal Bengal Club Tasmania'
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <AnimatedBackground />
      <ScrollAndTitle />
      <Header />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
