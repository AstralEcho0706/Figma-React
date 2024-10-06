import React from "react";

function Introduction() {
  return (
    <div
      className="w-full pt-[155px] pl-[151px] pr-[158px] pb-[153px] flex text-white"
      style={{
        backgroundImage: "url('/group-3.svg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="mr-[20px]">
        <div className="font-bold text-[109px]">Earthrive</div>
        <div className="text-[27px]">
          We provide and support farmers with customized fertigation and foliar
          spray nutritional programs and strategies that boost crops to their
          maximum potential.
        </div>
        <div className="mt-[42px]">
          <button className="bg-green-400 w-[251px] h-[68px] rounded-xl font-bold text-[24px]">
            OUR RESULTS
          </button>
        </div>
      </div>
      <div>
        <div className="w-[468px] h-[281px] border-2 border-blue-400 bg-[#00000080] rounded-xl"></div>
      </div>
    </div>
  ); /* Rectangle 2 */
} /* Earthrive */

export default Introduction;
