import { Link } from 'react-router-dom'
import { Home, ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="code">404</div>
      <h1 className="section-title">Page Not Found</h1>
      <p className="section-lead" style={{ margin: '0 auto 28px' }}>
        The page you are looking for may have moved or no longer exists.
      </p>
      <Link to="/" className="btn btn-primary">
        <Home aria-hidden="true" size={16} /> Back to Home <ArrowRight aria-hidden="true" size={16} />
      </Link>
    </div>
  )
}
