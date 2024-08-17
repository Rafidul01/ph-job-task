import { useContext, useState } from "react";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthProvider";



const Login = () => {
    const { logIn, googleLogIn, githubLogin } = useContext(AuthContext);
    const [eye, setEye] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = (e) => {
      e.preventDefault();
      const form = new FormData(e.target);
      const email = form.get("email");
      const password = form.get("password");
      logIn(email, password)
        .then((result) => {
          e.target.reset();
          console.log(result.user);
          toast.success("Login Successful!")
          navigate(location?.state ? location.state : '/');
        })
        .catch((error) => {
          console.log(error);
          toast.error("login failed..")
        });
      // console.log(name,email,photo,password);
    };
    const handleGoogleLogIn = () => {
      googleLogIn()
        .then(() => {
          toast.success("Login Successful!");
          navigate(location?.state ? location.state : '/');
        })
        .catch(()=>{
          toast.error("login failed..")
  
        });
    };
    const handleGithubLogin = () => {
      githubLogin()
        .then(() => {
          toast.success("Login Successful!");
          navigate(location?.state ? location.state : '/');
        })
        .catch(()=>{
          toast.error("login failed..")
        });
    };
    const handelSeePass = () =>{
      setEye(!eye);
    }
    return (
      <div className="hero min-h-screen font-poppins bg-[url('https://i.ibb.co/hBms6wX/birmingham-museums-trust-hc-XPIKs-C2-PM-unsplash.jpg')] rounded-2xl border-2  border-[#74C138] py-8 bg-center bg-cover ">
        <div className="flex flex-col justify-center items-center ">
          <div className="text-center lg:text-left w-full md:w-[1/2] md:rounded-r-2xl flex justify-center items-center p-4 " data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-black">Login Now!</h1>
              <div className="py-6  text-black opacity-80  space-y-4">
                <p className="max-w-3xl text-sm md:text-base ">Sign in to unlock exclusive access to our art and craft collection. Browse, save favorites, and enjoy personalized recommendations. Not a member? Join now to discover a world of creativity!</p>
              </div>
            </div>
          </div>
          <div className="card shrink-0 md:w-3/4 bg-base-100 bg-opacity-60  rounded-2xl " data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000">
            <div className="card-body">
              <form onSubmit={handleLogin} >
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
                  <Link onClick={handelSeePass} className="text-2xl absolute right-3 top-[48px]">{eye ? <FaRegEye />:<FaRegEyeSlash />}</Link>
                </div>
                <div className="form-control mt-6">
                  <button className="btn hover:bg-[#74C138] bg-transparent text-[#74C138] border-[#74C138] hover:text-white">Login</button>
                </div>
              </form>
              <div>
                <div>
                  
                  <div className="mt-6 text-center ">
                    <div className="mb-4 flex gap-3 justify-center items-center">
                      <hr className=" w-14 md:w-20 lg:w-40" />
                      <h1 className="font-bold">Login With</h1>
                      <hr className=" w-14 md:w-20 lg:w-40" />
                    </div>
                    <div className="flex justify-center items-center gap-4">
                      <button
                        onClick={handleGoogleLogIn}
                        className="btn bg-transparent border-[#74C138] hover:bg-[#74C138] hover:text-white text-[#74C138]"
                      >
                        <FaGoogle />
                        Google
                      </button>
                      <button
                        onClick={handleGithubLogin}
                        className="btn bg-transparent border-[#74C138] hover:bg-[#74C138] hover:text-white text-[#74C138]"
                      >
                        <FaGithub></FaGithub> Github
                      </button>
                    </div>
                  </div>
                  <p className="mt-4 text-center font-roboto text-lg">
                    New to Sweet Stay? Please{" "}
                    <Link
                      to="/register"
                      className="font-bold text-[#74C138] hover:text-[#74C138cc]"
                    >
                      Register
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;