import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


const Services = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <h1 className='h1 text-xxl xl:mt-8'>Work Experience <span className='text-accent'>.</span></h1>
            <p className='mb-4 max-w-[400px] mx-auto lg:mx-0 text-sm'>
              &quot;With a proven track record in <span className='text-accent'>Data Science and Cybersecurity,</span> I’ve driven impactful research and secure development. My experience spans from research labs to penetration testing, always focused on delivering results and refining my skills.&quot;
            </p>
          </div>
          <div className="w-full xl:max-w-[65%]">
            <ServiceSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Services;
