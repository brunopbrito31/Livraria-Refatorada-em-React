import React from 'react';
import animationData from '../../lotties/notfound.json';
import Lottie from 'react-lottie';
import { LodPgNtFound } from './style';

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationSpeed: 0.5,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

const LoaderPgNotFound: React.FC = () => {
    return(
        <LodPgNtFound>
            <Lottie 
                options={defaultOptions}
                // height={400}
                // width={400}
            />
            <div className="filtro">
                <div className="titulo">
                    Pagina Não Encontrada!
                </div>
            </div>
        </LodPgNtFound>
    )
}

export default LoaderPgNotFound;