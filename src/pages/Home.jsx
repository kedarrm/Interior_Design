import Navbar from '../components/HomeComponent/Navbar'
import Hero from '../components/HomeComponent/Hero'
import Process from '../components/HomeComponent/Process'
import CTA from '../components/HomeComponent/CTA'
import Footer from '../components/HomeComponent/Footer'
import AboutStudio from '../components/HomeComponent/AboutStudio'
import FeaturedSpaces from '../components/HomeComponent/FeaturedSpaces'
import ServicesSection from '../components/HomeComponent/Services'
import WhyChooseUs from '../components/HomeComponent/WhyChooseUs'

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <AboutStudio />
            <ServicesSection />
            <FeaturedSpaces />
            <WhyChooseUs />
            <Process />
            <CTA />
            <Footer />
        </>
    )
}

export default Home