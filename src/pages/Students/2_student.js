import React from "react";

import Header from "../../components/0.1_header";
import logo from "../../assets/logo1.png";
const Student = () => {
  return (
    <>
      <div className="flex  flex-col w-full h-screen">
        <Header />
        <div className="flex gap-6 flex-col h-full justify-center items-center">
            <p className="text-4xl font-sans font-bold">Student Information</p>
          <div className=" flex flex-row w-1/2 bg-gray-200 shadow-lg border-2 border-gray-200 rounded-md  p-5 gap-10 ">
            <img src={logo} alt="student img" className="h-56 w-56 rounded-full" />
            <table className="w-full">
              <tbody className="w-full flex flex-col gap-5 ">
              <tr className="flex flex-row gap-10">
                  <td className="w-full"> Student Id</td>
                  <td className="w-full">{"f2019065114"}</td>
                </tr>
                <tr className="flex flex-row gap-10">
                  <td className="w-full"> Student Name</td>
                  <td className="w-full">{"saba"}</td>
                </tr>
                <tr className="flex flex-row gap-10">
                  <td className="w-full"> Father Name</td>
                  <td className="w-full">{"Atta Muhammad"}</td>
                </tr>
                
                <tr className="flex flex-row gap-10">
                  <td className="w-full"> Semester</td>
                  <td className="w-full">{"1"}</td>
                </tr>
                <tr className="flex flex-row gap-10">
                  <td className="w-full"> Batch</td>
                  <td className="w-full">{"F2019"}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Student;
