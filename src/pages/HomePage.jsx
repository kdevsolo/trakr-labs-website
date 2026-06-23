import Hero from '../components/Hero'
import Marquee from '../components/Marquee'
import Features from '../components/Features'
import DashboardPreview from '../components/DashboardPreview'
import Insights from '../components/Insights'
import WidgetPreview from '../components/WidgetPreview'
import HowItWorks from '../components/HowItWorks'
import Waitlist from '../components/Waitlist'
import FAQ from '../components/FAQ'
import Creator from '../components/Creator'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Features />
      <DashboardPreview />
      <Insights />
      <WidgetPreview />
      <HowItWorks />
      <Waitlist />
      <FAQ />
      <Creator />
    </main>
  )
}
