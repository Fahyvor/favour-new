import { BsBrowserEdge } from "react-icons/bs";
import { SiHiveBlockchain } from "react-icons/si";
import Star2 from '../assets/star-2.png';
import { CiTwitter } from 'react-icons/ci';
import Star from '../assets/star.png';
import { useNavigate } from 'react-router-dom'
import Signature from '../assets/signature.png';

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className="lg:px-24 md:px-20 px-6 pt-28 pb-7 w-full flex flex-col gap-8">
      <div className="w-full flex lg:flex-row md:flex-row flex-col gap-4">
        <div className="bg-dark-favour rounded-3xl px-10 lg:w-1/3 md:w-1/3 w-full flex flex-col justify-between gap-6 py-24">
          <div className="flex items-center gap-4">
            <BsBrowserEdge className=""/>
            <p className="text-lg font-bold"> Web Development </p>
          </div>

          <div className="flex items-center gap-4">
            <SiHiveBlockchain />
            <p className="text-lg font-bold"> Web3 Development </p>
          </div>
        </div>

        <div className="lg:w-2/3 md:w-2/3 w-full lg:p-6 md:p-4">
          <div className='flex items-center justify-center'>
            <img src={Star2} alt='star' className='lg:w-20 lg:h-10 md:w-8 mg:h-8 w-5 h-5 object-contain'/>
            <p className="lg:text-6xl md:text-5xl text-3xl font-bold">MY OFFERINGS</p>
            <img src={Star2} alt='star' className='lg:w-20 lg:h-10 md:w-8 mg:h-8 w-5 h-5 object-contain'/>
          </div>

          <div className="bg-dark-favour rounded-3xl p-6 mt-4 grid lg:grid-cols-2 w-full gap-8">
            <div className="p-6 rounded-3xl bg-zinc-800">
              <p className="font-semibold mb-4 text-lg">WEB DEVELOPMENT</p>

              <p className="text-justify text-sm leading-loose">
                Looking for a professional and modern online presence? I specialize in creating dynamic, user-friendly, and responsive websites tailored to your unique needs. Whether you&apos;re a business owner, entrepreneur, or creative professional, I&apos;ll build a website that not only looks great but also delivers an exceptional user experience.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-zinc-800">
              <p className="font-semibold mb-4 text-lg">WEB3 DEVELOPMENT</p>

              <p className="text-justify text-sm leading-loose">
              The future of the web is here, and I&apos;m here to help you build it. With expertise in blockchain technology and decentralized applications, I specialize in developing Web3 solutions that empower businesses and creators to thrive in the decentralized world
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="let_work_together flex gap-6 lg:flex-row md:flex-row flex-col" data="aos" data-aos="zoom-in">
          <div className="bg-dark-favour rounded-3xl lg:w-1/4 md:w-1/4 p-3 w-full py-7 flex flex-col justify-between lg:gap-20 md:gap-3 gap-28" onClick={() => navigate('/contact')}>
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

          <div className="bg-dark-favour p-2 rounded-3xl lg:w-1/4 md:w-1/4 w-full" onClick={() => navigate('/credentials')}>
            <div className="">
              <img src={Signature} alt="" className='filter invert w-1/2 mx-auto my-6' /> 
            </div>
            <div className="more-about flex items-center justify-between px-5">
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
  )
}

export default Services