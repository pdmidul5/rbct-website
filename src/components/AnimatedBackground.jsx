import { useEffect, useState, useMemo } from 'react'

function useReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(mq.matches)
    const handler = (e) => setReduced(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

// Disable decorative particles on low-power / small-memory mobile devices,
// per Section 4 accessibility and performance guidance.
function useIsLowPower() {
  return useMemo(() => {
    if (typeof navigator === 'undefined') return false
    const lowMemory = navigator.deviceMemory && navigator.deviceMemory <= 2
    const isSmallScreen = window.innerWidth < 480
    return Boolean(lowMemory) || (isSmallScreen && navigator.hardwareConcurrency <= 4)
  }, [])
}

export default function AnimatedBackground() {
  const reduced = useReducedMotion()
  const lowPower = useIsLowPower()
  const showParticles = !reduced && !lowPower

  const particles = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => ({
        id: `p-${i}`,
        left: Math.random() * 100,
        size: 3 + Math.random() * 5,
        duration: 14 + Math.random() * 12,
        delay: Math.random() * 16,
      })),
    []
  )

  const petals = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        id: `f-${i}`,
        left: Math.random() * 100,
        size: 10 + Math.random() * 10,
        duration: 22 + Math.random() * 14,
        delay: Math.random() * 20,
      })),
    []
  )

  if (!showParticles) return null

  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
      {petals.map((f) => (
        <span
          key={f.id}
          className="petal"
          style={{
            left: `${f.left}%`,
            width: f.size,
            height: f.size,
            animationDuration: `${f.duration}s`,
            animationDelay: `${f.delay}s`,
          }}
        />
      ))}
    </div>
  )
}
