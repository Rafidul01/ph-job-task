import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, setUpdate, update } = useContext(AuthContext);
  const [eye, setEye] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photoUrl");
    const password = form.get("password");

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters !");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must have an Uppercase letter!");
      return;
    } else if (!/[a-z]/.test(password)) {
      toast.error("Password must have a Lowercase letter!");
      return;
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            setUpdate(!update);
          })
          .catch();
        e.target.reset();
        navigate(location?.state ? location.state : "/");
        toast.success("Registered Successful!");
      })
      .catch((error) => {
        console.error(error);
        toast.error("Sign Up Failed!");
      });
    console.log(name, email, photo, password);
  };
  const handelSeePass = () => {
    setEye(!eye);
  };
  return (
    <div className="hero min-h-screen font-poppins bg-[url('https://i.ibb.co/6y2Wx0f/kenny-leys-BL-jv-ec-Y64-unsplash.jpg')] rounded-2xl border-2  border-[#74C138] py-8 bg-center bg-cover ">
      <Helmet>
        <title>Product House || Register</title>
      </Helmet>

      <div className="flex flex-col justify-center items-center ">
        <div className="text-center lg:text-left w-full  md:rounded-r-2xl flex justify-center items-center p-4 ">
          <div className="text-center  p-2 rounded-2xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white">
              Register Now
            </h1>
            <div className="py-6  text-black opacity-80  space-y-4">
              <p className="max-w-3xl text-sm text-white">
                Sign in to get the best products!
              </p>
            </div>
          </div>
        </div>
        <div
          onSubmit={handleRegister}
          className="card shrink-0 md:w-3/4  bg-base-100 bg-opacity-80 rounded-2xl md:rounded-l-2xl"
        >
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Photo URL"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={eye ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <Link
                onClick={handelSeePass}
                className="text-2xl absolute right-3 top-[48px]"
              >
                {eye ? <FaRegEye /> : <FaRegEyeSlash />}
              </Link>
            </div>
            <p>
              <span className="font-bold">Note : </span>
              <small className="text-black ">
                Your password must be at least{" "}
                <span className="text-[#74C138]">6 characters</span> and
                includes{" "}
                <span className="text-[#74C138]">
                  an Uppercase and a Lowercase
                </span>{" "}
                character.
              </small>
            </p>
            <div className="form-control mt-6">
              <button className="btn bg-transparent hover:bg-[#74C138] border-[#74C138] text-[#74C138]  hover:text-white">
                Register
              </button>
            </div>

            <p className="text-center font-roboto text-lg">
              Already Registered to Sweet Stay? Please{" "}
              <Link
                to="/login"
                className="font-bold text-[#74C138] hover:text-[#74C138cc] "
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
