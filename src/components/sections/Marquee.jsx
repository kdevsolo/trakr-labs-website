import { capabilities } from '../../data/capabilities'

export default function Marquee() {
  const loop = [...capabilities, ...capabilities]
  return (
    <section className="relative py-10">
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max animate-marquee gap-4">
          {loop.map((item, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-2.5 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm"
            >
              <item.icon size={16} className="text-brand-600" />
              <span className="text-sm whitespace-nowrap text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
