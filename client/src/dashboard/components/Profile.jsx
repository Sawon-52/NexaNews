import pic from "../../assets/profile.jpg";
const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-4 text-center bg-white  p-5 py-8 rounded-md border-2">
      <div className="avatar">
        <div className="ring-primary ring-offset-base-100 w-14 rounded-full ring ring-offset-2">
          <img src={pic} />
        </div>
      </div>
      <div>
        <h2 className="text-md font-semibold text-slate-950">Mehedi hasan</h2>
        <p className="text-base text-slate-600">Admin</p>
      </div>
    </div>
  );
};

export default Profile;
