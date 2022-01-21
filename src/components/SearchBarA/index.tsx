import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductModel } from '../../auxiliar-types';
import { api } from '../../services/api';
import { SearchIcon } from '../FontAweSomeIcones';
import { SeaBarA } from './style';

interface SeaBarModel {
    placeholder?: string;
    pathapi?: string;
    noresultmsg?: string;
    
}

const SearchBarA : React.FC<SeaBarModel> = (props)=>{

    const[filterOfSearch,setFilterOfSearch] = useState('');

    const[data, setData] = useState<ProductModel[]>([]);
    const[isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        api.get(`${props.pathapi}${filterOfSearch}`).then(response =>{
            console.log(response.data)
            setData(response.data)
        }).finally();
    },[filterOfSearch])

    function ResultItem (il:any) {
        return <li><Link to={`/produtos/${il.id}`}>{il.title}</Link></li>
    }

    function NoResultItem (msg?: string | null) {
        return msg ? msg: <li>Sem Resultado</li>
    }

    return(
        <SeaBarA> 
            <input 
                type="text" 
                placeholder={props.placeholder ? props.placeholder : 'Pesquisar'} 
                onChange={(e: any) => setFilterOfSearch( e.target.value )}
                onClick={() =>setIsVisible(!isVisible)}
            />
            <button type="button">
                <SearchIcon />
            </button>
            <div className={isVisible? "men-pes" : "men-pes-inv"}>
                {
                    filterOfSearch != '' ? 
                    data.map((il)=>{ return ResultItem(il)}) 
                    : 
                    NoResultItem(props.noresultmsg)
                }
            </div>
        </SeaBarA>
        
    )
}

export default SearchBarA;