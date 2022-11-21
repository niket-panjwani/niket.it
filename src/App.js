import Typed from 'react-typed';
import './App.css';
import ParticlesBackground from './components/ParticlesBackground';

function App() {

  return (
    <div className="App">
      <ParticlesBackground/>
      <header className="App-header">
        <Typed
          strings={[
            "Hi!",
            "I'm Niket Panjwani...",
            "I'm a Full Stack Developer"
          ]}
          typeSpeed={100}
          backSpeed={50}
          loop />
      </header>
    </div>
  );
}

export default App;
