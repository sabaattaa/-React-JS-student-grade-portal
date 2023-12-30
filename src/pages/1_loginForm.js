import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {login} from "../redux/action/auth"
import { useNavigate } from "react-router-dom";
const LoginForm = ({login,role}) => {
  const [credantials, setCredantials] = useState({ email: "", password: "" });

  const change = (e) => {
    setCredantials({ ...credantials, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    // console.log("this is submit", credantials);
    login(credantials);
  };
const navigate=useNavigate()
useEffect(()=>{
  if(role==='ADMIN'){
    navigate("/admin")
  }else if(role==='TEACHER'){
    navigate("/teacher")
  }
  else if(role==='STUDENT'){
    navigate("/home")
  }else{
    navigate("/")
  }
},[role])
  
  return (
    <div className="flex bg-back bg-cover bg-no-repeat px-5  justify-center items-center h-screen w-full  ">
      <div className="flex px3:w-full px5:w-3/4 px8:w-1/3 flex-col  border-2 items-center gap-8 rounded-md drop-shadow-lg bg-gray-100 border-gray-200 p-5">
        <p className="text-3xl font-bold ">Login Form</p>

        <form onSubmit={submit} className="flex w-full flex-col gap-3 ">
          <label className="font-sans">Enter email</label>
          <input
            onChange={change}
            type="email"
            placeholder="Enter email"
            name="email"
            className="p-2 outline-none border-2 border-gray-200 rounded-md w-full"
          />

          <label className="font-sans">Enter password</label>
          <input
            onChange={change}
            type="password"
            placeholder="Enter password"
            name="password"
            className="p-2 outline-none border-2 border-gray-200 rounded-md w-full"
          />
          <div className="mt-10 justify-center items-center flex w-full">
            <button
              className="bg-blue-500 text-white font-bold px-4 py-2 rounded-md  "
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const mstp=(state)=>{
  console.log(state,"llllll")
  return{
    role:state.AuthR.role,
  }
}
export default connect(mstp,{login}) (LoginForm);
