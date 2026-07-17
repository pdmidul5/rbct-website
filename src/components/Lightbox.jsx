import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'

export default function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [image, onClose])

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={image.caption || 'Gallery image'}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.img
            src={image.src}
            alt={image.caption || ''}
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.94, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          {(image.caption || image.credit) && (
            <div className="lightbox-caption">
              {image.caption} {image.credit && <span>&middot; Photo: {image.credit}</span>}
            </div>
          )}
          <button className="lightbox-close" onClick={onClose} aria-label="Close image">
            <X aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
