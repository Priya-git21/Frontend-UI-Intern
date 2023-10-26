import './App.css';
import EQbeatsIQ from './components/EQbeatsIQ';
import EQ from './components/eq';
import Familiar from './components/familiar';
import Meet from './components/Meet';
// import Gallery from './pages/Gallery/Gallery';
import Home from './components/home';
// import Blogs from './pages/Blogs/Blogs';
// import Admin from './pages/Admin/Admin';
// import Members from './pages/Members/Members';
// import Footer from './pages/Footer/Footer';
// import EventsPage from './pages/Events/EventsPage';
// import About from './pages/About/About';
import Navbar from './components/navbar';
// import { useEffect, useState } from 'react';
// import './fonts/fonts.css'

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <EQbeatsIQ/>
      <Familiar/>
      <Meet/>
      <EQ/>
      {/* <EventsPage /> */}
      {/* <Members /> */}
      {/* <Blogs /> */}
      {/* <Gallery /> */}
      {/* <About /> */}
      {/* <Footer /> */}
    </>
  );
}

export default App;