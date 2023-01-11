import React from 'react'

function Information() {
  return (
    <div className="bg-[#004797] py-[40px] ">
    <div className="px-20 sm:px-3">
      <h3 className="text-[26px] sm:leading-[33.8px] leading-[33px] text-[#ffffff] my-[30px] font-bold">
      Information for students
      </h3>

      <div className="grid sm:flex sm:flex-col grid-cols-2 gap-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((item) => {
          return (
            <div>
              <div className="flex items-center sm:gap-12 gap-6">
                <div className="w-[130px] sm:h-[100px] hover:bg-white flex h-[130px] border-2 border-solid border-white rounded-[50%]">
                  <div className="m-auto hover:bg-black ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 64 64"
                      stroke-width="3"
                      stroke="#fff"
                      fill="#004797"
                    >
                      <polyline points="18.86 57.47 44.12 30.84 18.86 6.58" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-[#ffffff] sm:leading-[20.8px] font-bold text-[22px] leading-[28.6px]">
                    All study programs
                  </h2>
                  <p className="leading-[25.6px] sm:leading-[25.6px] font-light text-white">
                    On the webpages of your degree program <br /> you
                    will find information on the study pro <br /> gram
                    structure, …
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </div>

  )
}

export default Information