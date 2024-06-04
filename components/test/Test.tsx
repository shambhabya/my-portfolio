"use client";
import React, { useRef } from "react";
import { useMotionValue, motion, useTransform, useScroll } from "framer-motion";

function Test() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollY } = useScroll({ target: ref });
  const backgroundColor = useTransform(scrollY, [0, 100], ["#f00", "#00f"]);

  return (
    <motion.div
      drag="x"
      style={{ backgroundColor, height: "100px", widows: "100px" }}
      ref={ref}
      onClick={() => console.log(scrollY)}
    />
  );
}

export default Test;
