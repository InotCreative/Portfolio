import Image from "next/Image"
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import ResumeBtn from '../components/ResumeBtn'
import Avatar from '../components/Avatar'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'


const Home = () => {
  return (
    <div className="bg-primary/60 h-full flex justify-center items-center min-h-screen">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 flex justify-center items-center flex-col" style={{ paddingBottom: '100px' }}>
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h2
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='text-xl xl:text-3xl font-bold'
          >
            Innovative <span className="text-accent">Data Science<br /></span> Meets Robust<span className="text-accent"> Cybersecurity</span>
          </motion.h2>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-6 xl:mb-10 text-sm xl:text-base"
          >
            <br></br>
            Aspiring data scientist and cybersecurity researcher passionate about data analytics, machine learning, and cryptography.
            Driven to solve complex problems through data-driven insights and innovative approaches in secure systems. Dedicated to continuous learning and leveraging technology to create meaningful impact.
          </motion.p>

          <div style={{ display: 'flex', gap: '20px' }} className="z-20">
            <motion.div variants={fadeIn('down', 0.4)}>
              <ProjectsBtn />
            </motion.div>
            <motion.div variants={fadeIn('down', 0.4)}>
              <ResumeBtn />
            </motion.div>
          </div>
        </div>

        <div className="w-[1000px] h-[800px] absolute right-0 bottom-0" style={{ paddingLeft: '20px', paddingTop: '100px' }}>
          <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        </div>
        <ParticlesContainer />
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="w-full h-full max-w-[500px] max-h-[500px] absolute -bottom-10 lg:bottom-10px lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};


export default Home;
