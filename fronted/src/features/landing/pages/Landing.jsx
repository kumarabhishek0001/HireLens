import Hero from '../components/Hero';
import TrustedCompanies from '../components/TrustedCompanies';
import Navbar from './../components/Navbar';

const Landing = () => {
  return (
    <div className='bg-[#f7f8f9]'>
      <Navbar/>
      <Hero/>
      <TrustedCompanies/>
    </div>
  )
}

export default Landing