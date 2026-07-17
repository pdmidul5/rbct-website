import { motion } from 'framer-motion'

export default function GlassCard({ children, className = '', delay = 0, as = 'div', ...rest }) {
  const Comp = motion[as] || motion.div
  return (
    <Comp
      className={`glass-card ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </Comp>
  )
}
