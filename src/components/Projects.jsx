import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import tinyAgentPic from "../assets/imgs/works/TinyAgent.jpg";
import petPlanetPic from "../assets/imgs/works/PetPlanet.png";
import blockenPic from "../assets/imgs/works/Blocken.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideData = [
  {
    id: 1,
    name: "Tiny Agent",
    path: tinyAgentPic,
    description:
      "The 2D action mobile game created with Unity. This project was completed during my sophomore year.",
  },
  {
    id: 2,
    name: "Tangthai in Amazon",
    path: "https://drive.google.com/file/d/196avqN7d-bWR8wk_OvZadtBVwqJm15QS/preview",
    description:
      "An education game created by Unity. It provides information about the Amazon rainforest designed for kids aged 5 to 13. This project was completed during my junior year and submitted for the NSC 2021, but it didn't qualified",
  },
  {
    id: 3,
    name: "Blocken",
    path: blockenPic,
    description:
      "This game is on Blockman Go application. It's a multiplayer fighting game that offers a wide range of weapons for players to utilize. I worked on this project during my internship at Garena Thailand",
  },
  {
    id: 4,
    name: "Pet Planet",
    path: petPlanetPic,
    description:
      "This game is also on Blockman Go application. It's an animal simulation game that allows players to simulate being an animal. I worked on this project during my internship at Garena Thailand",
  },
  {
    id: 5,
    name: "VR FPS game",
    path: "https://drive.google.com/file/d/1JqiN7TfBm_2TGOfEiG-Ks-hWmr38tsbj/preview",
    description:
      "The immersive online Co-op FPS game created with Unity and Normcore Networking, offer players to engage in cross-platform gameplay on both PC and VR. This project was completed during my senior year.",
  },
  {
    id: 6,
    name: "PlantPlay",
    path: "https://www.youtube.com/embed/2o48N3CODHU",
    description:
      "An E-commerce application created with Flutter, which allows trading merchandise related to indoor plants. This project was completed during my senior year. I worked on the product page and navigation bar.",
  },
];

const Projects = () => {
  return (
    <div id="works" className="bg-black-pearl rounded-60px h-full m-2">
      <div className="flex pt-6 pb-8 pl-8 pr-4 md:pt-11 md:pb-14 md:pl-16 md:pr-12">
        <div className="flex flex-col w-full h-full">
          <h3 className="text-aqua-green font-semibold uppercase pl-4 md:pl-0">
            what i do
          </h3>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-color": "#17e2ad",
              "--swiper-navigation-color": "#17e2ad",
            }}
            spaceBetween={10}
            slidesPerView={1}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="w-full"
          >
            {slideData.map((data) => (
              <SwiperSlide key={data.id}>
                <div className="container text-aqua-green mx-auto mt-4 mb-8">
                  {data.path.includes("https") ? (
                    <iframe
                      src={data.path}
                      title={data.name + "preview video"}
                      allowFullScreen
                      className=" w-3/4 lg:w-1/2 aspect-video mx-auto mb-6"
                    ></iframe>
                  ) : (
                    <img
                      src={data.path}
                      className=" w-3/4 lg:w-768px mx-auto mb-6"
                    />
                  )}
                  <div className="text-center text-2xl font-semibold mb-2">
                    {data.name}
                  </div>
                  <div className="text-center text-xl">{data.description}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Projects;
