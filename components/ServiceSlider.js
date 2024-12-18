import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// data
const serviceData = [
  {
    icon: '',
    title: 'Oval Solutions | Data Science Intern',
    description: `August 2024 - Present \n
                  As a Data Science Intern at Oval Solutions, I improved data quality by 15% after cleaning 30,000+ rows. I conducted EDA on 50,000-row datasets, created 20+ visualizations, and built models that increased forecasting accuracy by 12%. I optimized SQL queries, reducing extraction times by 20%, deployed models with Flask and Docker, and automated reporting, cutting manual effort by 25%. \n\n\n\n\n`,
  },
  {
    icon: '',
    title: 'Undergraduate Research Assistant | SEAR Lab',
    description: `August 2024 - Present\n
                  I integrated solar cell data from 100+ endpoints via RESTful APIs, ensuring flow. I organized 10,000+ entries into CSV files, enhancing accessibility. I created 30+ visualizations with Python (NumPy, Pandas, Matplotlib) to analyze performance and provide insights. I also maintained engineering notebooks for 200+ experiments leading to greater RnD. \n\n\n\n\n`,
  },
  {
    icon: '',
    title: 'Mavrick Rover Team | Data Scientist',
    description: `November 2024 - Present\n
                  As a Data Analyst for rover missions, I analyze samples to uncover insights into planetary composition, ensure data integrity, and distill findings for interdisciplinary teams. I create presentations, collaborate on mission reports, and use scientific tools to process large datasets efficiently.\n\n\n\n\n\n\n\n\n`,
  },
  {
    icon: '',
    title: 'Mavrick Tutor',
    description: `August 2023 - Present\n
    Skilled in teaching assembly language programming by simplifying complex concepts and focusing on practical application. Proven success in helping students achieve top grades through personalized instruction tailored to their learning styles. Dedicated to fostering a deep understanding of assembly language, building student confidence and mastery for future success.\n\n\n\n\n\n\n\n`,
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
        dynamicBullets: true, // Optionally, enable dynamic bullets
      }}
      modules={[FreeMode, Pagination]}  // Ensure Pagination is properly imported and used in modules
      className="h-[340px] sm:h-[440px]"
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-indigo-500 bg-opacity-10 h-full min-h-[340px] sm:min-h-[440px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
            <div className="flex flex-col justify-between h-full">
              <div className="font-semibold">{item.title}</div>
              <p className="text-xs" style={{ whiteSpace: 'pre-line' }}>
                {item.description}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
