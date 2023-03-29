import './App.css';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Partners from './components/partners/Partners';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Partners />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;
