import { motion } from 'motion/react'
import { fadeUp, viewportOnce } from '../lib/motion'

export default function Reveal({
  children,
  variants = fadeUp,
  className = '',
  as = 'div',
  delay = 0,
}) {
  const MotionTag = motion[as] || motion.div
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  )
}
