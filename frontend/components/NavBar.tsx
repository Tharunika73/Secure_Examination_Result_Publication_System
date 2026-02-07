import React from "react";
import Image from "next/image";
export default function NavBar() {
  return (
    <div className="bg-white flex min-h-screen flex-col text-black ml-right inder-regular">
      <div className="bg-[#D2E2AE] w-full h-[65px] flex items-center">
        <h1 className="md:text-2xl font-bold text-[#484F24] ml-3">Examination Results</h1>
        {/* <h1 className="md:text-2xl font-bold text-[#484F24] ml-10"></h1> */}
        <div className="bg-[#D2E2AE] w-auto h-[65px] items-center flex ml-auto mr-10 text-[#484F24] ">
        <h1>Student Profile </h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;View Result </h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;Re-Evaluation</h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;Hall Ticket</h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;Lab Marks</h1>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;Settings</h1>
      </div>
      </div>
      <div className="bg-black w-full h-full ">
        <div className="bg-white w-[700px] h-[520px] flex items-center justify-center ml-auto mr-auto mt-20">

        </div>
      <p>Welcome to the Website</p>

      </div>
    </div>
  );
}
