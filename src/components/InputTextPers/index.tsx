import React from 'react';
import { InptP } from './style';

interface Inptp{
    plac?:string;
    typ?:string;
}

const InputTextPers: React.FC<Inptp> = (props)=>{
    return(
        <InptP type={props.typ ? props.typ : 'text'} placeholder={props.plac? props.plac : 'Sem Mensagem Definida'}/>
    )
}

export default InputTextPers;