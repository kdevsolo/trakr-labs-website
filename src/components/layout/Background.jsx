export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-white">
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(255,255,255,0) 40%, rgba(45,212,191,0.06) 70%, rgba(168,85,247,0.05) 100%)',
        }}
      />
      <div className="dot-grid absolute inset-0 opacity-35" />
      <div className="dot-grid absolute inset-0 opacity-65 [mask-image:radial-gradient(ellipse_100%_55%_at_50%_0%,black,transparent_68%)]" />
    </div>
  )
}
