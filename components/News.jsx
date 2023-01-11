import React from 'react'

function News() {
  return (
    <div className="bg-[#333333] group py-[40px] ">
    <div className="px-20 sm:px-3">
      <h3 className="text-[26px] leading-[33px] text-[#ffffff] my-[30px] font-bold">
        NEWS AND EVENT
      </h3>
      <div className="grid group gap-8 sm:flex sm:flex-col grid-cols-3">
        <div className="py-[30px] group-hover:bg-[#60b1f3]  sm:w-[310px] w-[303px] h-[205px] sm:px-3 px-[20px] bg-white">
          <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
            Newsticker: Information on the coronavirus
          </p>
          <span className="text-[#262626] text-[15px] leading-[19.5px]">
            Article | 11/10/22
          </span>
        </div>

        <div className="group-hover:bg-[#60b1f3]  ">
          <img
            src="https://www.uni-stuttgart.de/universitaet/aktuelles/img/IRGE_Uni-Stuttgart_HdK_Rote-Stadtbalkone_Cansu-Coban_Paul-Menz.jpg?__scale=w:320,h:320,cx:0,cy:0,cw:2000,ch:2000"
            alt=""
          />
          <div className="py-[30px] group-hover:bg-[#60b1f3] sm:w-[310px]  sm:px-3 px-[20px] bg-white">
            <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
              Latest episode: "Intelligent systems will help us in
              crises and in the future"
            </p>
            <span className="text-[#262626] text-[15px] leading-[19.5px]">
              Video | YouTube
            </span>
          </div>{" "}
        </div>

        <div className="group-hover:bg-[#60b1f3] ">
          <img
            src="https://www.uni-stuttgart.de/universitaet/aktuelles/video/img-video-vorschaubilder/24A_1280x720.jpg?__scale=w:560,h:400,cx:136,cy:0,cw:1008,ch:720"
            alt=""
          />
          <div className="py-[30px] hover:bg-[#60b1f3] px-[20px] bg-white">
            <p className="text-[#262626] text-[15px] leading-[19.5px] mb-[15px]">
              Everyone feels sometimes stressed during their studies.
              But what can you do against it? Constanza has a few tips.
            </p>
            <span className="text-[#262626] text-[15px] leading-[19.5px]">
              USUS blog | 1/4/23
            </span>
          </div>{" "}
        </div>

        <div className=" bg-white h-[450px] -mt-64 sm:mt-0  pt-[30px] group-hover:bg-[#60b1f3] px-[20px]">
          <img
            className="rounded-[50%] m-auto "
            src="https://www.simtech.uni-stuttgart.de/img/Sim_Tech_Folge_03_Szene_27.jpg?__scale=w:220,h:220,cx:262,cy:26,cw:1073,ch:1073"
            alt=""
          />
          <div className="py-[30px] hover:bg-[#60b1f3]   px-[20px] bg-white">
            <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
              Energy savings in November
            </p>
            <span className="text-[#262626] text-[15px] leading-[19.5px]">
              Article | 12/15/22
            </span>
          </div>{" "}
        </div>
        <div className=" sm:hidden bg-white py-[30px] group-hover:bg-[#60b1f3]  px-[20px]">
          <img
            className="rounded-[50%] m-auto w-[200px] h-[200px]"
            src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/instagram.jpg?__scale=w:220,h:220,cx:333,cy:0,cw:1333,ch:1333"
            alt=""
          />
          <div className="py-[30px] hover:bg-[#60b1f3]  px-[20px] bg-white">
            <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
              Energy savings in November
            </p>
            <span className="text-[#262626] text-[15px] leading-[19.5px]">
              Article | 12/15/22
            </span>
          </div>{" "}
        </div>

        <div className=" sm:hidden py-[30px] w-[303px] group-hover:bg-[#60b1f3] -mt-20  h-[205px] px-[20px] bg-white">
          <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
            Newsticker: Information on the coronavirus
          </p>
          <span className="text-[#262626] text-[15px] leading-[19.5px]">
            Article | 11/10/22
          </span>
        </div>

        <div className=" sm:hidden bg-white py-[30px] group-hover:bg-[#60b1f3] -mt-48  h-[472px] w-[303]  px-[20px]">
          <img
            className="rounded-[50%] m-auto w-[200px] h-[200px]"
            src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000"
            alt=""
          />
          <div className="py-[30px] hover:bg-[#60b1f3]  px-[20px] bg-white">
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

        <div className=" sm:hidden bg-white py-[30px] group-hover:bg-[#60b1f3]   h-[472px] w-[303]  px-[20px]">
          <img
            className="rounded-[50%] m-auto w-[200px] h-[200px]"
            src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/photocase_4910444.jpg?__scale=w:220,h:220,cx:0,cy:871,cw:2000,ch:2000"
            alt=""
          />
          <div className="py-[30px] group-hover:bg-[#60b1f3]  px-[20px] bg-white">
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

        <div className=" sm:hidden bg-white py-[30px] group-hover:bg-[#60b1f3] -mt-64 h-[540px]  px-[20px]">
          <img
            className="rounded-[50%] m-auto "
            src="https://www.uni-stuttgart.de/universitaet/aktuelles/meldungen/img-news/diversity-kalender.JPG?__scale=w:220,h:220,cx:170,cy:0,cw:832,ch:832"
            alt=""
          />
          <div className="py-[30px] group-hover:bg-[#60b1f3]  px-[20px] bg-white">
            <p className="text-[#262626] text-[22px] leading-[28.6px] mb-[15px]">
              Energy savings in November
            </p>
            <span className="text-[#262626] text-[15px] leading-[19.5px]">
              Article | 12/15/22
            </span>
          </div>{" "}
        </div>
      </div>
    </div>

    <div className="flex justify-center sm:gap-4 gap-10">
      <button className="bg-[#333333] border-2 border-white mt-20  text-[13px] leading-[16.9px] text-white text-center py-[16px] px-[35px]">
        ALL EVENTS{" "}
      </button>

      <button className="bg-[#333333] border-2 border-white mt-20  text-[13px] leading-[16.9px] text-white text-center py-[16px] px-[35px]">
        ALL EVENTS{" "}
      </button>
    </div>
  </div>
  )
}

export default News