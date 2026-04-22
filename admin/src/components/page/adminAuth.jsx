import { useState } from "react";
import { ClipLoader } from "react-spinners";
import axios from 'axios'
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";



const LoginModal = () => {
  
  const [currstate, setCurr] = useState("Login");
  const [spinner, setSpinner] = useState(false);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });


  const changeHandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const formSubmit = async(e) => {
    e.preventDefault();
   setSpinner(true)
  if(currstate === "Signup"){
    try {
      await axios.post("http://localhost:8000/user/signup",data)
      .then(res=>{
        console.log("response",res)
       
        Swal.fire({
          title: "Good job!",
          text: res.data.message,
          icon: "success"
        });
        setSpinner(false)
        setToken(res.data.token)
        localStorage.setItem("token",res.data.token)
      })

      
    } catch (error) {
      console.log(error)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message
      });
      setSpinner(false)
      
    }
    
    
  }
  else{
    axios.post("http://localhost:8000/user/login",data)
    .then(res=>{
      console.log(res)
      setSpinner(false)
      setToken(res.data.token)
      localStorage.setItem("token",res.data.token)

      Swal.fire({
        title: "Welcome!",
        text: res.data.message,
        icon: "success"
      });
      setSpinner(false)
      navigate("/dashboard")

       setData({
    name: "",
    email: "",
    password: "",
  });
    })
    .catch(err=>{
      console.log(err)
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.response.data.message
      });
      setSpinner(false)
       setData({
    name: "",
    email: "",
    password: "",
  });
    })
  }

  };

  return (
    <div className=" flex items-center justify-center py-20 px-4">
      
      {/* Modal */}
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-semibold text-[oklch(0.85_0.16_89.69)]">
            {currstate}
          </h1>

          {/* Close Button */}
          {/* <button
            onClick={() => setLogin(false)}
            className="text-gray-500 hover:text-black text-lg"
          >
            ✕
          </button> */}
        </div>

        {/* Form */}
        <form onSubmit={formSubmit} className="flex flex-col gap-4">

          {/* Name (Signup only) */}
          {currstate === "Signup" && (
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandle}
              placeholder="Enter your name"
              autoComplete="name"
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-[oklch(0.85_0.16_89.69)] focus:[oklch(0.85_0.16_89.69)]"
            />
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={changeHandle}
            placeholder="Enter your email"
            required
             autoComplete="email"
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-[oklch(0.85_0.16_89.69)] focus:[oklch(0.85_0.16_89.69)]"
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandle}
            placeholder="Enter your password"
            required
             autoComplete={currstate === "Signup" ? "new-password" : "current-password"}
              className="w-full rounded-md border border-gray-300 px-4 py-2 outline-none focus:border-[oklch(0.85_0.16_89.69)] focus:[oklch(0.85_0.16_89.69)]"
          />

          {/* Button */}
          <button
            type="submit"
            className="flex items-center justify-center gap-2 cursor-pointer rounded-md bg-[oklch(0.85_0.16_89.69)] py-2 text-white font-medium hover:bg-[oklch(0.85_0.16_89.69)] transition"
          >
            {currstate === "Signup" ? "Create Account" : "Login"}

            { spinner && <ClipLoader color="white" size={14} /> }
          </button>

          {/* Checkbox */}
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" autoComplete="off" required />
            <p>I agree to terms & conditions</p>
          </div>

          {/* Switch */}
          {/* <p className="text-sm text-gray-600">
            {currstate === "Login" ? (
              <>
                Don’t have an account?{" "}
                <span
                  onClick={() => setCurr("Signup")}
                  className="text-[oklch(0.85_0.16_89.69)] cursor-pointer font-medium"
                >
                  Signup
                </span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setCurr("Login")}
                  className="text-[oklch(0.85_0.16_89.69)] cursor-pointer font-medium"
                >
                  Login
                </span>
              </>
            )}
          </p> */}

        </form>
      </div>
    </div>
  );
};

export default LoginModal;