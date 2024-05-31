import React from 'react'

function Experience() {
  return (
    <div className=' '>
        
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center px-[10vw] pt-1.5"
            
          >
            {/* EXPERIENCE TITLE */}
            <h1 className=' text-[2vw]  text-gray-100 pt-10'
            >
              EXPERIENCE
            </h1>
            {/* EXPERIENCE LIST */}
            <div
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between ">


                {/* LEFT */}
                <div className="relative pb-1 group w-1/3 flex flex-col sm:flex-row sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6  lg:block lg:group-hover:bg-slate-800/50  lg:group-hover:drop-shadow-2xl"></div>
                        <header className="z-10 mb-2 mt-1 text-base font-semibold uppercase tracking-wide text-slate-500 " >
                            2018 — Present
                        </header>
                        <div className="z-10 flex-1">
                            <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                                <a className="flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  text-base">
                                
                                Senior Developer
                                </a>
                            </div>
                            <div>
                                <div className="text-slate-500" >Senior Engineer</div>
                            </div>
                            <div>
                                <div className="text-slate-500" >Engineer</div>
                            </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-gray-200">Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.</p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {/* Add list items for each technology with Tailwind CSS styling */}
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Node</div></li>
                            {/* Repeat for other technologies */}
                            </ul>
                    </div>
                 </div>


                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2 sm:mr-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between ">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>


                {/* RIGHT */}
                <div className="relative pb-1 group w-1/3 flex flex-col sm:flex-row sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6  lg:block lg:group-hover:bg-slate-800/50  lg:group-hover:drop-shadow-2xl"></div>
                        <header className="z-10 mb-2 mt-1 text-base font-semibold uppercase tracking-wide text-slate-500 sm:mr-2" >
                            2018 — Present
                        </header>
                        <div className="z-10 flex-1">
                            <h3 className="font-medium leading-snug text-slate-200">
                            <div>
                                <a className="flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  text-base">
                                
                                Senior Developer
                                </a>
                            </div>
                            <div>
                                <div className="text-slate-500" >Senior Engineer</div>
                            </div>
                            <div>
                                <div className="text-slate-500" >Engineer</div>
                            </div>
                            </h3>
                            <p className="mt-2 text-sm leading-normal text-white">Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and spearheading the development of internal tools.</p>
                            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                            {/* Add list items for each technology with Tailwind CSS styling */}
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">React</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">JavaScript</div></li>
                            <li className="mr-1.5 mt-2"><div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">Node</div></li>
                            {/* Repeat for other technologies */}
                            </ul>
                    </div>
                 </div>

              </div>
              {/* EXPERIENCE LIST ITEM to add other experiences*/}
              
            </div>
          </div>
       
    
    </div>
  )
}

export default Experience