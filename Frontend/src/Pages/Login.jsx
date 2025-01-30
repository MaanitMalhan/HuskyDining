import { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/authApiSlice";
import { setCredentials } from "../slices/authSlice";
import { toast } from "react-toastify";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeInput, setActiveInput] = useState(null);
  const [inputLabel1, setInputLabel1] = useState();
  const [inputLabel2, setInputLabel2] = useState();

  const handleInputFocus = (index) => {
    setActiveInput(index);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <div
      className="bg-projblack h-[100vh] flex items-center justify-center"
      style={{
        background:
          "linear-gradient(45deg, rgb(95, 20, 224), rgb(155, 105, 241))",
      }}
    >
      <div className="relative w-[1020px] h-[640px] bg-white rounded-[48px] shadow-xl">
        <div className="absolute w-[calc(100%-4.1rem)] h-[calc(100%-4.1rem)] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="absolute h-[100%] w-[45%] top-0 left-0">
            <form
              onSubmit={submitHandler}
              autoComplete="off"
              className="w-[260px] mx-auto h-full flex flex-col justify-evenly"
            >
              <div>
                <h6 className="text-xs font-normal mb-2">
                  <Link to={"/"}>
                    <FaArrowLeft className="inline-block" /> Back
                  </Link>
                </h6>
                <h2 className="text-3xl font-semibold">Welcome Back</h2>
                <h6 className="text-xs font-normal inline">
                  Not registred yet?
                </h6>
                <Link
                  to={"/register"}
                  className="text-primary text-xs font-medium ml-0.5"
                >
                  Sign Up
                </Link>
              </div>

              <div>
                <div className="relative h-[37px] mb-8">
                  <input
                    key={1}
                    type="email"
                    className={`relative w-[100%] h-[100%] bg-none outline-none p-0 border-b  ${
                      activeInput === "1" ? "border-black" : "border-gray-400"
                    }`}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => handleInputFocus("1")}
                    onBlur={() => setInputLabel1(true)}
                  />
                  <label
                    className={`absolute left-0 transform -translate-y-1/2 text-gray-400 pointer-events-none transition-all duration-400 ${
                      activeInput === "1" || inputLabel1
                        ? "top-[-2px] text-[0.75rem]"
                        : "top-1/2 text-[0.95rem]"
                    }`}
                  >
                    Email Address
                  </label>
                </div>

                <div className="relative h-[37px] mb-8">
                  <input
                    key={2}
                    type="password"
                    className={`relative w-[100%] h-[100%] bg-none outline-none p-0 border-b  ${
                      activeInput === "2" ? "border-black" : "border-gray-400"
                    }`}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={() => handleInputFocus("2")}
                    onBlur={() => setInputLabel2(true)}
                  />
                  <label
                    className={`absolute left-0  transform -translate-y-1/2  text-gray-400 pointer-events-none transition-all duration-400 ${
                      activeInput === "2" || inputLabel2
                        ? "top-[-2px] text-[0.75rem]"
                        : "top-1/2 text-[0.95rem]"
                    }`}
                  >
                    Password
                  </label>
                </div>

                <button
                  disabled={isLoading}
                  type="submit"
                  className="inline-block w-[100%] h-[43px] bg-primary text-white rounded-lg cursor-pointer text-[.8rem] mb-8"
                >
                  Sign In
                </button>

                <p className="text-[#bbb] text-[.7rem]">
                  Forgotten your password or you login datails?
                  <Link to={"/"} className="text-primary">
                    get help
                  </Link>{" "}
                  signing in
                </p>
              </div>
            </form>
          </div>

          <div className="absolute h-[100%] w-[55%] top-0 left-[45%] bg-[#9b69f1] rounded-3xl"></div>
        </div>
      </div>
    </div>
  );
};
