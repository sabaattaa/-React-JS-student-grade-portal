import { Link } from "react-router-dom";
import logo from "../assets/logo1.png";
import { useEffect, useState } from "react";
import { connect } from "react-redux";

const Header = ({role}) => {
  const stuHed = ["Home", "Transcript", "Payments", "Request", "Complaints"];
  const teaHed = ["Home", "Courses", "Request", "Student In role"];
  const Adminheadings = ["Home", "Students", "Teachers", "Admin"];

  const [ary,setAry]=useState([])
  useEffect(()=>{
if(role==="ADMIN"){
  setAry(Adminheadings)

}else if (role==="TEACHER"){
  setAry(teaHed)
}else{
  setAry(stuHed)
}
  },[])
  return (
    <>
      <div className="h-20 px-5  w-full flex items-center  justify-between shadow-lg border-2 border-b-gray-300 bg-gray-200">
        <img src={logo} alt="logo" className="w-32 h-20" />

        <div className="flex flex-row gap-10 text-xl font-semibold text-gray-700">
          {ary.map((item, index) => (
           
           <Link key={index} to={`/${item}`}>
    <p>{item}</p>
  </Link>
          ))}
        </div>

        <div className="flex flex-row items-center gap-3">
          <p className="font-bold text-xl">Saba</p>
          <img src={logo} alt="user img" className="w-16 h-16 rounded-full" />
        </div>
      </div>
    </>
  );
};

const mstp=(state)=>{
  console.log(state,"llllll")
  return{
    role:state.AuthR.role,
  }
}
export default connect(mstp,{}) (Header);
