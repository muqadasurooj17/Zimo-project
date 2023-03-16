import React from 'react'

function Section4() {
  return (
    <div className="p-8 mb-5">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-start justify-center flex-col m-10">
          <img className="w-80" src="assets/Group 4758.png" alt="" />
          <div className="mt-5 mb-5">
            <span className='text-lg uppercase tracking-widest '>One Sources</span>
            <h1 className='text-4xl uppercase tracking-widest mt-4'>Entry Tickets</h1>
            <p  className='text-sm uppercase tracking-widest mt-4'>For All Premium Listing</p>
          </div>
        </div>
        <div>
          <img className="rounded-md " src="Assets/Property 1821.jpg" alt="" />
          <div className="text-center mt-3">
            <span className='text-2xl tracking-widest uppercase'>Lets your Dreams find you</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section4