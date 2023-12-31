import React, { useEffect } from "react";

import Header from "../../components/0.1_header";
import logo from "../../assets/logo1.png";
import { studentInfo } from "../../redux/action/studentT";
import { connect } from "react-redux";
const Student = ({ studentInfo, stuInfo }) => {
  useEffect(() => {
    studentInfo();
  }, [studentInfo]);
  return (
    <>
      <div className="flex  flex-col w-full h-screen">
        <Header />
        <div className="flex gap-6 flex-col h-full justify-center items-center">
          <p className="text-4xl font-sans font-bold">Student Information</p>
          <div className=" flex flex-row w-1/2 bg-gray-200 shadow-lg border-2 border-gray-200 rounded-md  p-5 gap-10 ">
            <img
              src={logo}
              alt="student img"
              className="h-56 w-56 rounded-full"
            />
            <table className="w-full">
              <tbody className="w-full flex flex-col gap-5 ">
                <tr className="flex flex-row gap-10">
                  <td className="w-full"> Student Id</td>
                  <td className="w-full">{stuInfo[0].StudentId}</td>
                </tr>
                <tr className="flex flex-row gap-10">
                  <td className="w-full"> Student Name</td>
                  <td className="w-full">{stuInfo[0].studentName}</td>
                </tr>
                <tr className="flex flex-row gap-10">
                  <td className="w-full"> Father Name</td>
                  <td className="w-full">{stuInfo[0].fatherName}</td>
                </tr>

                <tr className="flex flex-row gap-10">
                  <td className="w-full"> Semester</td>
                  <td className="w-full">{stuInfo[0].semester}</td>
                </tr>
                <tr className="flex flex-row gap-10">
                  <td className="w-full"> Batch</td>
                  <td className="w-full">{stuInfo[0].batch}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const mstp = (state) => {
  return {
    stuInfo: state.StudentR.stuInfo,
  };
};
export default connect(mstp, { studentInfo })(Student);
