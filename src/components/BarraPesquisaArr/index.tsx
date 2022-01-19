import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductModel } from '../../auxiliar-types';
import { api } from '../../services/api';
import { LupaPesquisa } from '../FontAweSomeIcones';
import { Barra } from './style';



const BarraPesquisaArr : React.FC = (props)=>{

    const[data,setData] = useState('');
    const[dataAux, setDataAux] = useState<ProductModel[]>([]);
    const[auxClass, setAuxClass] = useState(false);

    useEffect(()=>{
        api.get(`products/description?description=${data}`).then(response =>{
            // setIsLoad(true);
            console.log(response);
            setDataAux(response.data)
        }).finally();
    },[data])

    return(
        <Barra>
            <input 
                type="text" 
                placeholder="Pesquisar Produto" 
                onChange={(e: any) => setData( e.target.value )}
                onClick={() =>setAuxClass(!auxClass)}
            />
            <button type="button">
                <LupaPesquisa />
            </button>
            <div className={auxClass? "men-pes" : "men-pes-inv"}>
                {data != '' ?
                    dataAux.map((il)=>{
                        return <li>
                                    <Link to={`/produtos/${il.id}`}>{il.title}</Link>
                                </li>})
                        : <li>Sem Resultado</li>}
            </div>
        </Barra>
        
    )
}

export default BarraPesquisaArr;