import ParticlesBackgroundOptions from "./ParticlesBackgroundOptions"
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-particles";

function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <Particles options={ParticlesBackgroundOptions} init={particlesInit} />
    </>
  );
}

export default ParticlesBackground;