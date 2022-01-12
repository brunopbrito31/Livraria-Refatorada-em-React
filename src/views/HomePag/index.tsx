import React, { useEffect, useState } from 'react';
import CardProduto from '../../components/CardProduto';
import FooterPag from '../../components/FooterPag';
import HeaderLiv from '../../components/HeaderLiv';
import { api } from '../../services/api';
import { Home } from './style';

interface ProductModel{
    id?: number;
    title?: string;
    description?: string;
    imgUrl?: string;
    price?:number;
    rating?:number;
    discount?:number;
}

const HomePag : React.FC = ()=>{

    const[data, setData] = useState<ProductModel[]>([]);
    const[isLoad, setIsLoad] = useState(true);
    const[chamada, setChamada] = useState(false);
    const token = localStorage.getItem('chave-mestra-br');
    // const token = 'Bearer '+localStorage.getItem('chave-mestra-br');

    
    useEffect(()=>{
        api.get('products').then(response =>{
            // setIsLoad(true);
            console.log(response);
            setData(response.data)
        }).finally(() => setIsLoad(false));
    })

    return(
        <Home>
            <HeaderLiv />

            {/* <section></section> */}
           
            <div className="area-cards">
                {isLoad ? ( [1,2,3,4].map(() =>  <CardProduto loading={true} /> )): (
                     data.map((el)=>{
                        return  < CardProduto
                                  id = {el.id}
                                  title = {el.title}
                                  price = {el.price}
                                  rating = {el.rating}
                                  imgUrl = {el.imgUrl}/>
                    })
                )}
            </div>

            <FooterPag />

        </Home>
    )
}

export default HomePag;