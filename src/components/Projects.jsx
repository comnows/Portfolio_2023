import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import myProfilePic from "../assets/imgs/profile/my-profile-pic-1.jpg";
import tinyAgentPic from "../assets/imgs/works/TinyAgent.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slideData = [
  {
    id: 1,
    name: "VR FPS game",
    path: "https://drive.google.com/file/d/1JqiN7TfBm_2TGOfEiG-Ks-hWmr38tsbj/preview",
    description:
      "The immersive online Co-op FPS game created with Unity and Normcore Networking, offer players to engage in cross-platform gameplay on both PC and VR",
  },
  {
    id: 2,
    name: "Tiny Agent",
    path: tinyAgentPic,
    description: "The 2D action mobile game created with Unity",
  },
  {
    id: 3,
    name: "Tangthai in Amazon",
    path: "https://drive.google.com/file/d/196avqN7d-bWR8wk_OvZadtBVwqJm15QS/preview",
    description:
      "An education game created by Unity. It provides information about the Amazon rainforest designed for kids aged 5 to 13.",
  },
  {
    id: 4,
    name: "PlantPlay",
    path: "https://www.youtube.com/embed/2o48N3CODHU",
    description:
      "An E-commerce application created with Flutter, which allows trading merchandise related to indoor plants",
  },
];

const Projects = () => {
  return (
    <div className="bg-black-pearl rounded-60px h-full m-2">
      <div className="flex pt-11 pb-14 pl-16">
        <div className="flex flex-col w-full h-full">
          <div className=" text-aqua-green text-xl font-semibold uppercase">
            what i do
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
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
                      className="w-1/2 aspect-video mx-auto mb-6"
                    ></iframe>
                  ) : (
                    <img src={data.path} className=" w-768px mx-auto mb-6" />
                  )}
                  <div className="text-center text-2xl font-semibold mb-2">
                    {data.name}
                  </div>
                  <div className="text-center text-xl">{data.description}</div>
                </div>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide>
              <div className="container text-aqua-green mx-auto mt-4 mb-6">
                <iframe
                  src="https://www.youtube.com/embed/2o48N3CODHU"
                  title="YouTube video player"
                  allowFullScreen
                  className="w-1/2 aspect-video mx-auto mb-6"
                ></iframe>
                <div className="text-center text-2xl font-semibold mb-2">
                  PlantPlay
                </div>
                <div className="text-center text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide> */}
          </Swiper>

          {/* <Swiper modules={[Navigation]} navigation slidesPerView={1} loop>
            <SwiperSlide>Slide 1</SwiperSlide>
          </Swiper> */}
          {/* <div className="flex justify-center">
            <img src={myProfilePic} alt="" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
