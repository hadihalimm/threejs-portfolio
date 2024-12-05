import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../components/CanvasLoader";
import { Suspense } from "react";
import Macbook from "../components/Macbook";
import { useMediaQuery } from "react-responsive";
import ReactLogo from "../components/ReactLogo";
import GolangLogo from "../components/GolangLogo";
import PythonLogo from "../components/PythonLogo";
import CoffeeCup from "../components/CoffeeCup";
import HeroCamera from "../components/HeroCamera";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  return (
    <section className="flex-col0 relative flex min-h-screen w-full" id="home">
      <div className="c-space mx-auto mt-20 flex w-full flex-col gap-3 sm:mt-36">
        <p className="text-center font-generalsans text-2xl font-medium text-white sm:text-3xl">
          Hello there, I&apos;m Hadi
        </p>
        <p className="hero_tag text-gray_gradient">Welcome to My Space</p>
      </div>

      <div className="absolute inset-0 h-full w-full">
        <Canvas className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 7]} />
            <HeroCamera>
              <Macbook
                position={isMobile ? [0, -3.3, 0] : [0, -3.2, 0]}
                rotation={[0.6, 0, -0.05]}
                scale={isMobile ? 14 : 18}
              />
            </HeroCamera>
            <group>
              <ReactLogo
                position={isMobile ? [1.6, 3.1, 0] : [7, 1, 0]}
                scale={isMobile ? 0.2 : 0.3}
              />
              <GolangLogo
                position={isMobile ? [-0.7, 1.5, 0] : [-6, -3, 0]}
                rotation={[0, -Math.PI / 3, 0]}
                scale={isMobile ? 0.7 : 1}
              />
              <PythonLogo
                position={isMobile ? [1.3, 1.8, 0] : [5.5, -3, 0]}
                rotation={[0, -Math.PI / 10, 0]}
                scale={isMobile ? 0.16 : 0.25}
              />
              <CoffeeCup
                position={isMobile ? [-1.3, 1.5, 0] : [-6, -4, 0]}
                rotation={[5, -0.1, 0]}
                scale={isMobile ? 0.22 : 0.35}
              />
            </group>
            <ambientLight position={[0, 0, 0]} intensity={1} />
            <directionalLight position={[0, 5, 0]} intensity={1.5} />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
