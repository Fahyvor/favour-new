import { useEffect } from 'react'
import AOS from 'aos'
import portfolio4 from '../assets/portfolio4.webp'
import portfolio6 from '../assets/portfolio6.webp'
import portfolio10 from '../assets/portfolio10.webp'
import portfolio11 from '../assets/portfolio11.webp'
import portfolio12 from '../assets/portfolio12.webp'
import portfolio13 from '../assets/portfolio13.webp'
import portfolio14 from '../assets/portfolio14.webp'
import portfolio16 from '../assets/portfolio16.webp'
import portfolio19 from '../assets/portfolio19.webp'
import portfolio18 from '../assets/portfolio18.webp'
import portfolio20 from '../assets/portfolio20.webp'
import Star2 from '../assets/star-2.png';

const Portfolio = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const portfolioItems = [
    {
      id: 17,
      title: "Match Nexx",
      image: portfolio18,
      githubUrl: "https://github.com/Fahyvor/match-nexx",
      siteUrl: "https://match-nexx.com",
      animation: 'flip-right'
    },
    {
      id: 18,
      title: "Pure Breed",
      image: portfolio19,
      githubUrl: "https://github.com/Fahyvor/",
      siteUrl: "https://pure-breed.onrender.com",
      animation: 'flip-right'
    },
    {
      id: 20,
      title: "Nub Stack",
      image: portfolio20,
      githubUrl: "https://github.com/Fahyvor/nub-stack",
      siteUrl: "https://www.npmjs.com/package/nub-stack",
      animation: "zoom-in",
      linkText: 'Check Out The Library',
      isSpecial: true,
    },
    {
      id: 13,
      title: "Bumasel",
      image: portfolio13,
      githubUrl: "https://github.com/fahyvor",
      siteUrl: "https://bumasel.com/",
      animation: "zoom-out"
    },
    {
      id: 14,
      title: "Sleek Toast",
      image: portfolio14,
      githubUrl: "https://github.com/Fahyvor/sleek-toast",
      siteUrl: "https://www.npmjs.com/package/sleek-toast",
      animation: "zoom-in",
      linkText: 'Check Out The Library',
      isSpecial: true,
    },
    {
      id: 16,
      title: "Oxidlabs URL Shortener",
      image: portfolio16,
      githubUrl: "https://github.com/Fahyvor/url-shortner-ui",
      siteUrl: "https://oxidlabs.click/",
      animation: "flip-left"
    },
    {
      id: 10,
      title: "Access to Justice",
      image: portfolio10,
      githubUrl: 'https://github.com/Fahyvor/',
      siteUrl: 'https://access-to-justice-five.vercel.app/',
      animation: 'flip-left'
    },
    {
      id: 12,
      title: "Sterling",
      image: portfolio12,
      githubUrl: "https://github.com/fahyvor",
      siteUrl: "https://sterling-frontend.onrender.com/",
      animation: "zoom-in"
    },
    {
      id: 4,
      title: "Speedup Creative",
      image: portfolio4,
      githubUrl: 'https://github.com/Fahyvor/',
      siteUrl: 'https://speedupcreative.onrender.com/',
      animation: 'zoom-out-up'
    },
    {
      id: 6,
      title: "CM Online Radio",
      image: portfolio6,
      githubUrl: 'https://github.com/Fahyvor/cmonlineradio/',
      siteUrl: 'https://cmonlineradio.vercel.app/',
      animation: 'zoom-out-down'
    },
    {
      id: 11,
      title: "Sushi Monsta Bot",
      image: portfolio11,
      githubUrl: 'https://github.com/Fahyvor/',
      siteUrl: 'https://t.me/sushimonsta_bot',
      linkText: 'Check Out The Bot',
      isSpecial: true,
      animation: 'flip-left'
    },
  ];

  return (
    <div className='w-full px-24 mt-8 max-sm:px-10 lg:pt-28 pt-8 pb-6 bg-black'>
      <div className='flex items-center justify-center mt-12 lg:mt-0 md:mt-0'>
        <img src={Star2} alt='star' className='w-20 h-10 object-contain'/>
        <p className="lg:text-7xl md:text-6xl text-4xl font-bold">PORTFOLIO</p>
        <img src={Star2} alt='star' className='w-20 h-10 object-contain'/>
      </div>

      <div className='portfolio_images_links mt-8 grid lg:grid-cols-3 md:grid-cols-2 md:pl-7 max-sm:grid-cols-1 gap-6'>
        {portfolioItems.map((item, index) => (
          <div 
            key={item.id}
            className='p-3 bg-dark-favour rounded-3xl flex flex-col gap-3 hover:drop-shadow-lg' 
            data-aos={item.animation}
          >
            <div className="rounded-3xl overflow-hidden border-2 border-dark-favour h-52 sm:h-60 md:h-64 flex bg-zinc-950">
              <img 
                src={item.image} 
                alt={item.title}
                loading={index < 6 ? "eager" : "lazy"} 
                fetchpriority={index < 3 ? "high" : "auto"}
                decoding="async" 
                className={`w-full h-full ${item.isSpecial ? 'object-cover' : 'object-cover rounded-xl'}`} 
              />
            </div>

            <div className='px-3 flex gap-3'>
              <a href={item.githubUrl} className='bg-black rounded-xl px-3 drop-shadow-lg' target="_blank" rel="noopener noreferrer">Github</a>
              <a href={item.siteUrl} className='' target="_blank" rel="noopener noreferrer">
                {item.linkText || 'Check Out The Site'}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className='portfolio_order bg-pink-700 w-[20%] mt-8 rounded-full text-white text-center font-semibold my-4 tracking-wider py-1 mx-auto md:w-[35%] max-sm:w-1/2'>
        <a href='mailto:favourokafor30@gmail.com'>Start your project</a>
      </div>
    </div>
  )
}

export default Portfolio