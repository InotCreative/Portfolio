import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { SiTensorflow, SiJupyter, SiPandas, SiPython, SiC } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Quantitative Sock Trading",
    githubLink: "https://github.com/user/repo1",
    description: "Developed a Python trading strategy with 15% ROI in 4 weeks, using machine learning to predict sock prices. Backtested strategies, built an automated bot with 68% win rate, and visualized performance.",
  },
  {
    name: "Eaton Energy Analysis with Interactive Dashboard",
    date: "/path/to/image2.jpg",
    githubLink: "https://github.com/user/repo2",
    description: "Built an automated pipeline to monitor energy data from 100+ smart breakers, optimize usage, and forecast peak demand with 85% accuracy. Created visualizations and a real-time dashboard for energy insights.",
  },
  {
    name: "Energy Production and Weather Correlation Analysis with Dashboard",
    date: "/path/to/image3.jpg",
    githubLink: "https://github.com/user/repo3",
    description: "Developed a Python pipeline integrating 15,000+ solar data points with weather patterns, improving energy efficiency. Analyzed trends, built visualizations, and forecasted energy production with 92% accuracy. Recommended system optimizations, increasing efficiency by 7-10%.",
  },
  {
    name: "Steganography",
    date: "/path/to/image3.jpg",
    githubLink: "https://github.com/user/repo4",
    description: "Implemented a steganography algorithm to encode text messages in digital images using the LSB technique. Built a command-line tool for encoding/decoding, with dynamic memory management and error handling",
  },
  {
    name: "Custom Heap Allocator in C",
    date: "/path/to/image3.jpg",
    githubLink: "https://github.com/user/repo5",
    description: "Designed and implemented a custom heap allocator in C using sbrk and linked lists for efficient memory management, optimizing allocation and deallocation.",
  },
];

const ProjectsSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 15 },
        640: { slidesPerView: 3, spaceBetween: 15 },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
        dynamicBullets: false,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[340px] sm:h-[440px]"
    >
      {projects.map((item, index) => (
        <SwiperSlide key={`${item.name}-${index}`}>
          <div className="bg-indigo-500 bg-opacity-10 h-full min-h-[340px] sm:min-h-[440px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
            <div className="flex flex-col justify-between h-full">
              <div className="font-semibold">{item.name}</div>
              <p className="text-sm my-2">{item.description}</p>
              
              <div className="flex items-center gap-2">
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-gray-700 hover:text-black"
                  title="View on GitHub"
                >
                  <FaGithub />
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSlider;
