import React from 'react'


function Navbar() {
  return (
    <section>
      <div className=''>
		<div className='py-1 flex text-[12px]   sm:px-10 px-20 bg-[#004191] leading-[15.6px] items-center gap-2 text-white justify-end'>
          <span className='sm:hidden'>University of Stuttgart</span>
		  <div className='sm:hidden'>
		  <svg width="24px" height="24px" viewBox="0 0 17 17" version="1.1">
	<path d="M6.854 4.146l4.353 4.354-4.354 4.354-0.707-0.707 3.647-3.647-3.647-3.646 0.708-0.708zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z" fill="#fff"/>
</svg>
		  </div>
           
		   <div className='flex  '>
			<div className='flex gap-2 items-center sm:pr-52'>
			<span className='hidden lg:block'>Un</span>
		  <div className='hidden lg:block'>
		  <svg width="14px" height="14px" viewBox="0 0 17 17" version="1.1">
	<path d="M6.854 4.146l4.353 4.354-4.354 4.354-0.707-0.707 3.647-3.647-3.647-3.646 0.708-0.708zM17 8.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5 3.813-8.5 8.5-8.5 8.5 3.813 8.5 8.5zM16 8.5c0-4.136-3.364-7.5-7.5-7.5s-7.5 3.364-7.5 7.5 3.364 7.5 7.5 7.5 7.5-3.364 7.5-7.5z" fill="#fff"/>
</svg>
		  </div>
			</div>
			<div>
             <div className='hidden sm:flex'>
				<img className='w-[24px] h-[24px] border-r border-r-white mr-2' src="/images/Capture 1.PNG" alt="" />
				<div>
				<svg className='' fill="#fff" width="24px" height="24px" viewBox="0 0 32 32" version="1.1">
<title>search</title>
<path d="M30.531 29.469l-10.453-10.453c1.604-1.861 2.58-4.301 2.58-6.97 0-5.912-4.793-10.704-10.704-10.704s-10.704 4.793-10.704 10.704c0 5.912 4.793 10.704 10.704 10.704 0.016 0 0.032-0 0.048-0h-0.002c2.697-0.011 5.156-1.022 7.027-2.681l-0.011 0.010 10.453 10.453c0.136 0.136 0.324 0.22 0.531 0.22 0.415 0 0.751-0.336 0.751-0.751 0-0.207-0.084-0.395-0.22-0.531v0zM2.75 12c0-5.109 4.141-9.25 9.25-9.25s9.25 4.141 9.25 9.25c0 5.109-4.141 9.25-9.25 9.25v0c-5.106-0.006-9.244-4.144-9.25-9.249v-0.001z"/>
</svg>
				</div>
			 </div>
			</div>
		   </div>

        </div> 
      </div>
	
    </section>
  )
}

export default Navbar