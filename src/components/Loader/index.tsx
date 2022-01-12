import React from 'react';
// import Lottie from 'react-lottie';
import animationData from '../../lotties/circle.json';
import Lottie from 'react-lottie';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationSpeed: 0.5,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const Loader: React.FC = () => {
    return(
        <div>
            <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
            />

        </div>
    )
}

export default Loader;