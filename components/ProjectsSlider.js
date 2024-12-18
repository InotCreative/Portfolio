import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  SiTensorflow,
  SiJupyter,
  SiPandas,
  SiPython,
  SiC
} from "react-icons/si";
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
} from "react-icons/rx";

const projects = [
  {
    name: "Quantitative Sock Trading",
    image: "/path/to/image1.jpg",
    techStack: [<SiTensorflow />, <SiJupyter />, <SiPandas />, <SiPython />],
  },
  {
    name: "Eaton Energy Analysis with Interactive Dashboard",
    image: "/path/to/image2.jpg",
    techStack: [<SiTensorflow />, <SiJupyter />, <SiPandas />, <SiPython />],
  },
  {
    name: "Energy Production and Weather Correlation Analysis with Dashboard",
    image: "/path/to/image3.jpg",
    techStack: [<SiTensorflow />, <SiJupyter />, <SiPandas />, <SiPython />],
  },
  {
    name: "Steganography",
    image: "/path/to/image3.jpg",
    techStack: [<SiC />],
  },
  {
    name: "Custom Heap Allocator in C",
    image: "/path/to/image3.jpg",
    techStack: [<SiC />],
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
        dynamicBullets: false, // Adjust based on Swiper docs
      }}
      modules={[FreeMode, Pagination]}
      className="h-[340px] sm:h-[440px]"
    >
      {projects.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-indigo-500 bg-opacity-10 h-full min-h-[340px] sm:min-h-[440px] rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89, 65, 169, 0.15)] transition-all duration-300">
            <div className="flex flex-col justify-between h-full">
              <div className="font-semibold">{item.name}</div>
              <p className="text-xs" style={{ whiteSpace: 'pre-line' }}>
                {item.techStack.map((icon, index) => (
                  <span key={index} className="inline-block mx-1">{icon}</span>
                ))}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ProjectsSlider;
