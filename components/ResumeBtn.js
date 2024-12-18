import Image from "next/Image";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <a 
        href="/Resume.pdf" // Replace with the actual path to your resume file
        download="Resume.pdf" // The file will download with this name
        className="relative w-[130px] h-[130px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={'/resume-text.png'}
          width={120}
          height={125}
          alt="Resume"
          className="animate-spin-slow w-full h-full max-w-[120px] max-h-[125px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" />
      </a>
    </div>
  );
};

export default ProjectsBtn;
