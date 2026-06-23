import Logo from './Logo'
import Socials from './Socials'

const cols = [
  {
    title: 'Product',
    links: ['Features', 'Insights', 'How it works', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security'],
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">
              Contextual feedback that works — capture, triage, and resolve
              without leaving your app.
            </p>
            <Socials size={16} className="mt-5" />
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 transition-colors hover:text-slate-200"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} Trakr Labs. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Crafted with care by Keshav Saini.
          </p>
        </div>
      </div>
    </footer>
  )
}
