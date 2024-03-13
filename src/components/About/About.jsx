import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id='about' className='pt-5'>
            <div className="relative flex flex-col md:flex-row mt-[15vw] md:m-[9vw] gap-[50px] md:gap-0 md:justify-between font-global items-center">
                <div className="relative">
                    <img className='w-[50vw] md:w-[30vw]' src="images/image1.png" alt="" />
                    <img className='absolute -top-10 -right-10 w-[20vw] md:w-[12vw]' src="images/image2.png" alt="" />
                    <img className='absolute w-[20vw] md:w-[12vw] -bottom-10 -left-10' src="images/image3.png" alt="" />
                </div>
                <div className="w-[80vw] md:w-[530px] flex flex-col items-center gap-5">
                    <h1 className='text-[48px] font-bold text-[#01dede]'>ABOUT US</h1>
                    <p className='text-[18px] md:text-[22px] text-white font-normal text-center tracking-wider'>Our entire team is indulged in aiding you with the comprehensive resources, empowering you to turn your dreams into reality. What sets us apart is our phenomenal work ethic. Be it Cybersecurity, Web Development,  App Development, AI & DS, Open source and Quantum or IoT and Cloud, our diligence to achieve excellence is reflected in everything we do. We strive to deliver knowledge that's accurate and insightful, with unwavering commitment. Whether you are thrilled to collaborate, work in projects or find like minded individuals, Betalabs is the right place for you !</p>
                    <div className='flex flex-row justify-end w-full'>
                        <button className='learn-more-btn rounded-lg px-8 py-2 text-[18px] md:text-[22px] font-inter font-bold text-white'>Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;