import Image from 'next/Image'

const Bulb = () => {
  return (
    <div className='absolute -left-[93px] -bottom-12 rotate-10 mix-blend-color-dodge animate-pulse duration-75 z-10 w-[140] xl:w-[180px]'>
      <Image 
        src={'/bulb.png'}
        width={180}
        height={140}
        className='w-full h-full'
        alt=''
      />
    </div>
  )
};

export default Bulb;
