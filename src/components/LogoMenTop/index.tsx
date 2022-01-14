import React from "react";
import { Link } from "react-router-dom";
import { AreaLogo } from "./style";

interface LogoTipo{
    caminho?:string;
}


const LogoMenTop : React.FC<LogoTipo> = (props)=>{
    return(
        <AreaLogo>
            <Link to="/">
                {props.caminho ? <img src={props.caminho} /> : 'Sem Imagem'}
            </Link>
        </AreaLogo>
    )
}

export default LogoMenTop;