import garenaLogo from "../assets/imgs/logo/garena.png";

const Experience = () => {
  return (
    <div id="experience" className="bg-dark-jungle rounded-60px h-full m-2">
      <div className="flex pt-6 pb-8 pl-8 pr-4 md:pt-11 md:pb-14 md:pl-16 md:pr-12">
        <div className="flex flex-col w-full h-full">
          <h3 className="text-gray-300 font-semibold uppercase pl-4 md:pl-0">
            my experience
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-center pt-5 pb-5">
            <div className="lg:w-96">
              <img src={garenaLogo} alt="" />
            </div>
            <div className="flex flex-col justify-center text-center text-gray-300 md:text-left lg:w-3/10">
              <h3 className="font-semibold mb-2">July 2022 - December 2022</h3>
              <h1 className="uppercase">garena</h1>
              <h3 className="font-semibold mb-4">Game Developer (Intern)</h3>
              <span className="text-xl">
                Designed and developed mini-games published on Blockman Go, a
                popular mobile gaming platform and sandbox game.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
