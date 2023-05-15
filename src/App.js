import logo from './logo.svg';
import './App.css';

import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { BiSend } from 'react-icons/bi';

import Card from './components/UiElement/Card';
import Caroussel from './components/UiElement/Caroussel';
import Navbar from './components/UiElement/Navbar';
import Hero_body from './components/UiElement/Hero_body';
import Services from './components/UiElement/Services';
import Footer from './components/UiElement/Footer';
import Top_destination from './components/UiElement/Top_destination';
import Custom_say from './components/UiElement/Custom_say';
import Get_start from './components/UiElement/Get_start';
import Experience from './components/UiElement/Experience';

import arrow from './assets/images/arrow.png';

function App() {
  return (
    <div className='px-5 md:px-20 bg-gradient-to-r h-auto from-pink-50 via-pink-50 to-indigo-50 relative'>
      <img className='absolute w-24 h-24 right-0 top-1/4 z-50' src={arrow}/>
      <Navbar />
      <Hero_body />
      <Services />
      <Top_destination />
      <Experience />
      <Custom_say />
      <Get_start />
      <Footer />
    </div>
  );
}

export default App;
