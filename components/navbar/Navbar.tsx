"use client";

const Navbar = () => {
  return (
    <nav className=" p-4 fixed w-full bg-slate-100 z-20">
      <div className="container px-16">
        <ul className="flex  text-gray-500 space-x-6 justify-center">
          <li className="hover:bg-slate-100"><a href="#shambhabya">Shambhabya Medhi</a></li>  
          <li className="hover:bg-slate-100"><a href="#about">About Me</a></li>
          <li className="hover:bg-slate-100"><a href="#resume">Resume</a></li>
          <li className="hover:bg-slate-100"><a href="#experience">Experience</a></li>
          <li className="hover:bg-slate-100"><a href="#projects">Projects</a></li>
        </ul>

        {/* <div className="text-gray-400 h-screen w-1/12 fixed left-0 top-0 pt-16">
      <div className="flex flex-col items-center">
        <a
          href="https://www.instagram.com/your_instagram"
          target="_blank"
          rel="noopener noreferrer"
          className='pb-3'
        >
          <FaInstagram className="text-3xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/your_linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className='pb-3'
        >
          <FaLinkedin className="text-3xl" />
        </a>
        <a
          href="https://github.com/your_github"
          target="_blank"
          rel="noopener noreferrer"
          className='pb-3'
        >
          <FaGithub className="text-3xl" />
        </a>
        
        <a
          href="mailto:your_email@example.com"
          target="_blank"
          rel="noopener noreferrer"
          className='pb-3'
        >
          <FaEnvelope className="text-3xl" />
        </a>
      </div>
    </div> */}
      </div>

      
    </nav>
  );
};

export default Navbar;
