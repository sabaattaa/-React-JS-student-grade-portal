import React, { useEffect } from "react";
import Header from "../../components/0.1_header";
import {payment} from "../../redux/action/studentT"
import { connect } from "react-redux";
const Payments = ({payment,paymentsInfo}) => {
  const payments = [
    {
      titale: "tueetion fee",
      date: Date(),
      amount: "200",
    },
    {
      titale: "bus fee",
      date: Date(),
      amount: "600",
    },
    {
      titale: "library fee",
      date: Date(),
      amount: "1900",
    },
  ];


  useEffect(()=>{
    payment();
  },[payment])

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <div className="flex gap-6 flex-col h-full justify-center items-center">
        <p className="text-4xl font-sans font-bold">Student Payments</p>

        <div className=" flex flex-row w-3/4 bg-gray-200 shadow-lg border-2 border-gray-200 rounded-md  p-5 gap-10 ">
          <table className="w-full">
            <tbody className="w-full flex flex-col gap-5 ">
              <thead>Payments Info</thead>
              <tr className="flex flex-row gap-10">
                {" "}
                <th className="w-full">Titale</th>
                <th className="w-full">Amount</th>
                <th className="w-full">Date</th>
              </tr>

              {paymentsInfo?paymentsInfo.map((item, index) => (
                <tr key={index} className="flex flex-row gap-10">
                  <td className="w-full"> {item.titale}</td>
                  <td className="w-full">{item.amount}</td>
                  <td className="w-full">{item.date}</td>
                </tr>
              )):<>no data</>}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mstp=(state)=>{
  return{
    paymentsInfo:state.StudentR.paymentsInfo,
  }
}
export default connect(mstp,{payment}) (Payments);

