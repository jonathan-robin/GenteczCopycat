import './App.css';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Client from './components/Client'
import Parallax from './components/Parallax';
import Services from './components/Services.js'; 
import Cards from './components/Cards.js';

function App() {
  return (
    <>
        <Navigation />
        <HomePage />
        <Client />
        <Parallax />
        <Services />
        <Cards />
    </>
  );
}

export default App;
