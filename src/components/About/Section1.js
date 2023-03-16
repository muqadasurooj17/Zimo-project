import React from "react";

function Section1() {
  return (
    <div className="section1-img h-screen">
      <div className="container mx-auto px-6 pt-5">
        <div className="grid   grid-cols-3 gap-4">
          <div className="flex items-baseline justify-baseline">
            <img className="w-7 " src="assets/Group 3055.png" alt="" />
            &nbsp; &nbsp;
            <img className="w-20" src="assets/Group 3326.png" alt="" />
            &nbsp; &nbsp;
            <p className="text-xs text-white">About</p>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-20  md:block hidden"
              src="Assets/Group 4812.png"
              alt=""
            />
          </div>
          <div>
            <div className="flex items-end justify-end flex-col">
              <img className="w-96" src="assets/Group 4723.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[2rem] mt-16 flex">
      <img className="w-5 h-4 mt-1" src="assets/Path 7815.png" alt="" />
        &nbsp;
        &nbsp;
        <div className="text-white uppercase tracking-widest">BACK</div>
      </div>

      <div className="discover pt-[10rem]" data-aos="zoom-in">
        <div className="text-white text-3xl md:text-3xl uppercase tracking-widest ml-[2rem] mb-3">Discover</div>
        <div className="text-white text-3xl md:text-5xl uppercase tracking-widest ml-[2rem] mb-3">A NEW WORLD</div>
        <div className="ml-[2rem] text-sm md:text-lg text-stone-500 uppercase tracking-widest ">FOR THOSE WHO WISH FOR MORE...</div>
      </div>
      <div className="flex items-center justify-center absolute inset-x-0 bottom-0 h-16 mb-10">
        <div className=" text-lg text-stone-500 uppercase tracking-widest">BRINGING THE WORLD CLOSER TOGETHER</div>
       
      </div>
      <div className="flex justify-center absolute inset-x-0 bottom-0 h-10">
      <img  className="mb-4" src="assets/downarrow.png" alt=""/>
      </div>
    </div>
  );
}

export default Section1;
