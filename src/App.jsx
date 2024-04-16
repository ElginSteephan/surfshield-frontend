import Navbar from './components/header/navbar';
import './App.css';
import HeroBG from './components/heroSection/hero';
import About from './components/Aboutsection/about'
import Customer from './components/testimonial/customer';
import Team from './components/Team/team';
import END from './components/END/end';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <HeroBG/>
      <About/>
      <Customer/>
      <Team/>
      <END/>
    </div>
  );
}

export default App;
