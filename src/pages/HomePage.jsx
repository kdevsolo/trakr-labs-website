import Hero from '../components/sections/Hero'
import TrustedBy from '../components/sections/TrustedBy'
import Marquee from '../components/sections/Marquee'
import Features from '../components/sections/Features'
import UseCases from '../components/sections/UseCases'
import Stats from '../components/sections/Stats'
import DashboardPreview from '../components/sections/DashboardPreview'
import Demo from '../components/sections/Demo'
import Insights from '../components/sections/Insights'
import WidgetPreview from '../components/sections/WidgetPreview'
import HowItWorks from '../components/sections/HowItWorks'
import Testimonials from '../components/sections/Testimonials'
import Pricing from '../components/sections/Pricing'
import Security from '../components/sections/Security'
import CTA from '../components/sections/CTA'
import FAQ from '../components/sections/FAQ'
import Creator from '../components/sections/Creator'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustedBy />
      <Marquee />
      <Features />
      <UseCases />
      <Stats />
      <DashboardPreview />
      <Demo />
      <Insights />
      <WidgetPreview />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <Security />
      <CTA />
      <FAQ />
      <Creator />
    </main>
  )
}
