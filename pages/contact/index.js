import Circles from '/components/Circles';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import emailjs from "@emailjs/browser";
import { useState } from 'react';

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent default form submission
    // setStatusMessage("Sending...");

    emailjs
      .sendForm('service_ar3lrvl', 'template_oc0xtes', e.target, 'K9gb8VyL22D_Pi0ih')
      .then(
        (result) => {
          console.log(result.text);
          //setStatusMessage("Message sent successfully!");
        },
        (error) => {
          console.error(error.text);
          //setStatusMessage("Failed to send the message. Please try again.");
        }
      );

    e.target.reset(); // Reset form fields after submission
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <h2 className='h2 text-center mb-12'>
            Let's <span className='text-accent'>Connect.</span>
          </h2>
          <form className='flex-1 flex flex-col gap-6 w-full mx-auto' onSubmit={sendEmail}>
            <div className='flex gap-x-6 w-full'>
              <input
                type='text'
                name='user_name'
                placeholder='Name'
                className='input'
                autoCapitalize='none'
                spellCheck='false'
                style={{ textTransform: 'none' }}
              />
              <input
                type='email'
                name='user_email'
                placeholder='Email'
                className='input'
                autoCapitalize='none'
                spellCheck='false'
                style={{ textTransform: 'none' }}
                required
              />
            </div>
            <input
              type='text'
              name='subject'
              placeholder='Subject'
              className='input'
              autoCapitalize='none'
              spellCheck='false'
              style={{ textTransform: 'none' }}
            />
            <textarea
              name='message'
              placeholder='Message'
              className='textarea'
              style={{ textTransform: 'none' }}
              required
            ></textarea>
            <button
              type='submit'
              className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group relative'
            >
              <span className='transition-all duration-300 text-[22px]'>Send</span>
            </button>
          </form>
          {statusMessage && (
            <p className="mt-4 text-sm text-white">{statusMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
