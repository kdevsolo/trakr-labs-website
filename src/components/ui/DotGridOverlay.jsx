const masks = {
  center:
    '[mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]',
  top: '[mask-image:radial-gradient(ellipse_90%_70%_at_50%_0%,black,transparent_72%)]',
  bottom:
    '[mask-image:radial-gradient(ellipse_90%_70%_at_50%_100%,black,transparent_72%)]',
  wide: '[mask-image:radial-gradient(ellipse_100%_80%_at_50%_50%,black,transparent_85%)]',
  none: '',
}

export default function DotGridOverlay({
  className = '',
  mask = 'center',
  opacity = 'opacity-50',
}) {
  return (
    <div
      aria-hidden
      className={`dot-grid pointer-events-none absolute inset-0 ${opacity} ${masks[mask] ?? masks.center} ${className}`}
    />
  )
}
