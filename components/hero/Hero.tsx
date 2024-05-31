"use client";
import Boy from "@/components/hero/boy.json";
import img1 from "@/public/img1.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" flex flex-col items-center h-screen lg:flex-row bg-gradient-to-b from-slate-100 to-red-50">
      <div className=" w-1/2 flex justify-center items-center ">
        <div className=" text-black mb-20">
          <div className=" text-[5vmax] font-bold mb-2 ">
            Hello{" "}
            <span role="img" aria-label="wave" className=" wave">
              👋
            </span>
          </div>
          <div className="text-[5vmax] font-bold mb-2">
            I'm <span className=" text-red-400">Shambhabya </span>
          </div>
        </div>
      </div>

      <div className=" w-1/2 flex justify-center items-center">
        <div className=" w-3/5">
          <Image src={img1} alt="profile-pic"></Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;
