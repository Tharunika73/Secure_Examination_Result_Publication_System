import React from "react";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-white flex min-h-screen flex-col text-black ml-right inder-regular">
      <div className="bg-[#D2E2AE] w-full h-[70px] flex items-center">
        <h1 className="md:text-2xl font-bold text-[#484F24] ml-3">Examination Results</h1>
        {/* <h1 className="md:text-2xl font-bold text-[#484F24] ml-10"></h1> */}
        <div className="bg-[#D2E2AE] w-auto h-[70px] items-center flex ml-auto mr-10 ">
        <h1>Student Profile </h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;View Result </h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;Re-Evaluation</h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;Hall Ticket</h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;Lab Marks</h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;Settings</h1>
      </div>
      </div>
      
      {/* <p>Welcome to the App</p> */}
    </div>
  );
}
