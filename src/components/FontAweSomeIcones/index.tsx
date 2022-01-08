import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faBookReader, faFunnelDollar, faStar, faStarHalf, faSearch, faCubes, faChartLine, faGlobe} from '@fortawesome/free-solid-svg-icons'
import { CubesIco, EstCheia, EstMetade, Redes } from './style';
import { faGitSquare, faLinkedin, faWhatsappSquare } from '@fortawesome/free-brands-svg-icons';

export const IconeLeitorLivro : React.FC = ()=>{
    return(
        <FontAwesomeIcon icon={faBookReader} />
    )
}

export const IconeCafe : React.FC = ()=>{
    return(
        <FontAwesomeIcon icon={faCoffee} />
    )
}

export const FunilDolar: React.FC = ()=>{
    return(
        <FontAwesomeIcon icon={faFunnelDollar} />
    )
}

export const EstrelaCheia: React.FC = ()=>{
    return(
        <EstCheia>
            <FontAwesomeIcon icon={faStar} />
        </EstCheia>
    )
}

export const EstrelaMetadeCheia: React.FC = ()=>{
    return(
        <EstMetade>
            <FontAwesomeIcon icon={faStarHalf} />
        </EstMetade>
    )
}

export const LupaPesquisa: React.FC = ()=>{
    return(
        <FontAwesomeIcon icon={faSearch} />
    )
}

export const WhatsApp: React.FC = ()=>{
    return(
        <Redes>
            <FontAwesomeIcon className="redes-ico" icon={faWhatsappSquare} />
        </Redes>
    )
}

export const LinkedIn: React.FC = ()=>{
    return(
        <Redes>
            <FontAwesomeIcon className="redes-ico" icon={faLinkedin} />
        </Redes>
    )
}

export const GitHub: React.FC = ()=>{
    return(
        <Redes>
            <FontAwesomeIcon className="redes-ico" icon={faGitSquare} />
        </Redes>
    )
}

export const Cubes: React.FC = ()=>{
    return(
        <CubesIco>
            <FontAwesomeIcon className="cubes-ico" icon={faCubes} />
        </CubesIco>
    )
}

export const Adm: React.FC = ()=>{
    return(
        <CubesIco>
            <FontAwesomeIcon className="cubes-ico" icon={faChartLine} />
        </CubesIco>
    )
}

export const Globe: React.FC = ()=>{
    return(
        <CubesIco>
            <FontAwesomeIcon className="cubes-ico" icon={faGlobe} />
        </CubesIco>
    )
}

