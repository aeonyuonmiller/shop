import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'


import Pause from './svgs/Pause'
import Play from './svgs/Play'


const AudioPlayer = ({ title, url }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    }

    // play/pause animation
    const transition = {
        intro: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0, transition:{ ease: "easeOut", duration: 0.2 }},
        exit: { opacity: 0, y: -100, transition:{ ease: "easeIn", duration: 0.5 }}
      }

  return (
    <div className='audioplayer'>
        <audio src={url} preload="metadata" />
            <div className='absolute'><input type="range" tabIndex={2} /></div>
                <button onClick={togglePlayPause}>
                    <AnimatePresence>
                    { isPlaying 
                        ? <motion.div variants={transition} initial="intro" animate="show" exit="exit"><Pause/></motion.div> 
                        : <motion.div variants={transition} initial="intro" animate="show" exit="exit"><Play/></motion.div> 
                    }
                    </AnimatePresence>
                </button>
            <span className='title'><h5>{title}</h5></span> 
    </div>
  )
}

export default AudioPlayer