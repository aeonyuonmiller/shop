import React, { useState } from 'react'
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
            <div className='absolute'><input type="range" /></div>

            <button onClick={togglePlayPause}>{ isPlaying ? <Pause /> : <Play /> }</button>

            <span className='title'><h5>{title}</h5></span>
        
    </div>
  )
}

export default AudioPlayer