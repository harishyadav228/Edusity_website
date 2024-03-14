import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import ATitle from './Components/Title/ATitle';
import About from './Components/About/About';
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';



const App = () => {


  const [playState, setPlayState] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className="container">
      <ATitle subTitle='Our PROGRAM' title='What We Offer'/>
      <Programs />
      <About setPlayState={setPlayState}/>
      <ATitle subTitle='Gallery' title='Campus Photos'/>
      <Campus />
      <ATitle subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials />
      <ATitle subTitle='CONTACT US' title='Get in Touch'/>
      <Contact />
      <Footer />
      </div>

     <VideoPlayer  playState={playState} setPlayState ={setPlayState} />

      
    </div>
  )
}

export default App
