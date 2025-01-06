import portfolio1 from '../assets/portfolio1.png'
import portfolio2 from '../assets/portfolio2.png'
import portfolio3 from '../assets/portfolio3.png'
import portfolio4 from '../assets/portfolio4.png'
import portfolio5 from '../assets/portfolio5.png'
import portfolio6 from '../assets/portfolio6.png'
import portfolio7 from '../assets/portfolio7.png'
import portfolio8 from '../assets/portfolio8.png'
import portfolio9 from '../assets/portfolio9.png'
import portfolio10 from '../assets/portfolio10.png'
import portfolio11 from '../assets/portfolio11.jpg'
import Star2 from '../assets/star-2.png';

const Portfolio = () => {
  return (
    <div className='w-full px-24 mt-8 max-sm:px-10 pt-28 pb-6 bg-black' >
    <div className='flex items-center justify-center'>
        <img src={Star2} alt='star' className='w-20 h-10 object-contain'/>
        <p className="lg:text-7xl md:text-6xl text-4xl font-bold">PORTFOLIO</p>
        <img src={Star2} alt='star' className='w-20 h-10 object-contain'/>
      </div>

     <div className='portfolio_images_links mt-8 grid lg:grid-cols-3 md:grid-cols-2 md:pl-7 max-sm:grid-cols-1 gap-6'>
      <div className='portfolio_1 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' data-aos="zoom-out">
        <div className='portfolio_1_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg' >
          <img src={portfolio1} alt='' className='object-cover rounded-xl'/>
        </div>

        <div className='portfolio_1_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/city-wide/' className='bg-black rounded-xl px-3 drop-shadow-lg'>Github</a>
          <a href='https://city-wide-q6gz.onrender.com' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_2 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg'  data-aos="zoom-in">
        <div className='portfolio_2_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg'>
          <img src={portfolio2} alt='' />
        </div>

        <div className='portfolio_2_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/frontend-homly/' className='bg-black rounded-xl px-3 drop-shadow-lg'>Github</a>
          <a href='https://homly-frontend-eight.vercel.app/' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_3 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' data-aos="flip-left">
        <div className='portfolio_3_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg'>
          <img src={portfolio3} alt='' />
        </div>

        <div className='portfolio_3_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/flexysub-frontend/' className='bg-black rounded-xl px-3 drop-shadow-lg'>Github</a>
          <a href='https://flexysub.ng/' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_4 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' data-aos="zoom-out-up">
        <div className='portfolio_4_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg'>
          <img src={portfolio4} alt='' />
        </div>

        <div className='portfolio_4_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/' className='bg-black rounded-xl px-3 drop-shadow-lg'>Github</a>
          <a href='https://speedupcreative.onrender.com/' className=''>Check Out The Site</a>
        </div>
      </div> 

      <div className='portfolio_5 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' data-aos="flip-right">
        <div className='portfolio_5_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg'>
          <img src={portfolio5} alt='' />
        </div>

        <div className='portfolio_5_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/' className='bg-black rounded-xl px-3 drop-shadow-lg'>Github</a>
          <a href='https://tech19.onrender.com/' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_6 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' data-aos="zoom-out-down">
        <div className='portfolio_6_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg'>
          <img src={portfolio6} alt='' />
        </div>

        <div className='portfolio_6_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/cmonlineradio/' className='bg-black rounded-xl px-3 drop-shadow-lg'>Github</a>
          <a href='https://cmonlineradio.vercel.app/' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_7 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' data-aos="flip-right">
        <div className='portfolio_7_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg'>
          <img src={portfolio7} alt='' />
        </div>

        <div className='portfolio_7_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/favour' className='bg-black rounded-xl px-3 drop-shadow-lg'>Github</a>
          <a href='https://favour-plum.vercel.app/' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_8 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' data-aos="flip-down">
        <div className='portfolio_8_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg'>
          <img src={portfolio8} alt='' />
        </div>

        <div className='portfolio_8_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor' className='bg-black rounded-xl px-3 drop-shadow-lg'>Github</a>
          <a href='https://doncodes-tech.vercel.app/' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_9 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' data-aos="fade-down-right">
        <div className='portfolio_9_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg'>
          <img src={portfolio9} alt='' />
        </div>

        <div className='portfolio_9_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/PublicVersion' className='bg-black rounded-xl px-3 drop-shadow-lg'>Github</a>
          <a href='https://imponexpo-first-public-version.vercel.app/help' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_10 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' data-aos="flip-left">
        <div className='portfolio_10_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg'>
          <img src={portfolio10} alt='' />
        </div>

        <div className='portfolio_10_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/' className='bg-white px-3 drop-shadow-lg'>Github</a>
          <a href='https://accesstojustice.legum.tech' className=''>Check Out The Site</a>
        </div>
      </div>

      <div className='portfolio_11 p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' data-aos="flip-left">
        <div className='portfolio_11_image rounded-3xl overflow-hidden flex justify-center items-center border-2 border-dark-favour
        hover:drop-shadow-lg'>
          <img src={portfolio11} alt='' />
        </div>

        <div className='portfolio_10_details px-3 flex gap-3'>
          <a href='https://github.com/Fahyvor/' className='bg-white px-3 drop-shadow-lg'>Github</a>
          <a href='https://t.me/sushimonsta_bot' className=''>Check Out The Bot</a>
        </div>
      </div>
     </div>

     <div className='portfolio_order bg-pink-700 w-[20%] mt-8 rounded-full text-white text-center font-semibold my-4
     tracking-wider py-1 mx-auto md:w-[35%] max-sm:w-1/2'>
      <a href='mailto:favourokafor30@gmail.com'>Start your project</a>
     </div>
    </div>
  )
}

export default Portfolio