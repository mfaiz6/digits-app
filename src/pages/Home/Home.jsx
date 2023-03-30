import Cta from "../../components/cta/Cta"
import Footer from "../../components/footer/Footer"
import Hero from "../../components/hero/Hero"
import Navbar from "../../components/navbar/Navbar"
import Partners from "../../components/partners/Partners"
import Portfolio from "../../components/portfolio/Portfolio"
import Services from "../../components/services/Services"
import Testimonials from "../../components/testimonials/Testimonials"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Partners />
            <Services />
            <Portfolio />
            <Testimonials />
            <Cta />
            <Footer />
        </div>
    )
}

export default Home