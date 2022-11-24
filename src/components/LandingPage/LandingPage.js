import Typewriter from 'typewriter-effect';
import ParticlesBackground from '../Background/ParticlesBackground';

function LandingPage() {
    return (
        <>
            <header className="App-header">
                <ParticlesBackground />
                <Typewriter
                    options={{
                        strings: ["Hi!", "I'm Niket Panjwani!", "I'm a Full Stack Developer ..."],
                        autoStart: true,
                        loop: true,
                        pauseFor: 1000
                    }}
                />
            </header>
        </>
    )
}

export default LandingPage;