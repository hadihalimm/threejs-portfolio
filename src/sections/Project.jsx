import { Suspense, useState } from "react";
import { myProjects } from "/src/constants";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";

import CanvasLoader from "../components/CanvasLoader";
import ProjectorScreen from "../components/ProjectorScreen";

const Project = () => {
  const projectCount = myProjects.length;
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  // const x = useControls("DemoComputer", {
  //   rotationX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   rotationZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionX: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionY: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   positionZ: {
  //     value: 0,
  //     min: -10,
  //     max: 10,
  //   },
  //   scale: {
  //     value: 1,
  //     min: 0.1,
  //     max: 10,
  //   },
  // });

  const handleNavigation = (direction) => {
    setSelectedProjectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  return (
    <section className="c-space my-20" id="projects">
      <p className="head-text">My Projects</p>

      <div className="mt-12 grid w-full grid-cols-1 gap-5 lg:grid-cols-2">
        <div className="relative flex flex-col justify-between gap-5 px-5 py-10 shadow-2xl shadow-black-200 sm:p-10">
          <div className="absolute right-0 top-0">
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w=full h-96 rounded-xl object-cover"
            />
          </div>
          {/* <div
            className="w-fit rounded-lg p-3 backdrop-blur-3xl backdrop-filter"
            style={currentProject.logoStyle}
          >
            <img src={currentProject.logo} className="h-10 w-10 shadow-sm" />
          </div> */}

          <div className="my-5 mt-10 flex flex-col gap-5 text-white-600">
            <p className="animatedText text-2xl font-semibold text-white">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img src={tag.path} alt={tag.name} />
                </div>
              ))}
            </div>

            <a
              className="flex cursor-pointer items-center gap-2 text-white-600"
              // href={currentProject.href}
              // target="_blank"
              // rel="noreferrer"
            >
              <p>Check live site</p>
              <img src="/assets/arrow-up.png" className="h-3 w-3" alt="arrow" />
            </a>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="right-arrow"
                className="h-4 w-4"
              />
            </button>

            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right-arrow"
                className="h-4 w-4"
              />
            </button>
          </div>
        </div>

        <div className="h-96 md:h-full">
          {/* <div className="h-96 rounded-lg border border-black-300 bg-black-200 md:h-full"> */}
          <Canvas>
            <ambientLight intensity={2} />
            <directionalLight position={[10, 10, 10]} intensity={2} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <ProjectorScreen
                  position={[-0.1, -2.4, 0]}
                  rotation={[0, -1.7, 0]}
                  scale={3.2}
                  texture={currentProject.texture}
                />
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;
