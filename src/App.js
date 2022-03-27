import './App.css';
import Navbar from './components/layout/navbar/Navbar';
import Nameplate from './components/nameplate/Nameplate';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Socials from './components/socials/Socials';
import Footer from './components/layout/Footer';

const App = () => {
  return (
    <div className="App bg-indigo-500 flex flex-col w-screen">
      <div className="self-center lg:w-8/12 flex flex-col items-center">
        <Navbar/>
        <Nameplate/>
        <About/>
        <Skills/>
        <Projects/>
        <Socials/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
