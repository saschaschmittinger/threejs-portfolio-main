import React from 'react';

const About = () => {
  return (
    <section className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid1.png" alt="grid" className="w-full sm:h-[276px] h-fit object-contain" />
            <div className="">
              <p className="grid-headtext">Hallo ich bin Sascha</p>
              <p className="grid-subtext">
                mit 5 Jahren Erfahrung im Bereich Web Entwicklung hebe ich mit 3D Animationen und OpenAI, Webdesign auf
                ein neues Level
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="/assets/grid2.png" alt="grid2" className="w-full sm:w-[276px] h-fit object-contain" />
            <div className="grid-headtext">Tech Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
