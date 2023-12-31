import React, { useState } from "react";
import Header from "../../components/0.1_header";
import {request} from "../../redux/action/studentT"
import { connect } from "react-redux";
const Request = ({request}) => {
  const req = ["New SID", "Review Grade", "Final Transcript", "Freez Semester"];

  const [data, setData] = useState({ reqtype: "", desc: "" });

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("this is data", data);
    request(data)
  };



  return (
    <>
      <Header />
      <div className="h-screen flex-col w-full flex justify-center items-center">
        <form
          onSubmit={submit}
          className="w-2/5 gap-4 bg-gray-200 border-2 border-gray-300 flex flex-col p-10"
        >
          <label className="text-lg font-bold">Enter Request</label>
          <select onChange={change} name="reqtype" className="p-2 rounded-md">
            {req.map((item, index) => (
              <option className="p-2" key={index}>
                {item}
              </option>
            ))}
          </select>

          <p className="text-lg font-bold">Description</p>
          <textarea
            name="desc"
            onChange={change}
            className="px-5 py-2 rounded-md"
            placeholder="Enter relivent description..."
          ></textarea>
          <div className="flex justify-center items-center w-full ">
            <button
              type="submit"
              className="bg-blue-500 rounded-md p-2 text-white font-bold "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};


export default connect(null,{request}) (Request);

