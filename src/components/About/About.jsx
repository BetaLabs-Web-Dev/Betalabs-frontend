import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id='about'>
            <div className="relative flex flex-col md:flex-row mt-[15vw] md:m-[9vw] gap-[50px] md:gap-0 md:justify-between font-poppins items-center">
                <div className="relative">
                    <img className='w-[50vw] md:w-[30vw]' src="images/image1.png" alt="" />
                    <img className='absolute -top-10 -right-10 w-[20vw] md:w-[12vw]' src="images/image2.png" alt="" />
                    <img className='absolute w-[20vw] md:w-[12vw] -bottom-10 -left-10' src="images/image3.png" alt="" />
                </div>
                <div className="w-[80vw] md:w-[500px] flex flex-col items-center gap-5">
                    <h1 className='text-[48px] font-bold text-[#01dede]'>ABOUT US</h1>
                    <p className='text-[18px] md:text-[24px] font-inter text-white font-normal text-center'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, odio commodi placeat accusamus ullam delectus alias! Delectus impedit nobis mollitia quaerat dolor ipsa unde qui, at eveniet aperiam tempore laudantium? Reprehenderit ipsum perspiciatis sit assumenda commodi natus! Consequatur quas itaque cupiditate ea voluptatum, quam, exercitationem aperiam, reiciendis est enim vitae."</p>
                    <div className='flex flex-row justify-end w-full'>
                        <button className='learn-more-btn rounded-lg px-8 py-2 text-[18px] md:text-[22px] font-inter font-bold text-white'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;