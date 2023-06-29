import myProfilePic from "../assets/imgs/profile/my-profile-pic-1.jpg";

const Profile = () => {
  return (
    <div className="flex items-center justify-center bg-hawkes-blue rounded-60px h-full ml-2 mr-2">
      <div className="flex flex-row lg:gap-20 2xl:gap-24 p-20">
        <div className="flex flex-col justify-center text-6xl font-semibold text-midnight-blue">
          <div>Hi I'm</div>
          <div>Watthanandh Luaengtawekul</div>
          <div className=" text-2xl">who am i what i do</div>
        </div>
        <div className="w-96 lg:w-96 m-9">
          <img src={myProfilePic} alt="" className="rounded-60px" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
