import React from 'react'

function Student() {
  return (
    <div className="">
    <div className="px-20 sm:px-3 py-[40px] grid grid-flow-col bg-[#00BEFF]">
      <div className="m-auto">
        <h4 className="text-[#262626] text-[32px] font-bold leading-[41.6px]">
          Students
        </h4>
        <p className="text-[#262626] text-[17px] font-light leading-[20px] pt-[20px]">
          Important news, links, documents, and tips for students of the
          University of Stuttgart: <br /> This page offers information
          on your studies.
        </p>

        <div className="sm:flex gap-10 mt-2 hidden">
          <div className="pt-2">
            <svg
              height="24px"
              width="24px"
              version="1.1"
              id="_x32_"
              viewBox="0 0 512 512"
              fill="#000"
            >
              <g>
                <polygon
                  class="st0"
                  points="419.916,71.821 348.084,0 92.084,256.005 348.084,512 419.916,440.178 235.742,256.005  "
                />
              </g>
            </svg>
          </div>
          <p className="text-center font-semibold">
            Information for <br /> prospective students
          </p>
        </div>
      </div>
<div className="group">
<div className="bg-[#333333]  group-hover:bg-white sm:hidden py-20 relative -bottom-16 text-white text-[14px] leading-[18.2px] w-[270px] h-[270px] rounded-[50%] ">
        <div className="flex gap-20 flex-col ">
          <p className="text-center text-[14px] group-hover:text-[#333333] leading-[18.2px] font-semibold">
            Information for <br /> prospective students
          </p>

          <div className="m-auto ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              viewBox="0 0 64 64"
              stroke-width="3"
              stroke="#fff"
              fill="#333333"
            >
              <polyline points="18.86 57.47 44.12 30.84 18.86 6.58" />
            </svg>
          </div>
        </div>
      </div>
</div>
     
    </div>
  </div>
  )
}

export default Student