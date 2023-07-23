import React from 'react'
import Header from './component/NavBar Section/Header';
import Home from './component/Home Section/Home';
import About from './component/About Section/About';
import './App.css';
import Features from './component/Features Section/Features';
import Menu from './component/Menu Section/Menu';
import Choosing from './component/Choose section/Choosing';
import Stats from './component/Stats Section/Stats';
import Gallery from './component/Gallery Setion/Gallery';
import Offer from './component/Offer Section/Offer';
import Team from './component/Team Section/Team';
import Reservation from './component/Reservation Section/Reservation';
import Testimonial from './component/Testimonials Section/Testimonial';
import Footer from './component/Footer Section/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Features/>
      <Menu/>
      <Choosing/>
      <Stats/>
      <Gallery/>
      <Offer/>
      <Team/>
      <Reservation/>
     <Testimonial/>
     <Footer/>
    </div>
  )
}

export default App