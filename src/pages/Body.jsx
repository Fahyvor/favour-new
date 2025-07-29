// import { useEffect, useRef, useState } from 'react';
import Fahyvor from '../assets/ME.jpg';
import worksThumnail from '../assets/portfolio14.png';
import Signature from '../assets/signature.png';
import Star from '../assets/star.png';
import Logo from '../assets/elreyLogo.png';
import WebIcon from '../assets/webIcon.jpg';
import Web3Icon from '../assets/web3Icon.png';
import { FaCode } from "react-icons/fa6";
import { BsBrowserEdge } from "react-icons/bs";
import { CiTwitter } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
// import { gsap } from "gsap";

const Body = () => {
  // const developerRef = useRef(null); // Reference to the text container
  // const [splitText, setSplitText] = useState([]); // State to store split text letters

  // useEffect(() => {
  //   const text = developerRef.current;

  //   // Split the text content into individual letters and wrap them in <span> elements
  //   const splitTextArray = text.innerText.split('').map((letter, index) => (
  //     <span key={index} className="letter">{letter}</span>
  //   ));

  //   setSplitText(splitTextArray); // Update state with the split text
  // }, []);

  // useEffect(() => {
  //   // Once split text is rendered, trigger GSAP animation
  //   if (splitText.length > 0) {
  //     gsap.fromTo(
  //       '.letter',
  //       {
  //         opacity: 0,
  //         y: 50,
  //         rotationX: 180,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         rotationX: 0,
  //         duration: 1,
  //         delay: (index) => index * 0.05,
  //         ease: 'power3.out',
  //         stagger: 0.05,
  //         repeat: -1, // Infinite loop
  //         repeatDelay: 1, // Delay before repeating the animation
  //       }
  //     );
  //   }
  // }, [splitText]); // This effect runs when splitText changes

  const navigate = useNavigate();

  return (
    <div className='bg-black w-full lg:px-16 md:px-12 px-5 pt-28 pb-6'>
      <div className="body flex gap-8 w-full lg:flex-row md:flex-row flex-col py-5" data="aos" data-aos="zoom-in">
        <div className='body-left  rounded-b-xl rounded-t-xl lg:w-1/2 md:w-1/2 w-full flex-col justify-center flex'>
          <div className="body-left-image-and-text flex lg:flex-row md:flex-row flex-col items-center lg:gap-6 md:gap-4 gap-8 lg:px-12 md:px-4 px-5 rounded-3xl py-12 bg-dark-favour ">
            <div className="body-left-image rounded-tl-3xl rounded-br-3xl flex lg:w-[18rem] md:w-[18rem]  lg:h-[15rem] md:h-[15rem] h-[20rem] overflow-hidden w-full">
              <img src={Fahyvor} alt="Fahyvor" className='object-cover'/>
            </div>
            <div className="body-left-text">
              <p className='text-sm text-gray-400'>A SOFTWARE DEVELOPER</p>
              <p className='text-3xl font-bold'>Favour Okafor.</p>
              <p className='text-md'>I&apos;m a Software developer based in Nigeria</p>
            </div>
          </div>
          {/* <div className="w-full flex justify-end h-10">
            <img src={Star} alt='star' className='filter invert object-contain '/>
          </div> */}
        </div>

        <div className="body-right lg:w-1/2 md:w-1/2 w-full flex flex-col gap-6">
          <div className="marquee rounded-full overflow-hidden whitespace-nowrap bg-dark-favour p-3 px-4">
            <p className='text-sm animate-marquee'>| LATEST WORK AND <b>FEATURED</b> | LATEST WORK AND <b>FEATURED</b> | LATEST WORK AND <b>FEATURED</b> | LATEST WORK AND <b>FEATURED</b> | LATEST WORK AND <b>FEATURED</b> | LATEST WORK AND <b>FEATURED</b> | LATEST WORK AND <b>FEATURED</b> | LATEST WORK AND <b>FEATURED</b> | LATEST WORK AND <b>FEATURED</b> | LATEST WORK AND <b>FEATURED</b> | </p>
          </div>
          <div className="flex lg:flex-row md:flex-row flex-col gap-6 py-5">
            <div className="bg-dark-favour p-2 rounded-3xl lg:w-1/2 md:w-1/2 w-full cursor-pointer" onClick={() => navigate('/credentials')}>
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

            <div className="bg-dark-favour p-2 lg:w-1/2 md:w-1/2 w-full rounded-3xl flex flex-col gap-7 py-5 cursor-pointer" onClick={() => (navigate('/portfolio'))}>
              <div className="flex flex-col items-center py-3">
                <p className='text-4xl opacity-40 font-bold text-white'>MY WORKS</p>
                <img src={worksThumnail} alt="works" className='w-5/6 z-40  rounded-tl-xl rounded-br-xl'/>
              </div>
                <div className="flex justify-between items-center px-5">
                    <div className="">
                        <p className='text-sm text-gray-400 font-medium'>SHOWCASE</p>
                        <p className='text-xl font-semibold'>Projects</p>
                    </div>
                    <div className="flex justify-end">
                      <img src={Star} alt='star' className='w-1/2 filter invert h-1/2 object-cover'/>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="body-middle flex lg:flex-row md:flex-row flex-col gap-6" data="aos" data-aos="fade-up">
        <div className="bg-dark-favour rounded-3xl lg:w-1/4 md:w-1/4 p-6 w-full">
          <div className="flex p-6 justify-center items-center">
            <img src={Logo} alt='' className='filter invert object-contain lg:w-full md:w-full w-1/2' />
          </div>

          <div className="">
            <div className=""></div>
            <div className=""></div>
          </div>
        </div>

        <div className="bg-dark-favour rounded-3xl lg:w-2/4 md:w-2/4 w-full p-6 flex flex-col lg:gap-6 md:gap-6 gap-24 justify-between cursor-pointer" onClick={() => navigate('/services')}>
            <div className="flex justify-center gap-8 w-full py-6 items-center">
              <img src={WebIcon} alt='' className="filter invert lg:w-28 md:w-28 w-12 object-contain" />
              <img src={Web3Icon} alt='' className='filter invert lg:w-28 md:w-28 w-12 object-contain' />
              <FaCode className='lg:w-16 md:w-16 w-8 lg:h-16 md:h-16 h-8'/>
            </div>

            <div className="services-offering flex items-center justify-between px-5 ">
                <div className="">
                  <p className='text-sm text-gray-400 font-medium'>SPECIALIZATION</p>
                  <p className='text-xl font-semibold'>Services Offering</p>
                </div>
                <div className=" flex justify-end">
                  <img src={Star} alt='star' className='w-1/2 filter invert h-1/2 object-cover'/>
                </div>
            </div>
        </div>

        <div className="bg-dark-favour rounded-3xl lg:w-1/4 md:w-1/4 p-3 w-full py-7 flex flex-col justify-between lg:gap-3 md:gap-3 gap-28" onClick={() => navigate('/contact')}>
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
      </div>

      <div className="w-full flex lg:flex-row md:flex-row flex-col lg:gap-3 md:gap-3 gap-8 py-6" data="aos" data-aos="zoom-in">
        <div className="bg-dark-favour rounded-3xl lg:w-1/2 md:w-1/2 w-full p-6 flex lg:flex-row md:flex-row flex-col lg:gap-3 md:gap-3 gap-11">
            <div className="lg:w-1/3 md:w-1/3 w-full rounded-xl bg-zinc-900 text-center px-5 lg:py-2 md:py-2 py-8 flex flex-col justify-center">
              <p className="text-4xl font-bold">{new Date().getFullYear() - 2021}</p>
              <span className='font-bold opacity-40 text-sm'>YEARS EXPERIENCE</span>
            </div>

            <div className="lg:w-1/3 md:w-1/3 w-full rounded-xl bg-zinc-900 text-center px-5 lg:py-2 md:py-2 py-8 flex flex-col justify-center">
              <p className="text-4xl font-bold">90+</p>
              <p className='font-bold opacity-40 text-sm'>CLIENTS WORLDWIDE</p>
            </div>

            <div className="lg:w-1/3 md:w-1/3 w-full rounded-xl bg-zinc-900 text-center px-5 lg:py-2 md:py-2 py-8 flex flex-col justify-center">
              <p className="text-4xl font-bold">200+</p>
              <p className='font-bold opacity-40 text-sm'>PROJECTS COMPLETED</p>
            </div>
        </div>

        <div className="bg-dark-favour rounded-3xl lg:w-1/2 md:w-1/2 w-full p-6">
            <p className='lg:text-6xl md:text-6xl text-4xl lg:w-3/4 md:w-3/4 w-full'>Let&apos;s work <span className='text-blue-800'>together.</span></p>
        </div>
      </div>
    </div>
  );
};

export default Body;
