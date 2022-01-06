import React from "react";
import { AreaLogo } from "./style";

interface LogoTipo{
    caminho?:string;
}


const LogoMenTop : React.FC<LogoTipo> = (props)=>{
    return(
        <AreaLogo>
            {props.caminho ? <img src={props.caminho} /> : 'Sem Imagem'}
        </AreaLogo>
    )
}

export default LogoMenTop;