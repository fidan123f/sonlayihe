import React, {useState} from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import About from '../components/About'
import Services from '../components/Services';
import Footer from '../components/Footer'
import Discover from '../components/Discover'
import SignUp from '../components/SignUp';

const Home = () => {
    const [isOpen, setIsOpen]= useState(false);

const toogle=()=> {
setIsOpen(!isOpen);
}

  return (
    <div>
      <Sidebar isOpen={isOpen} toogle= {toogle}/>
      <Navbar toogle={toogle} />
      <HeroSection/>
      <About/>
      <Discover/>
      <Services/>
      <SignUp/>
      <Footer/>
    </div>
  )
}

export default Home
