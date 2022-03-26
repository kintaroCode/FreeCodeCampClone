import './App.css';
import Testimonios from './componentes/Testimonios.js';

function App() {
  return (
    <div className="App">
      <div className='container-principal'>
        <h1>Esto es lo que dicen Nuestros alumnos</h1>
        <Testimonios nombre="Shawn Wang"
                     imagen="shawn"
                     pais="Singapore"
                     cargo="Ingeniero de Software"
                     empresa="Amazon"
                     testimonios="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."/>
        <Testimonios nombre="Sarah Shima"
                     imagen="sarah"
                     pais="Nigeria"
                     cargo="Ingeniera de Software"
                     empresa="ChatDesk"
                     testimonios="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company"/>
        <Testimonios nombre="Emma Bostian"
                     imagen="emma"
                     pais="Suecia"
                     cargo="Ingeniera de Software"
                     empresa="Spotify"
                     testimonios="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."/>
        
      </div>
    </div>
  );
}

export default App;
