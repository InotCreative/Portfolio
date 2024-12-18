import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

import ProjectsSlider from '../../components/ProjectsSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'


const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circles />
      <div className='container mx-auto'>
        <div className="flex justify-center items-center h-screen">
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <h1 className='h1 text-xxl xl:mt-8'>Projects <span className='text-accent'>.</span></h1>
          </div>
          <div className="w-full xl:max-w-[65%]">
            <ProjectsSlider />
          </div>
        </div>
      </div>
      <Bulb />
    </div>
  )
};

export default Work;
