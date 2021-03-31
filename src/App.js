import './App.css';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Client from './components/Client'
import Parallax from './components/Parallax';
import Services from './components/Services.js'; 
import Cards from './components/Cards.js'; 
import StayTune from './components/StayTune';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
        <Navigation />
        <HomePage />
        <Client />
        <Parallax />
        <div class='bg-white'>
          <Services />
          <Cards />
        </div>
        <StayTune />
        <div class='bg-white'>
          <Portfolio />
        </div>
    </>
  );
}

export default App;
