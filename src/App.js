import Hero from './components/Home/Hero'
import './App.css';
import Testimonials from './components/Cards/Testimonials';
import Company from './components/Company';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <Hero/>
      <Testimonials/>
      <Company />
    </div>
  );
}

export default App;
