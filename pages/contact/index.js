import Circles from '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <h2 className='h2 text-center mb-12'>
            Let's <span className='text-accent'>Connect.</span>
          </h2>
          <form className='flex-1 flex flex-col gap-6 w-full mx-auto'>
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' autoCapitalize='none' spellCheck='false' style={{textTransform: 'none'}}/>
              <input type='text' placeholder='email' className='input' autoCapitalize='none' spellCheck='false' style={{textTransform: 'none'}}/>
            </div>
            <input type='text' placeholder='subject' className='input' autoCapitalize='none' spellCheck='false' style={{textTransform: 'none'}}/>
            <textarea placeholder='message' className='textarea' style={{textTransform: 'none'}}></textarea>
            <button className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative'>
              <span className='transition-all duration-300 text-[22px]'>Send</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;