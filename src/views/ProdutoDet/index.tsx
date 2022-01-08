import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

interface ProductModel{
    id?: number;
    title?: string;
    description?: string;
    imgUrl?: string;
    price?:number;
    rating?:number;
    discount?:number;
}

const ProdutoDet : React.FC = () => {

    const[data, setData] = useState<ProductModel>({} as ProductModel);
    const[isLoad, setIsLoad] = useState(false);
    const[chamada, setChamada] = useState(false);
    const token = localStorage.getItem('chave-mestra-br');
    const{ id } = useParams();
    
    useEffect(()=>{
        api.get(`products/${id}`).then(response =>{
            console.log(response);
            setData(response.data)
        })
    })



    return(
        <div>
            <h1>Pagina de detalhe de produto</h1> 
            Id do Produto: {data.id} <br/>
            Id do Produto: {data.title} <br/>
            Id do Produto: {data.description} <br/>
            Id do Produto: {data.imgUrl} <br/>
            Id do Produto: {data.price} <br/>
            Id do Produto: {data.rating} <br/>
            Id do Produto: {data.discount} <br/>

        </div>
    )
}

export default ProdutoDet;