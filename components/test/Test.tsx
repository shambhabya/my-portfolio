"use client";
import React from 'react'
import { useMotionValue, motion } from 'framer-motion';

function Test() {

    const x = useMotionValue(0); // Initial x position is 0
    
      // Animate x position on button click
      const handleClick = () => {
        x.set(150); // Move the x position to 100
        console.log(x);
      };

  return (
    <div>
        <div className=''>
          <button onClick={handleClick} className=' border-gray-600 bg-orange-600 rounded-sm'>Move Right</button>
          <motion.div style={{ y: x }} className="flex">
            This div will move to the right!
          </motion.div>
        </div>
      
    </div>
  )
}

export default Test;