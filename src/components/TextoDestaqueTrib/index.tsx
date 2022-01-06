import React from 'react';
import { TxtDes } from './style';

interface TextoDes{
    textoDes?:string;
}

const TextoDestaqueTrib : React.FC<TextoDes> = (props)=>{
    return(
        <TxtDes>
            {props.textoDes ? props.textoDes : 'Nenhuma mensagem encontrada!'}
        </TxtDes>
    )
}

export default TextoDestaqueTrib;