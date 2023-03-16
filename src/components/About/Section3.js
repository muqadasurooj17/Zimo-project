import React from 'react'

function Section3() {
  return (
<div className="mb-5">
  <div className="container mx-auto px-4 mt-10">
      <div className="mb-4 text-lg tracking-widest">
      <span>OUR CATOGRIES</span>
      </div>
    <div className="grid lg:grid-cols-4 gap-4 mt-10">
      <div className="relative rounded overflow-hidden">
        <img
          className="w-80"
          src="assets/realestate.png"
          alt=""
        />
        <div className="absolute px-6">
          <p className="absolute text-white text-sm bottom-2 px-24 uppercase tracking-widest">REALESTAE</p>
        </div>
      </div>
      <div className="relative rounded overflow-hidden">
        <img
          className="w-80 h-68"
          src="assets/yat.png"
          alt=""
        />
        <div className="absolute px-6">
          <p className="absolute text-white text-sm bottom-2 px-28 uppercase tracking-widest">YATCHS</p>
        </div>
      </div>
      <div className="relative rounded overflow-hidden">
        <img
          className="w-80"
          src="Assets/Car.png"
          alt=""
        />
        <div className="absolute px-6">
          <p className="absolute text-white bottom-2 px-28 uppercase">Cars</p>
        </div>
      </div>
      <div className="relative rounded overflow-hidden">
        <img
          className="w-80"
          src="assets/Rectangle 944.png"
          alt=""
        />
        <div className="absolute px-6">
          <p className="absolute text-white bottom-2 px-28">WATCHES</p>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-center flex-col mt-10">
     <h1 className='text-3xl tracking-widest uppercase'>our platform for all preminum listings</h1>
     <div className="mt-5">
      <h2 className='text-2xl tracking-widest uppercase font-light'>Unlimited potentials</h2>
     </div>
    </div>
  </div>
  </div>
  )
}

export default Section3