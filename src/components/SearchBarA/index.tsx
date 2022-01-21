import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductModel } from '../../auxiliar-types';
import { api } from '../../services/api';
import { LupaPesquisa } from '../FontAweSomeIcones';
import { SeaBarA } from './style';


interface SeaBarModel {
    placeholder?: string;
    pathapi?: string;
    
}


const SearchBarA : React.FC<SeaBarModel> = (props)=>{

    // Filter of search
    const[data,setData] = useState('');

    const[dataAux, setDataAux] = useState<ProductModel[]>([]);
    const[auxClass, setAuxClass] = useState(false);

    useEffect(()=>{
        api.get(`${props.pathapi}=${data}`).then(response =>{
            setDataAux(response.data)
        }).finally();
    },[data])

    return(
        <SeaBarA> 
            <input 
                type="text" 
                placeholder={props.placeholder ? props.placeholder : 'Pesquisar'} 
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
        </SeaBarA>
        
    )
}

export default SearchBarA;



// const SearchBarA : React.FC<SeaBarModel> = (props)=>{

//     const[data,setData] = useState('');
//     const[dataAux, setDataAux] = useState<ProductModel[]>([]);
//     const[auxClass, setAuxClass] = useState(false);

//     useEffect(()=>{
//         api.get(`products/description?description=${data}`).then(response =>{
//             setDataAux(response.data)
//         }).finally();
//     },[data])

//     return(
//         <SeaBarA> 
//             <input 
//                 type="text" 
//                 placeholder={props.placeholder ? props.placeholder : 'Pesquisar'} 
//                 onChange={(e: any) => setData( e.target.value )}
//                 onClick={() =>setAuxClass(!auxClass)}
//             />
//             <button type="button">
//                 <LupaPesquisa />
//             </button>
//             <div className={auxClass? "men-pes" : "men-pes-inv"}>
//                 {data != '' ?
//                     dataAux.map((il)=>{
//                         return <li>
//                                     <Link to={`/produtos/${il.id}`}>{il.title}</Link>
//                                 </li>})
//                         : <li>Sem Resultado</li>}
//             </div>
//         </SeaBarA>
        
//     )
// }

// export default SearchBarA;