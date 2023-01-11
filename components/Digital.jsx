import React from 'react'

function Digital() {
  return (
    <div className="bg-white sm:px-3 px-20 pb-20 flex flex-col ">
    <div className="grid sm:grid-flow-row grid-flow-col gap-8">
      {[1, 2, 3].map((item) => {
        return (
          <div>
            <img
              src="https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_118.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335"
              alt=""
            />
            <h3 className="text-[#333333] text-[18px] font-bold leading-[25.2px] my-4">
              Digital services
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center hover:underline  font-bold gap-2 text-[#004191] leading-[19.2px] mb-1">
                {" "}
                <img
                  className="w-[24px] h-[24px]"
                  src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                  alt=""
                />{" "}
                C@MPUS - campus management and lectures
              </li>
              <li className="flex mb-1 items-center hover:underline  font-bold gap-2 text-[#004191] leading-[19.2px]">
                {" "}
                <img
                  className="w-[24px] h-[24px]"
                  src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                  alt=""
                />{" "}
                How to C@MPUS
              </li>
              <li className="flex mb-1 items-center hover:underline  font-bold gap-2 text-[#004191] leading-[19.2px]">
                {" "}
                <img
                  className="w-[24px] h-[24px]"
                  src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                  alt=""
                />{" "}
                ILIAS
              </li>
              <li className="flex mb-1 items-center hover:underline  font-bold gap-2 text-[#004191] leading-[19.2px]">
                {" "}
                <img
                  className="w-[24px] h-[24px]"
                  src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                  alt=""
                />
                University library
              </li>
              <li className="flex mb-1 items-center hover:underline  font-bold gap-2 text-[#004191] leading-[19.2px]">
                {" "}
                <img
                  className="w-[24px] h-[24px]"
                  src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                  alt=""
                />
                E-mail
              </li>
              <li className="flex mb-1 items-center hover:underline  font-bold gap-2 text-[#004191] leading-[19.2px]">
                {" "}
                <img
                  className="w-[24px] h-[24px]"
                  src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                  alt=""
                />
                Further digital services
              </li>
            </ul>
          </div>
        );
      })}
    </div>
    <button className="bg-[#004191] hover:bg-black font-bold mt-20 mx-auto text-[13px] leading-[16.9px] text-white text-center py-[16px] px-[35px]">
      STUDY PROGRAMS'S WEBPAGES FOR STUDENTS{" "}
    </button>
  </div>
  )
}

export default Digital