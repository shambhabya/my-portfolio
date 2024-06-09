import React from "react";

function Experience() {
  return (
    <div className="bg-gradient-to-b from-slate-100 to-cyan-100 pb-20">
      <div className="flex flex-col gap-8 justify-center px-[10vw] pt-1.5">
        <h1 className=" text-3xl font-bold  text-black pt-10">EXPERIENCE</h1>
        <div>
          {/* EXPERIENCE LIST ITEM */}
          <div className="flex justify-between m-4">
            {/* LEFT */}
            <div className="relative pb-1 group md:w-1/3 flex flex-col lg:flex-row sm:gap-8 md:gap-4 hover:!opacity-100 group-hover/list:opacity-50 ">
              <div className="absolute -inset-x-4 -inset-y-4 z-0  rounded-md transition motion-reduce:transition-none lg:-inset-x-6  block group-hover:bg-slate-800/50  group-hover:drop-shadow-2xl"></div>
              <header className="lg:w-1/3 z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 group-hover:text-slate-50">
                June 2023 - September 2023
              </header>
              <div className="z-10 flex-1">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a className="flex items-baseline font-medium leading-tight text-black hover:text-teal-300 focus-visible:text-teal-300  text-base">
                      Frontend Developer
                    </a>
                  </div>
                  <div>
                    <div className="text-slate-500">UjuCode</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Guwahati</div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-gray-700 group-hover:text-white">
                  During my internship as a frontend developer, I utilized React
                  to create responsive web applications and integrated data
                  retrieval from external APIs using Axios, enhancing a
                  badminton live score and data management website. I
                  collaborated with backend developers, implemented modern UI/UX
                  design principles, ensured cross-browser compatibility,
                  leveraged Redux for state management, and participated in code
                  reviews to maintain code quality.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {/* Add list items for each technology with Tailwind CSS styling */}
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      JavaScript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Tailwind
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Redux
                    </div>
                  </li>
                  {/* Repeat for other technologies */}
                </ul>
              </div>
            </div>

            {/* CENTER */}
            <div className="hidden w-1/6 md:flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 sm:mr-2"></div>
              </div>
            </div>
            {/* RIGHT */}
            <div className="hidden md:block w-1/3 "></div>
          </div>

          {/* EXPERIENCE LIST ITEM */}
          <div className="flex justify-between m-4">
            {/* RIGHT */}
            <div className="hidden md:block w-1/3 "></div>

            {/* CENTER */}
            <div className="hidden w-1/6 md:flex justify-center">
              {/* LINE */}
              <div className="w-1 h-full bg-gray-600 rounded relative">
                {/* LINE CIRCLE */}
                <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 sm:mr-2"></div>
              </div>
            </div>

            {/* LEFT */}
            <div className="relative pb-1 group md:w-1/3 flex flex-col lg:flex-row sm:gap-8 md:gap-4 hover:!opacity-100 group-hover/list:opacity-50 ">
              <div className="absolute -inset-x-4 -inset-y-2 z-0  rounded-md transition motion-reduce:transition-none lg:-inset-x-6  block group-hover:bg-slate-800/50  group-hover:drop-shadow-2xl"></div>
              <header className="lg:w-1/3 z-10 mb-2 mt-1 text-sm font-semibold uppercase tracking-wide text-slate-500 group-hover:text-slate-50">
                June 2022 - July 2022
              </header>
              <div className="z-10 flex-1">
                <h3 className="font-medium leading-snug text-slate-200">
                  <div>
                    <a className="flex items-baseline font-medium leading-tight text-black hover:text-teal-300 focus-visible:text-teal-300  text-base">
                      Frontend Developer
                    </a>
                  </div>
                  <div>
                    <div className="text-slate-500">APDCL</div>
                  </div>
                  <div>
                    <div className="text-slate-500">Guwahati</div>
                  </div>
                </h3>
                <p className="mt-2 text-sm leading-normal text-gray-700 group-hover:text-white">
                  During my internship, I created a Python script to analyze
                  transformer and consumer data, which resulted in a 20%
                  reduction in power wastage. Additionally, I developed a
                  ReactJS web app that integrated the TomTom API for transformer
                  mapping, increasing user engagement by 30%.
                </p>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used"
                >
                  {/* Add list items for each technology with Tailwind CSS styling */}
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      JavaScript
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Tailwind
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      Python
                    </div>
                  </li>
                  {/* Repeat for other technologies */}
                </ul>
              </div>
            </div>
          </div>

          {/* EXPERIENCE LIST ITEM to add other experiences*/}
        </div>
      </div>
    </div>
  );
}

export default Experience;
