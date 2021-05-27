import React, { Component } from 'react'
import Lottie from 'react-lottie'
import animationData from './introvert-logo.json'

class UncontrolledLottie extends Component {

  render(){

    const defaultOptions = {
      loop: false,
      autoplay: true, 
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    };

    return(
      <div>
        <Lottie options={defaultOptions} width={"100%"} />
      </div>
    )
  }
}

export default UncontrolledLottie