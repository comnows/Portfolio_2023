import React, { useRef } from "react";

import { TypeAnimation } from "react-type-animation";

import myProfilePic from "../assets/imgs/profile/my-profile-pic-1.jpg";

const CURSOR_CLASS_NAME = "custom-type-animation-cursor";

const notProfile = () => {
  const ref = useRef();

  const showCursorAnimation = (show) => {
    if (!ref.current) {
      return;
    }

    const el = ref.current;
    if (show) {
      el.classList.add(CURSOR_CLASS_NAME);
    } else {
      el.classList.remove(CURSOR_CLASS_NAME);
    }
  };

  return (
    <>
      <TypeAnimation
        ref={ref}
        cursor={false}
        style={{
          fontSize: "1.75rem",
          color: "white",
        }}
        className={CURSOR_CLASS_NAME}
        sequence={[
          "One",
          800,
          "One Two",
          800,
          "One Two Three",
          () => showCursorAnimation(false),
          2000,
          () => showCursorAnimation(true),
          "",
        ]}
        repeat={0}
      />

      <style jsx global>{`
        .custom-type-animation-cursor::after {
          content: "|";
          animation: cursor 1.1s infinite step-start;
        }
        @keyframes cursor {
          50% {
            opacity: 0;
          }
        }
      `}</style>
    </>
  );
};

const Profile = () => {
  const greetRef = useRef();
  const ref = useRef();

  const showCursorAnimation = (show) => {
    if (!ref.current) {
      return;
    }

    const el = ref.current;
    if (show) {
      el.classList.add(CURSOR_CLASS_NAME);
    } else {
      el.classList.remove(CURSOR_CLASS_NAME);
    }
  };

  return (
    <div
      id="profile"
      className="flex items-center justify-center bg-hawkes-blue rounded-60px ml-2 mr-2"
    >
      <div className="container flex flex-col lg:flex-row items-center justify-center pt-20 pb-20 pl-10 pr-10 lg:pl-20 lg:pr-20">
        <div className="flex flex-col justify-center text-center md:text-left text-midnight-blue lg:w-1/2 lg:pl-6">
          <h2 className="font-semibold mb-2">
            <TypeAnimation cursor={false} sequence={["Hi, I'm"]} repeat={0} />
          </h2>
          <h1 className="font-bold mb-4">
            <TypeAnimation
              ref={ref}
              cursor={false}
              className={CURSOR_CLASS_NAME}
              sequence={[
                800,
                "Watthanandh\nLuaengtawekul",
                () => showCursorAnimation(false),
              ]}
              repeat={0}
            />
            <style jsx global>{`
              .custom-type-animation-cursor::after {
                content: "|";
                animation: cursor 1.1s infinite step-start;
              }
              @keyframes cursor {
                50% {
                  opacity: 0;
                }
              }
            `}</style>
          </h1>
          {/* <h1 className="font-bold mb-4">Luaengtawekul</h1> */}
          <div className=" text-2xl mb-6">
            <TypeAnimation
              sequence={[
                "I recently graduated a Bachelor of Science.",
                2000,
                "I recently graduated in majoring game development.",
                2000,
                "I recently graduated at King Mongkut's University of Technolygy Thonburi.",
                2000,
              ]}
              speed={70}
              repeat={Infinity}
            />
          </div>
          <div className="text-2xl">
            <TypeAnimation
              cursor={false}
              sequence={[
                "I'm passionate about game development through clean and elegant code. I'm looking forward for my first work experience",
              ]}
              speed={90}
              repeat={0}
            />
          </div>
        </div>
        <div className="lg:w-96 m-9">
          <img src={myProfilePic} alt="" className="rounded-60px" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
