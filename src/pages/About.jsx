// import React from 'react';
import Favour from '../assets/ME.jpg';
import { CiTwitter } from 'react-icons/ci';
import Star from '../assets/star.png';
import { BsBrowserEdge } from "react-icons/bs";
import Signature from '../assets/signature.png';
import Star2 from '../assets/star-2.png';


const About = () => {
  return (
    <div className="bg-black text-white w-full lg:px-16 md:px-12 px-5 pt-28 pb-6">
        <div className="w-full">
          <div className="self_summary_container flex lg:flex-row md:flex-row flex-col lg:gap-6 md:gap-6 gap-8 w-full" data="aos" data-aos="fade-in">
            <div className="bg-dark-favour rounded-xl lg:w-1/4 md:w-1/4 p-6 w-full lg:h-[18rem] md:h-[18rem] h-[22rem] overflow-y-hidden flex justify-center items-center" data="aos" data-aos="zoom-in-left">
              <img src={Favour} alt="Favour" className="object-cover rounded-xl w-full h-full" />
            </div>

            <div className="text-white lg:w-3/4 md:w-3/4 w-full lg:p-6 md:p-6 p-0 flex flex-col lg:gap-6 md:gap-6 gap-5" data="aos" data-aos="zoom-in-right">
              <div className='flex items-center'>
                <img src={Star2} alt='star' className='w-20 h-10 object-contain'/>
                <p className="lg:text-7xl md:text-6xl text-4xl">SELF SUMMARY</p>
                <img src={Star2} alt='star' className='w-20 h-10 object-contain'/>
              </div>

              <div className='bg-dark-favour rounded-xl p-6'>
                <p>FAVOUR OKAFOR</p>
                <p>I am a Nigerian-based software developer with a focus on full stack web development and blockchain development. I have a diverse range of experience having worked across various fields and industries</p>
              </div>
            </div>
          </div>

          <div className="experience-education-section py-4 flex lg:flex-row md:flex-row flex-col w-full gap-8" data="aos" data-aos="zoom-out">
            <div className="bg-dark-favour lg:w-1/2 md:w-1/2 w-full rounded-xl p-6">
              <p className='text-2xl font-medium'>EXPERIENCE</p>

              <div className="experience_container flex flex-col gap-8 mt-9">
                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">October 2024 - Till date</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Djeffs Source, Lagos State, Nigeria</p>
                  <p className='position text-gray-500'>FullStack Developer</p>
                </div>

                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">May 2024 - Till date</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Legum Limited, Lagos State, Nigeria</p>
                  <p className='position text-gray-500'>Frontend Developer</p>
                </div>

                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">July 2024</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Tech4Dev, Abia State, Nigeria</p>
                  <p className='position text-gray-500'>Tech Instructor</p>
                </div>

                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">February - April 2024</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Ashnity Synergy Limited, Abuja, F.C.T Nigeria</p>
                  <p className='position text-gray-500'>FullStack Developer</p>
                </div>

                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">November 2023 - Febuary 2024</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Homly LLC, Lagos State, Nigeria</p>
                  <p className='position text-gray-500'>FullStack Developer/Team Lead</p>
                </div>

                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">July - December 2023</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Doncodes Tech. Limited, Abia State, Nigeria</p>
                  <p className='position text-gray-500'>Frontend Developer</p>
                </div>

                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">January 2020 - December 2022</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Kaays Graphix, Rivers State, Nigeria</p>
                  <p className='position text-gray-500'>Creative Director</p>
                </div>

                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">September 2015 - December 2022</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Innolink Integrated Services, Rivers State, Nigeria</p>
                  <p className='position text-gray-500'>Senior Graphics Designer</p>
                </div>
              </div>
            </div>

            <div className="eductation_container bg-dark-favour lg:w-1/2 md:w-1/2 w-full rounded-xl p-6">
            <p className='text-2xl font-medium'>EDUCATION</p>

              <div className="experience_container flex flex-col gap-8 mt-9">
                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">2018 - 2023</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Bachelor Degree in Computer Science</p>
                  <p className='position text-gray-500'>Micheal Okpara Univeristity of Agriculture, Umudike</p>
                </div>

                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">2022</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>Internship in Frontend Development</p>
                  <p className='position text-gray-500'>Side Hustle Internship, Lagos State, Nigeria</p>
                </div>

                <div className="experience_card flex flex-col">
                  <p className="duration text-gray-500 font-medium">2009 - 2015</p>
                  <p className='organization lg:text-2xl md:text-2xl text-lg font-medium'>West Africa Examination Council</p>
                  <p className='position text-gray-500'>Total Victory College</p>
                </div>
              </div>
            </div>
          </div>

          <div className="let_work_together flex gap-6 lg:flex-row md:flex-row flex-col" data="aos" data-aos="zoom-in">
              <div className="bg-dark-favour rounded-3xl lg:w-1/4 md:w-1/4 p-3 w-full py-7 flex flex-col justify-between lg:gap-3 md:gap-3 gap-28">
                <div className="bg-zinc-800 rounded-full justify-center p-3 flex gap-4">
                    <BsBrowserEdge className='lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 rounded-full bg-dark-favour border-[1px] border-gray-500 lg:p-4 md:p-4 p-2 cursor-pointer hover:bg-white hover:text-black'/>
                    <CiTwitter className='lg:w-16 md:w-16 w-12 lg:h-16 md:h-16 h-12 rounded-full bg-dark-favour border-[1px] border-gray-500 lg:p-4 md:p-4 p-2 cursor-pointer hover:bg-white hover:text-black' />
                </div>
    
                <div className="services-offering flex items-center justify-between px-5 ">
                    <div className="">
                      <p className='text-sm text-gray-400 font-medium'>STAY WITH ME</p>
                      <p className='text-xl font-semibold'>Profiles</p>
                    </div>
                    <div className=" flex justify-end">
                      <img src={Star} alt='star' className='w-1/2 filter invert h-1/2 object-cover'/>
                    </div>
                </div>
              </div>

              <div className="bg-dark-favour rounded-3xl lg:w-2/4 md:w-2/4 w-full p-6">
                <p className='lg:text-6xl md:text-6xl text-4xl lg:w-3/4 md:w-3/4 w-full'>Let&apos;s work <span className='text-blue-800'>together.</span></p>
              </div>

              <div className="bg-dark-favour p-2 rounded-3xl lg:w-1/4 md:w-1/4 w-full">
                <div className="">
                  <img src={Signature} alt="" className='filter invert w-1/2 mx-auto my-6' /> 
                </div>
                <div className="more-about flex items-center justify-between px-5 ">
                  <div className="">
                    <p className='text-sm text-gray-400 font-medium'>MORE ABOUT ME</p>
                    <p className='text-xl font-semibold'>Credentials</p>
                  </div>
                  <div className=" flex justify-end">
                    <img src={Star} alt='star' className='w-1/2 filter invert h-1/2 object-cover'/>
                  </div>
                </div>
              </div>
        </div>
        </div>
    </div>
  )
}

export default About