<nav className="flex flex-col items-center xl:justify-center gap-y-2 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-12 xl:max-w-md xl:h-[80vh]">
  <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-4 px-2 md:px-10 xl:px-0 h-[80px] xl:h-max py-2 bg-white/10 backdrop-blur-sm text-xl xl:text-2xl xl:rounded-full">
    {navData.map((link, index) => {
      return (
        <Link className={`${link.path === pathName && 'text-accent'} relative flex items-center group hover:text-accent transition-all duration-300`} href={link.path} key={index}>
          
          <div className="absolute pr-10 right-0 hidden xl:group-hover:flex">
            <div className="bg-white relative flex text-primary items-center p-[4px] rounded-[3px] z-10">
              <div className="text-[10px] leading-none font-semibold capitalize">{link.name}</div>
            </div>

            <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute top-[50%] left-[calc(100%-45px)] transform -translate-y-1/2 z-0"></div>
          </div>

          <div className="text-xl">{link.icon}</div> {/* Adjust icon size here */}
        </Link>
      );
    })}
  </div>
</nav>
