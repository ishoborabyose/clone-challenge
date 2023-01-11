import React from 'react'

function wrapper({ children, styles }) {
  return (
    <section className='bg-[#DDDDDD] '>
          <div className={`max-w-6xl px-3 mx-auto ${styles}`}>
          {children}
          </div>
    </section>
  )
}

export default wrapper