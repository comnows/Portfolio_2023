import myProfilePic from "../assets/imgs/profile/my-profile-pic-1.jpg";

const Profile = () => {
  return (
    <div className="flex items-center justify-center bg-hawkes-blue rounded-60px ml-2 mr-2">
      <div className="flex flex-row p-20">
        <div className="flex flex-col items-end justify-center text-midnight-blue pl-6">
          <h2 className="font-bold">Hi I'm</h2>
          <h1 className="font-bold">Watthanandh Luaengtawekul</h1>
          {/* <div className=" text-2xl">who am i what i do</div> */}
        </div>
        <div className="w-96 lg:w-96 m-9">
          <img src={myProfilePic} alt="" className="rounded-60px" />
        </div>
      </div>
    </div>
  );
};

export default Profile;
