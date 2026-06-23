import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Features from './components/Features'
import DashboardPreview from './components/DashboardPreview'
import Insights from './components/Insights'
import WidgetPreview from './components/WidgetPreview'
import HowItWorks from './components/HowItWorks'
import Waitlist from './components/Waitlist'
import FAQ from './components/FAQ'
import Creator from './components/Creator'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
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
      <Footer />
      <script
        src="http://localhost:5173/trakr-widget.js"
        data-project-key="cppib-bf2c3282e82e2426cf0943b1bca143343b2757e630ae54b829e0a667218b2f72"
        data-widget-secret="whsec_eoZ34Lo5QHHViFf2VtpLC7PGOe_ZTn0mF36ZvvjWsQg"
        data-api-url="http://localhost:3001"
        async
      ></script>
    </>
  )
}
