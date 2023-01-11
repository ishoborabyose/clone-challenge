import React from 'react'

function Contact() {
  return (
    <div className="bg-[#fff] py-[40px] ">
    <div className="px-20 sm:px-3">
      <h3 className="text-[22px] leading-[28px] mb-[15px] text-[#333333] my-[30px] font-bold">
        Contact
      </h3>

      <div className="grid sm:grid-flow-row grid-flow-col gap-8">
        {[1, 2, 3].map((item) => {
          return (
            <div>
              <div className="border-2 flex flex-col  border-solid border-[#333333] p-[30px]">
                <img
                  className="w-[150px] h-[150px] mx-auto"
                  src="https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620"
                  alt=""
                />

                <div className="space-y-4 mt-10">
                  <h1 className="text-[#333333] font-bold text-[22px] leading-[28.6px] mt-[5px] mb-[2px]">
                    Dezernat Internationales
                  </h1>

                  <div className="flex mt-[10px] items-center gap-2">
                    <img
                      className="w-[24px] h-[24px]"
                      src="https://www.svgrepo.com/show/431202/profile.svg"
                      alt=""
                    />
                    <span className="text-[#333333] border-b border-b-[#333333] leading-[25.6px] font-light">
                      Profile page
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-[24px] h-[24px]"
                      src="https://www.svgrepo.com/show/475855/phone.svg"
                      alt=""
                    />
                    <span className="text-[#333333] border-b border-b-[#333333] leading-[25.6px] font-light">
                      +49 711 685 68566
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <img
                      className="w-[24px] h-[24px]"
                      src="https://www.svgrepo.com/show/453596/email.svg"
                      alt=""
                    />
                    <span className="text-[#333333] border-b border-b-[#333333] leading-[25.6px] font-light">
                      Write e-mail
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <img
                      className="w-[24px] h-[24px] -mt-24"
                      src="https://www.svgrepo.com/show/447016/information.svg"
                      alt=""
                    />
                    <p className="text-[#333333] leading-[25.6px] font-light">
                      <span className="text-[#333333] border-b border-b-[#333333] leading-[25.6px] font-light">
                        Office hours (online)
                      </span>
                      : Mon & Wed 10 a.m. to noon; Office hours (on
                      site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur,
                      10 a.m. to noon
                    </p>
                  </div>
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

export default Contact