// import React from 'react';
import Favour from '../assets/ME.jpg';

const About = () => {
  return (
    <div className="bg-black text-white w-full lg:px-16 md:px-12 px-5 pt-28 pb-6">
        <div className="w-full">
          <div className="self_summary_container flex lg:flex-row md:flex-row flex-col gap-6 w-full" data="aos" data-aos="fade-in">
            <div className="bg-dark-favour rounded-xl lg:w-1/4 md:w-1/4 p-6 w-full h-[18rem] overflow-y-hidden flex justify-center items-center" data="aos" data-aos="zoom-in-left">
              <img src={Favour} alt="Favour" className="object-cover rounded-xl w-full h-full" />
            </div>

            <div className="text-white lg:w-3/4 md:w-3/4 w-full p-6 flex flex-col lg:gap-6 md:gap-6" data="aos" data-aos="zoom-in-right">
              <div>
                <p className="text-7xl">SELF SUMMARY</p>
              </div>

              <div className='bg-dark-favour rounded-xl p-6'>
                <p>FAVOUR OKAFOR</p>
                <p>I am a Nigerian-based software developer with a focus on full stack web development and blockchain development. I have a diverse range of experience having worked across various fields and industries</p>
              </div>
            </div>
          </div>

          <div className="experience-education-section py-4 flex w-full gap-8">
            <div className="bg-dark-favour lg:w-1/2 md:w-1/2 w-full rounded-xl p-6">
              <p>EXPERIENCE</p>
            </div>

            <div className="bg-dark-favour lg:w-1/2 md:w-1/2 w-full rounded-xl p-6"></div>
          </div>
        </div>
    </div>
  )
}

export default About