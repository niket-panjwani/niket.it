import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";

function ParticlesBackground() {
    return (
        <div>
            <Particles
                params={
                    {
                        "particles": {
                            "number": {
                                "value": 50
                            },
                            "size": {
                                "value": 3
                            }
                        },
                        "interactivity": {
                            "events": {
                                "onhover": {
                                    "enable": true,
                                    "mode": "repulse"
                                }
                            }
                        }
                    }
                }>
            </Particles>
        </div>
    )
}

export default ParticlesBackground;