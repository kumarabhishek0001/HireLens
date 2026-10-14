import ComparisonSection from '../components/ComparisonSection';
import FeaturesSection from '../components/FeaturesSection';
import FinalCTASection from '../components/FinalCTASection';
import Hero from '../components/Hero';
import TestimonialsSection from '../components/TestimonialsSection';
import TrustedCompanies from '../components/TrustedCompanies';
import Navbar from './../components/Navbar';

const Landing = () => {
  return (
    <div className='bg-[#f7f8f9]'>
      <Navbar/>
      <Hero/>
      <TrustedCompanies/>
      <FeaturesSection/>
      <ComparisonSection/>
      <TestimonialsSection/>
      <FinalCTASection/>
    </div>
  )
}

export default Landing