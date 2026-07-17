import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function PageBanner({ eyebrow, title, lead, current }) {
  return (
    <section className="page-banner">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {eyebrow && <div className="eyebrow" style={{ justifyContent: 'center' }}>{eyebrow}</div>}
          <h1 className="section-title">{title}</h1>
          {lead && <p className="section-lead" style={{ margin: '0 auto' }}>{lead}</p>}
          <p className="breadcrumb">
            <Link to="/">Home</Link> / <span className="current">{current}</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
