import React from 'react'

const Hero = () => {
  return (
    <div>
        <div className="flex flex-col justify-center gap-20 p-12 mt-10 text-white">
          <div className="flex flex-wrap justify-center gap-10 ml:gap-0 ml:justify-between">
              <div className="flex flex-col gap-3 text-4xl lg:text-5xl xl:text-6xl lg:w-[36rem]  xl:w-[45rem] font-prata">
                <span className="">WELCOME TO THE</span>
                <span className="self-center text-2xl ml:text-4xl lg:text-5xl ml:self-end ">TECHNICAL CLUB</span>
                <span className="">OF IIIT KOTTAYAM</span>
              </div>
              <div className="ml:self-center">
                <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' className='rounded-lg' height={400} width={300} alt='' />
              </div>
          </div>
          <p className='text-xl ml:text-2xl'>We are going to add some descriptions overe here as a default</p>
      </div>
    </div>
  )
}

export default Hero