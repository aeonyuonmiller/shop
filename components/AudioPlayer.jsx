import React, { useState } from 'react'
import { AnimatePresence } from 'framer-motion'


import Pause from './svgs/Pause'
import Play from './svgs/Play'


const AudioPlayer = ({ title, url }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    }

  return (
    <div className='audioplayer'>
        <audio src={url} preload="metadata" />
            <div className='absolute'><input type="range" tabIndex={2} /></div>

            <AnimatePresence exitBeforeEnter={true}>
            <button onClick={togglePlayPause}>
                { isPlaying ? <Pause /> : <Play /> }
            </button>
            </AnimatePresence>

            <span className='title'><h5>{title}</h5></span>
        
    </div>
  )
}

export default AudioPlayer