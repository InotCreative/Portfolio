import Link from "next/link";
import { RiInstagramLine, RiFacebookBoxLine, RiLinkedinLine } from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg relative z-50"> {/* Increased z-index */}
      <Link href={'https://www.linkedin.com/in/bastolaabinash'} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.instagram.com/abi_bastola/'} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100094304705494'} className="hover:text-accent transition-all duration-300">
        <RiFacebookBoxLine />
      </Link>
    </div>
  );
};

export default Socials;
