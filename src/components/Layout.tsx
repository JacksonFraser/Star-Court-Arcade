import { Outlet } from 'react-router-dom'
import Nav from './Nav.tsx'
import Footer from './Footer.tsx'

// Shared chrome for every page: sticky nav on top, footer at the bottom,
// routed page content in between.
export default function Layout() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}
