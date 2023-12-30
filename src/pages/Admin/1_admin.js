import React from "react";
import Header from "../../components/0.1_header";
const Admin = () => {
  return <div className="flex  flex-col w-full h-screen">
  <Header />
  <div className="flex gap-6 flex-col h-full justify-center items-center">
      <p className="text-4xl font-sans font-bold">Admin Information</p>
    <div className=" flex flex-row w-1/2 bg-gray-200 shadow-lg border-2 border-gray-200 rounded-md  p-5 gap-10 ">
      {/* <img src={logo} alt="student img" className="h-56 w-56 rounded-full" /> */}
      <table className="w-full">
        <tbody className="w-full flex flex-col gap-5 ">
        <tr className="flex flex-row gap-10">
            <td className="w-full"> Employee Code</td>
            <td className="w-full">{"114"}</td>
          </tr>
          <tr className="flex flex-row gap-10">
            <td className="w-full"> Employee Name</td>
            <td className="w-full">{"Admin"}</td>
          </tr>
          <tr className="flex flex-row gap-10">
            <td className="w-full"> Father Name</td>
            <td className="w-full">{"Admin Tahir"}</td>
          </tr>
          
          <tr className="flex flex-row gap-10">
            <td className="w-full"> Designation</td>
            <td className="w-full">{"Admin"}</td>
          </tr>
          <tr className="flex flex-row gap-10">
            <td className="w-full"> Batch</td>
            <td className="w-full">{"2000"}</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>
</div>
};
export default Admin;
