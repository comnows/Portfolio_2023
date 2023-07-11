import myProfilePic from "../assets/imgs/profile/my-profile-pic-1.jpg";

const Profile = () => {
  return (
    <div className="flex items-center justify-center bg-hawkes-blue rounded-60px ml-2 mr-2">
      <div className="container flex flex-col lg:flex-row items-center justify-center pt-20 pb-20 pl-10 pr-10 lg:pl-20 lg:pr-20">
        <div className="flex flex-col justify-center text-center md:text-left text-midnight-blue lg:w-1/2 lg:pl-6">
          <h2 className="font-semibold mb-2">Hi, I'm</h2>
          <h1 className="font-bold mb-2">Watthanandh</h1>
          <h1 className="font-bold mb-4">Luaengtawekul</h1>
          <p className=" text-2xl mb-2">
            I recently graduated a Bachelor of Science in majoring game
            development at King Mongkut's University of Technology Thonburi. I'm
            looking forward for my first work experience
          </p>
        </div>
        <div className="lg:w-96 m-9">
          <img src={myProfilePic} alt="" className="rounded-60px" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
