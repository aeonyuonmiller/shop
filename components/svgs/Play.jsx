import React from "react";
import { motion } from 'framer-motion'

function Icon() {
  const transition = {
    intro: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition:{ ease: "easeOut", duration: 0.2 }},
    exit: { opacity: 0, y: -100, transition:{ ease: "easeIn", duration: 0.3 }}
  }
  return (
    <motion.svg
      variants={transition} initial="intro" animate="show" exit="exit"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="36"
      fill="none"
      viewBox="0 0 32 36"
    >
      <path
        fill="#FAFAFA"
        d="M2.795 35.584c.82 0 1.518-.328 2.338-.8l23.912-13.822c1.702-1.005 2.297-1.661 2.297-2.748 0-1.087-.595-1.743-2.297-2.728L5.133 1.644c-.82-.472-1.518-.78-2.338-.78C1.277.864.334 2.013.334 3.797V32.63c0 1.784.943 2.953 2.46 2.953z"
      ></path>
    </motion.svg>
  );
}

export default Icon;