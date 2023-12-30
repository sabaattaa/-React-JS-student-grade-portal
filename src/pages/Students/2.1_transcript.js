import React from "react";

import Header from "../../components/0.1_header";
import logo from "../../assets/logo1.png";

const Transcript = () => {
  const grades = [
    { name: "OOP", grade: "+A", points: "3.9" },
    { name: "Data Structure", grade: "B+", points: "3.9" },
    { name: "C++", grade: "C+", points: "3.9" },
  ];

  return (
    <>
    <Header/>
      <div className="flex  flex-col w-full h-screen">
        <div className="flex gap-6 flex-col h-full justify-center items-center">
          <p className="text-4xl font-sans font-bold">Student Transcript</p>

          <div className=" flex flex-row w-1/2 bg-gray-200 shadow-lg border-2 border-gray-200 rounded-md  p-5 gap-10 ">
            <table className="w-full">
              <tbody className="w-full flex flex-col gap-5 ">
                <thead>Semester {"1"}</thead>
                <tr className="flex flex-row gap-10">
                  {" "}
                  <th className="w-full">Course</th>
                  <th className="w-full">Points</th>
                  <th className="w-full">Grades</th>
                </tr>

                {grades.map((item, index) => (
                  <tr key={index} className="flex flex-row gap-10">
                    <td className="w-full"> {item.name}</td>
                    <td className="w-full">{item.points}</td>
                    <td className="w-full">{item.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="w-full flex justify-end">
              {" "}
              <img
                src={logo}
                alt="student img"
                className="h-32 w-32 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Transcript;
