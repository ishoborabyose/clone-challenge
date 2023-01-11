import React from 'react'

function Begriff() {
  return (
    <div className=" bg-white sm:px-3 px-52 py-20">
    <div>
      <div className="bg-[#eeeeee] flex flex-col p-[16px] mb-[24px]">
        <h6 className="text-[#333333] leading-[20.8px] my-[5px]">
          BEGRIFF
        </h6>
        <input
          className="bg-[#ffffff] text-[#555555] text-[14px] leading-[20px] mb-[15px] py-[14px] px-[12px]"
          placeholder="Suchen Sie nach Begriffen aus dem Uni-Glossar "
        />
        <button className="bg-[#004191] hover:bg-black mr-auto text-[13px] leading-[16.9px] text-white text-center py-[16px] px-[35px]">
          BEGRIFF Suchen
        </button>
      </div>
    </div>
  </div>
  )
}

export default Begriff