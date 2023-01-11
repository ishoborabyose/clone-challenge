import Head from "next/head";
import Navbar from "../components/Navbar";
import Wrapper from "../components/wrappers/Wrapper";

export default function Home() {
  return (
    <>
      <Head>
        <title>www.student.uni-stuttgart.de</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Wrapper>
          <Navbar />

          <div>
            <div className="px-20 py-6 grid grid-flow-col bg-[#00BEFF]">
              <div>
                <h4 className="text-[#262626] text-[32px] leading-[]41.6px">
                  Students
                </h4>
                <p className="text-[#262626] text-[17px] leading-[20px] pt-[20px]">
                  Important news, links, documents, and tips for students of the
                  University of Stuttgart: This page offers information on your
                  studies.
                </p>
              </div>

              <div className="bg-[#333333] py-20 relative -bottom-10 text-white text-[14px] leading-[18.2px] w-[270px] h-[270px] rounded-[50%] ">
                <div className="flex gap-20 flex-col ">
                  <p className="text-center font-semibold">
                    Information for <br /> prospective students
                  </p>

                  <div className="m-auto">
                    <svg
                      height="24px"
                      width="24px"
                      version="1.1"
                      id="_x32_"
                      viewBox="0 0 512 512"
                      fill="#fff"
                    >
                      <g>
                        <polygon
                          class="st0"
                          points="419.916,71.821 348.084,0 92.084,256.005 348.084,512 419.916,440.178 235.742,256.005  "
                        />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-white px-40 py-20">
            <div className="bg-[#eeeeee] flex flex-col p-[12px] mb-[24px]">
              <h6 className="text-[#333333] leading-[20.8px] my-[5px]">
                BEGRIFF
              </h6>
              <input
                className="bg-[#ffffff] text-[#555555] text-[14px] leading-[20px] mb-[15px] py-[14px] px-[12px]"
                placeholder="Suchen Sie nach Begriffen aus dem Uni-Glossar "
              />
              <button className="bg-[#004191] mr-auto text-[13px] leading-[16.9px] text-white text-center py-[16px] px-[35px]">
                BEGRIFF Suchen
              </button>
            </div>
          </div>

          <div className="bg-white px-20 pb-20 flex flex-col ">
            <div className="grid grid-flow-col gap-8">
              {[1, 2, 3].map((item) => {
                return (
                  <div>
                    <img
                      src="https://www.student.uni-stuttgart.de/img/easydb-2019_11_20_Unitag_118.jpg?__scale=w:370,h:370,cx:332,cy:0,cw:1335,ch:1335"
                      alt=""
                    />
                    <h3 className="text-[#333333] text-[18px] leading-[25.2px] my-2">
                      Digital services
                    </h3>
                    <ul>
                      <li className="flex items-center gap-2 text-[#004191] leading-[19.2px] mb-1">
                        {" "}
                        <img
                          className="w-[24px] h-[24px]"
                          src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                          alt=""
                        />{" "}
                        C@MPUS - campus management and lectures
                      </li>
                      <li className="flex mb-1 items-center gap-2 text-[#004191] leading-[19.2px]">
                        {" "}
                        <img
                          className="w-[24px] h-[24px]"
                          src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                          alt=""
                        />{" "}
                        How to C@MPUS
                      </li>
                      <li className="flex mb-1 items-center gap-2 text-[#004191] leading-[19.2px]">
                        {" "}
                        <img
                          className="w-[24px] h-[24px]"
                          src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                          alt=""
                        />{" "}
                        ILIAS
                      </li>
                      <li className="flex mb-1 items-center gap-2 text-[#004191] leading-[19.2px]">
                        {" "}
                        <img
                          className="w-[24px] h-[24px]"
                          src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                          alt=""
                        />
                        University library
                      </li>
                      <li className="flex mb-1 items-center gap-2 text-[#004191] leading-[19.2px]">
                        {" "}
                        <img
                          className="w-[24px] h-[24px]"
                          src="https://www.svgrepo.com/show/447557/arrow-right.svg"
                          alt=""
                        />
                        E-mail
                      </li>
                      <li className="flex mb-1 items-center gap-2 text-[#004191] leading-[19.2px]">
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
            <button className="bg-[#004191] mt-20 mx-auto text-[13px] leading-[16.9px] text-white text-center py-[16px] px-[35px]">
              STUDY PROGRAMS'S WEBPAGES FOR STUDENTS{" "}
            </button>
          </div>

          <div className="bg-[#333333] py-[40px] ">
            <div className="px-20">
              <h3 className="text-[26px] leading-[33px] text-[#ffffff] my-[30px] font-bold">
                NEWS AND EVENT
              </h3>
              <div className="grid gap-8 grid-cols-3">
                <div className="py-[30px] w-[303px] h-[205px] px-[20px] bg-white">
                  <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
                    Newsticker: Information on the coronavirus
                  </p>
                  <span className="text-[#262626] text-[15px] leading-[19.5px]">
                    Article | 11/10/22
                  </span>
                </div>

                <div className=" ">
                  <img
                    src="https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720"
                    alt=""
                  />
                  <div className="py-[30px] px-[20px] bg-white">
                    <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
                      Latest episode: "Intelligent systems will help us in
                      crises and in the future"
                    </p>
                    <span className="text-[#262626] text-[15px] leading-[19.5px]">
                      Video | YouTube
                    </span>
                  </div>{" "}
                </div>
                <div className="">
                  <img
                    src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
                    alt=""
                  />
                  <div className="py-[30px] px-[20px] bg-white">
                    <p className="text-[#262626] text-[15px] leading-[19.5px] mb-[15px]">
                      Everyone feels sometimes stressed during their studies.
                      But what can you do against it? Constanza has a few tips.
                    </p>
                    <span className="text-[#262626] text-[15px] leading-[19.5px]">
                      USUS blog | 1/4/23
                    </span>
                  </div>{" "}
                </div>
                <div className="py-[30px] w-[303px] h-[205px] -mt-48 px-[20px] bg-white">
                  <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
                    Newsticker: Information on the coronavirus
                  </p>
                  <span className="text-[#262626] text-[15px] leading-[19.5px]">
                    Article | 11/10/22
                  </span>
                </div>
                <div className=" bg-white py-[30px] px-[20px]">
                  <img
                    className="rounded-[50%] m-auto w-[200px] h-[200px]"
                    src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
                    alt=""
                  />
                  <div className="py-[30px] px-[20px] bg-white">
                    <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
                      Energy savings in November
                    </p>
                    <span className="text-[#262626] text-[15px] leading-[19.5px]">
                      Article | 12/15/22
                    </span>
                  </div>{" "}
                </div>
                <div className=" bg-white py-[30px] px-[20px]">
                  <img
                    className="rounded-[50%] m-auto w-[200px] h-[200px]"
                    src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
                    alt=""
                  />
                  <div className="py-[30px] px-[20px] bg-white">
                    <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
                      Energy savings in November
                    </p>
                    <span className="text-[#262626] text-[15px] leading-[19.5px]">
                      Article | 12/15/22
                    </span>
                  </div>{" "}
                </div>

                <div className=" bg-white py-[30px] h-[472px] w-[303] -mt-96 px-[20px]">
                  <img
                    className="rounded-[50%] m-auto w-[200px] h-[200px]"
                    src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
                    alt=""
                  />
                  <div className="py-[30px] px-[20px] bg-white">
                    <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
                      The University of Stuttgart's five most beautiful
                      Instagram pictures
                    </p>
                    <span className="text-[#262626]  text-[15px] leading-[19.5px]">
                      Article | 12/21/22
                    </span>

                    <span className="text-[#262626]  text-[15px] leading-[19.5px]">
                      Photo: Addictive Stock / photocase.de
                    </span>
                  </div>{" "}
                </div>

                <div className=" bg-white py-[30px] px-[20px]">
                  <img
                    className="rounded-[50%] m-auto w-[200px] h-[200px]"
                    src="https://www.usus.uni-stuttgart.de/img/2022/stressed-student.jpg?__scale=w:560,h:400,cx:67,cy:0,cw:1866,ch:1333"
                    alt=""
                  />
                  <div className="py-[30px] px-[20px] bg-white">
                    <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
                      Energy savings in November
                    </p>
                    <span className="text-[#262626] text-[15px] leading-[19.5px]">
                      Article | 12/15/22
                    </span>
                  </div>{" "}
                </div>
                <div className="py-[30px] w-[303px] h-[205px] px-[20px] bg-white">
                  <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
                    Newsticker: Information on the coronavirus
                  </p>
                  <span className="text-[#262626] text-[15px] leading-[19.5px]">
                    Article | 11/10/22
                  </span>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-10">
              <button className="bg-[#333333] border-2 border-white mt-20  text-[13px] leading-[16.9px] text-white text-center py-[16px] px-[35px]">
                ALL EVENTS{" "}
              </button>

              <button className="bg-[#333333] border-2 border-white mt-20  text-[13px] leading-[16.9px] text-white text-center py-[16px] px-[35px]">
                ALL EVENTS{" "}
              </button>
            </div>
          </div>

          <div className="bg-[#004797] py-[40px] ">
            <div className="px-20">
              <h3 className="text-[26px] leading-[33px] text-[#ffffff] my-[30px] font-bold">
                NEWS AND EVENT
              </h3>
             
                    <div className="grid grid-cols-2 gap-10">
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                        (item) => {
                          return (
                            <div>
                              <div className="flex items-center gap-6">
                                <div className="w-[130px] flex h-[130px] border-2 border-solid border-white rounded-[50%]">
                                  <div className="m-auto">
                                    <svg
                                      height="24px"
                                      width="24px"
                                      version="1.1"
                                      id="_x32_"
                                      viewBox="0 0 512 512"
                                      fill="#fff"
                                    >
                                      <g>
                                        <polygon
                                          class="st0"
                                          points="419.916,71.821 348.084,0 92.084,256.005 348.084,512 419.916,440.178 235.742,256.005  "
                                        />
                                      </g>
                                    </svg>
                                  </div>
                                </div>
                                <div>
                                  <h2 className="text-[#ffffff] font-bold text-[22px] leading-[28.6px]">
                                    All study programs
                                  </h2>
                                  <p className="leading-[25.6px] font-light text-white">
                                    On the webpages of your degree program <br /> you
                                    will find information on the study pro <br/> gram
                                    structure, …
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
               
            </div>

           
          </div>


          <div className="bg-[#fff] py-[40px] ">
            <div className="px-20">
              <h3 className="text-[26px] leading-[33px] text-[#000] my-[30px] font-bold">
                Contact
              </h3>
             
                    <div className="grid grid-flow-col gap-8">
                      {[1, 2, 3, ].map(
                        (item) => {
                          return (
                            <div>
                               <div className="border-2 flex flex-col border-solid border-[#333333] p-[30px]">
                                <img className="w-[150px] h-[150px] mx-auto"  src="https://www.uni-stuttgart.de/studium/beratung/img-fachstudienberater/zsb_employee.jpg?__scale=w:150,h:150,cx:0,cy:0,cw:620,ch:620" alt="" />
                                <div className="space-y-3">
                                  <h1 className="text-[#333333] font-bold text-[22px] leading-[28.6px] mt-[5px] mb-[2px]">Dezernat Internationales</h1>

                                  <div className="flex items-center gap-1">
                                    <img className="w-[24px] h-[24px]" src="https://www.svgrepo.com/show/431202/profile.svg" alt="" />
                                    <span className="text-[#333333] border-b border-b-[#333333] leading-[25.6px] font-light">Profile page</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <img className="w-[24px] h-[24px]" src="https://www.svgrepo.com/show/475855/phone.svg" alt="" />
                                    <span className="text-[#333333] border-b border-b-[#333333] leading-[25.6px] font-light">+49 711 685 68566</span>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <img className="w-[24px] h-[24px]" src="https://www.svgrepo.com/show/453596/email.svg" alt="" />
                                    <span className="text-[#333333] border-b border-b-[#333333] leading-[25.6px] font-light">Write e-mail</span>
                                  </div>

                                  <div className="flex items-center gap-1">
                                    <img className="w-[24px] h-[24px]" src="https://www.svgrepo.com/show/447016/information.svg" alt="" />
                                    <p className="text-[#333333] leading-[25.6px] font-light">
                                      <span className="text-[#333333] border-b border-b-[#333333] leading-[25.6px] font-light">
                                      Office hours (online)
                                      </span>
                                    : Mon & Wed 10 a.m. to noon; Office hours (on site): Mon & Wed, 2 p.m. to 4 p.m. , Tue & Thur, 10 a.m. to noon
                                    </p>
                                  </div>
                                  
                                </div>
                              </div>
                            </div>
                          );
                        }
                      )}
                    </div>
               
            </div>

           
          </div>

          <div className="bg-[#333333] px-20 py-[40px]">

            <div className="flex justify-between">
              <img className="w-[218px] h-[44px]" src="https://www.student.uni-stuttgart.de/system/modules/de.stuttgart.uni.v3.basics/resources/img/svg/logo-inverted-en.svg" alt="" />
              <div className="flex gap-6">
                {
                  ["https://www.svgrepo.com/show/434380/facebook.svg", "https://www.svgrepo.com/show/434380/facebook.svg","https://www.svgrepo.com/show/434380/facebook.svg","https://www.svgrepo.com/show/434380/facebook.svg","https://www.svgrepo.com/show/434380/facebook.svg","https://www.svgrepo.com/show/434380/facebook.svg","https://www.svgrepo.com/show/434380/facebook.svg", ].map((item) =>{
                    return(
                      <div>
                         <div className="pb-[30px] leading-[25px] text-white font-light">
                          <img className="bg-[#333333] border-2 border-white rounded-[50%] h-[70px] w-[70px] p-4" src={item} alt="" />
                          <span>Facebook</span>
                         </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          <div className="flex justify-between">
            {
              [1,2,3,4].map((item) => {
                return(
                
                    <ul>
                     
                       <li className="font-bold leading-[20.8px] text-white mt-[20px] mb-[15px]"> Audience</li>
                       <li className="leading-[25.6px] text-white font-light border-b border-b-white"> Students</li>
                       <li  className="leading-[25.6px] text-white font-light border-b border-b-white">Employees</li>
                       <li  className="leading-[25.6px] text-white font-light border-b border-b-white">Alumni and supporters</li>
                       <li  className="leading-[25.6px] text-white font-light border-b border-b-white">Industry</li>
                      
                    </ul>
                )
              })
            }
          </div>
          </div>
        </Wrapper>
      </>
    </>
  );
}