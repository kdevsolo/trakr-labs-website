import { Outlet } from 'react-router-dom'
import Background from './Background'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Background />
      <Navbar />
      <Outlet />
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
