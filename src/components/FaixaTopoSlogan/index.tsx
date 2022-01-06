import React from 'react';
import { Link } from 'react-router-dom';
import { IconeLeitorLivro, IconeCafe, EstrelaCheia, EstrelaMetadeCheia, FunilDolar } from '../FontAweSomeIcones';
import { Container } from './style';

const FaixaTopoSlogan : React.FC = (props)=>{
    return(
        <Container>
            <IconeLeitorLivro />
            <FunilDolar/>
            {props.children? props.children : 'Sem Texto Definido'}
            <Link to ="/dashboard" className="logn">Login/Área Restrita</Link>
        </Container>
        
    )
}

export default FaixaTopoSlogan;