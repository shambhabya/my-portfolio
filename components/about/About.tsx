import Image from 'next/image';
import img from "@/public/mainIcons.svg"


const About = () => {

  
  return (
    <div className="flex flex-col sm:flex-row" >

      {/* Education column */}
    <div className="w-1/2 flex flex-col pl-4 sm:pl-8 md:pl-24" >

      <div className=" bg-red-200 h-screen">

        <h2 className="text-3xl font-bold text-black mb-6">About Me</h2>
        <div className=" text-xl">
          <p className=" leading-relaxed mb-4">Hey there!   I'm a final year engineering student by day, and a full-stack developer by night (or whenever that pesky problem-solving itch needs scratching)..</p>
          <p className=" leading-relaxed mb-4">I thrive on building products that make a difference. Whether it's crafting user-friendly interfaces or wrangling data on the back-end, I'm all about creating solutions that are both powerful and polished.</p>
          <p className="leading-relaxed mb-4">  My weapon of choice? The mighty MERN stack (MongoDB, Express, React, Node.js). I wield it with passion and proficiency, building full-stack applications from the ground up.</p>
          <p className="leading-relaxed mb-4">When I'm not coding, you might find me buried in a good engineering textbook (gotta keep those gears turning!), or maybe brainstorming the next big thing with a cup of coffee in hand.</p>

          <p className="leading-relaxed mb-4">So, if you're looking for a developer who's as passionate about problem-solving as the latest tech trends, then let's chat!</p>
        </div>

      </div>


      <div className=" h-screen ">
        <h2 className="text-2xl font-bold mb-4">Skills</h2>
          <ul className="list-disc pl-4">
            <li className="mb-2">Skill 1</li>
            <li className="mb-2">Skill 2</li>
            <li className="mb-2">Skill 3</li>
            {/* Add more skills as needed */}
          </ul>
      </div>

    </div>


      {/* Skills column */}
      <div className=" w-1/2 flex sticky bg-blue-100 top-14 h-screen" >
      <Image  src={img}></Image>

          
      </div>

    </div>
  );
};

export default About;
