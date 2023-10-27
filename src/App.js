import './App.css';
import EQbeatsIQ from './components/EQbeatsIQ';
import EQ from './components/eq';
import Familiar from './components/familiar';
import Meet from './components/Meet';
import Home from './components/home';
import Navbar from './components/navbar';
import Improvement from './components/Improvement';
import Footer from './components/footer';
import Vacancy from './components/Vacancy';

function App() {


  return (
    <>
      <Navbar />
      <Home />
      <EQbeatsIQ/>
      <Familiar/>
      <Meet/>
      <Improvement/>
      <Vacancy/>
      <EQ/>
      <Footer/>
      </>
  );
}

export default App;