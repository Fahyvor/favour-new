
const Footer = () => {
  return (
    <div className='bg-dark-favour text-white flex lg:px-20 md:px-0 max-sm:px-10 flex-col items-end pt-4 pb-6'>
      <p className='text-2xl'>&copy; <small className='text-sm'>All rights reserved</small></p>
      <p> 2015 - {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer