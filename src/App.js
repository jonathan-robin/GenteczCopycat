import './App.css';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import Client from './components/Client'
import Parallax from './components/Parallax';
import Services from './components/Services.js'; 
import Cards from './components/Cards.js'; 
import StayTune from './components/StayTune';
import Portfolio from './components/Portfolio';
import Caroussel from './components/Caroussel';
import Video from './components/Video';
import Avis from './components/Avis';
import Choose from './components/Choose';
import Creative from './components/Creative';
import Pricing from './components/Pricing';
import Numbers from './components/Numbers';
import Post from './components/Post';
import Question from './components/Question';
import Footer from './components/Footer';

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
          <Caroussel />
        </div>
        <Video />
        <Avis />
        <Choose />
        <div class="bg-white"><Creative /></div>
        <Pricing />
        <Numbers/>
        <div class="bg-white"><Post />
        <Question /></div>
        <Footer/>
    </>
  );
}

export default App;
