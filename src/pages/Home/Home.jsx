import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="flex flex-col gap-20 p-12 mt-10">
          <div className="flex flex-wrap text-white ml:justify-between">
              <div className="flex flex-col gap-3 text-4xl lg:text-5xl xl:text-6xl  w-[27rem] lg:w-[36rem]  xl:w-[45rem] font-prata">
                <span className="">WELCOME TO THE</span>
                <span className="self-center text-xl ml:text-4xl lg:text-5xl ml:self-end ">TECHNICAL CLUB</span>
                <span className="">OF IIIT KOTTAYAM</span>
              </div>
              <div className="ml:self-center">
                <img src='https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg' className='rounded-lg' height={400} width={300} alt='' />
              </div>
          </div>
          <p className='text-xl text-white'>We are going to add some descriptions overe here as a default</p>
      </div>
    </div>
  )
}

export default Home