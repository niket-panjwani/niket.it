import './App.css';
import Typewriter from 'typewriter-effect';
import ParticlesBackground from './background/ParticlesBackground';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ParticlesBackground/>
        <Typewriter
          options={{
            strings: ["Hi!", "I'm Niket Panjwani!", "I'm a Full Stack Developer ..."],
            autoStart: true,
            loop: true,
            pauseFor: 1000
          }}
        />
      </header>
    </div>
  );
}

export default App;
