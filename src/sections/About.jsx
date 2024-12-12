import { useEffect, useRef } from "react";
import Globe from "react-globe.gl";

const About = () => {
  const globeRef = useRef();

  useEffect(() => {
    globeRef.current.pointOfView(
      {
        lat: -6.198216,
        lng: 106.838396,
        alt: 0,
      },
      5000,
    );
  }, []);

  return (
    <section className="c-space my-20" id="about">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1-new.png"
              alt="grid-1"
              className="h-fit w-full object-contain sm:h-[276px]"
            />
            <div>
              <p className="grid-headtext">Hi, I&apos;m Hadi Halim</p>
              <p className="grid-subtext">
                Software and Cybersecurity Enthusiast
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2-new.png"
              alt="grid-2"
              className="h-fit w-full object-contain sm:h-[276px]"
            />
            <div>
              <p className="grid-headtext">Technical Skills</p>
              <p className="grid-subtext">
                I thrived in a variety of languages, frameworks, and tools that
                allow me to build scalable and secure application.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere={true}
                showGraticules={true}
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                ref={globeRef}
              />
            </div>
            <div>
              <p className="grid-headtext">Location</p>
              <p className="grid-subtext">
                I&apos;m based in Jakarta, Indonesia.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="h-fit w-full object-contain sm:h-[266px]"
            />
            <div>
              <p className="grid-headtext">Interests & Hobbies</p>
              <p className="grid-subtext">
                I usually stay updated with the latest trends in software &
                cybersecurity by reading blogs and watching videos. This way I
                can analyse the information and choose what I want and need to
                learn next. Besides that, I like to play games and listen to
                podcasts.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
            />
            <div className="space-y-2 pb-3">
              <p className="grid-subtext mb-3 text-center">Contact me</p>
              <div className="flex items-center justify-center gap-5">
                <a
                  className="cursor-pointer"
                  href="https://www.linkedin.com/in/hadi-halim-kamil/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/linkedin.svg"
                    alt="linkedin"
                    className="h-8 w-8"
                  />
                </a>

                <a
                  className="cursor-pointer"
                  href="https://www.instagram.com/hadihalimm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/instagram.svg"
                    alt="instagram"
                    className="h-8 w-8"
                  />
                </a>

                <a
                  className="cursor-pointer"
                  href="mailto:hadihalimkamil@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/gmail.svg"
                    alt="gmail"
                    className="h-8 w-8"
                  />
                </a>

                <a
                  className="cursor-pointer"
                  href="https://github.com/hadihalimm"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/github.svg"
                    alt="github"
                    className="h-8 w-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
