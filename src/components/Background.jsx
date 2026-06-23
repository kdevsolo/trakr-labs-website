import { motion, useScroll, useTransform } from 'motion/react'

export default function Background() {
  const { scrollYProgress } = useScroll()
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 220])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-950">
      {/* Base radial wash */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% -10%, rgba(99,102,241,0.18) 0%, rgba(5,5,9,0) 55%)',
        }}
      />

      {/* Animated aurora blobs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-40 -left-32 h-[42rem] w-[42rem] rounded-full blur-[120px]"
      >
        <div
          className="h-full w-full rounded-full opacity-50"
          style={{
            background:
              'radial-gradient(circle at center, rgba(99,102,241,0.9), rgba(99,102,241,0) 70%)',
            animation: 'float-slow 16s ease-in-out infinite',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 -right-40 h-[40rem] w-[40rem] rounded-full blur-[130px]"
      >
        <div
          className="h-full w-full rounded-full opacity-40"
          style={{
            background:
              'radial-gradient(circle at center, rgba(45,212,191,0.8), rgba(45,212,191,0) 70%)',
            animation: 'float-slow 20s ease-in-out infinite reverse',
          }}
        />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        className="absolute bottom-0 left-1/3 h-[36rem] w-[36rem] rounded-full blur-[120px]"
      >
        <div
          className="h-full w-full rounded-full opacity-30"
          style={{
            background:
              'radial-gradient(circle at center, rgba(168,85,247,0.8), rgba(168,85,247,0) 70%)',
            animation: 'float-slow 24s ease-in-out infinite',
          }}
        />
      </motion.div>

      {/* Subtle grid */}
      <div className="grid-bg absolute inset-0 opacity-60 [mask-image:radial-gradient(circle_at_50%_30%,black,transparent_75%)]" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 120% at 50% 0%, rgba(5,5,9,0) 60%, rgba(5,5,9,0.9) 100%)',
        }}
      />
    </div>
  )
}
