import React, { useState } from "react";
import Header from "../../components/0.1_header";

const Complaint = () => {
  const [data, setData] = useState({ desc: "" });

  const change = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log("this is data", data);
  };

  return (
    <>
      <Header />
      <div className="h-screen flex-col w-full flex justify-center items-center">
        <form
          onSubmit={submit}
          className="w-2/5 gap-4 bg-gray-200 border-2 border-gray-300 flex flex-col p-10"
        >
          <label className="text-lg font-bold">Enter Complaint</label>

          <p className="text-lg font-bold">Description</p>
          <textarea
            onChange={change}
            name="desc"
            className="px-5 py-2 rounded-md"
            placeholder="Enter relivent description..."
          />
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

export default Complaint;
