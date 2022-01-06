import React from 'react';
import { LupaPesquisa } from '../FontAweSomeIcones';
import { Barra } from './style';



const BarraPesquisaArr : React.FC = (props)=>{
    return(
        <Barra>
            <input type="text" placeholder="Pesquisar Produto"/>
            <button type="button">
                <LupaPesquisa />
            </button>
        </Barra>
        
    )
}

export default BarraPesquisaArr;