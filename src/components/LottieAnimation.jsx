import React from 'react'
import Lottie from 'lottie-react'

const LottieAnimation = ({ 
  animationData, 
  loop = true, 
  autoplay = true, 
  className = "", 
  style = {},
  onComplete,
  speed = 1
}) => {
  return (
    <div className={className} style={style}>
      <Lottie
        animationData={animationData}
        loop={loop}
        autoplay={autoplay}
        onComplete={onComplete}
        speed={speed}
      />
    </div>
  )
}

export default LottieAnimation
