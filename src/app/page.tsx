import Navbar from './components/navbar/navbar'
import Services from './components/main/services'
import Singlecard from './components/main/impact-section'
import Casestudies from './components/main/Casestudies'
import Workprogress from './components/main/workprogress'
import Team from './components/main/team'
import Testimonials from './components/main/testimonials'
import Contact from './components/main/contact'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Services />
      <Singlecard />
      <Casestudies />
      <Workprogress />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />

    </>
  );
}
