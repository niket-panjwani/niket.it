import './App.css';
import Typewriter from 'typewriter-effect';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
