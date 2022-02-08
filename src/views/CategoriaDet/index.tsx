import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardProduto from '../../components/CardProduto';
import FooterPag from '../../components/FooterPag';
import HeaderLiv from '../../components/HeaderLiv';
import { api } from '../../services/api';
import { CatDet } from './style';

const CategoriaDet : React.FC = () => {

    interface ProductModel{
        id?: number;
        title?: string;
        description?: string;
        imgUrl?: string;
        price?:number;
        rating?:number;
        discount?:number;
    }

    interface Category{
        id?: number;
        name?: string;
        products: ProductModel[];
    }

    const[data, setData] = useState<Category>({} as Category);
    const{ id } = useParams();

    useEffect(()=>{
        api.get(`categories/${id}`).then(response =>{
            setData(response.data)
        }).catch(err =>{console.log(err)})
    },[id])

    return(
        <CatDet>
            <HeaderLiv />
                <div className="categ-main">
                    <ul>
                        {data.products ? data.products.map((it) => 
                        {return < CardProduto
                                    id = {it.id}
                                    title = {it.title}
                                    price = {it.price}
                                    rating = {it.rating}
                                    imgUrl = {it.imgUrl} 
                                /> }
                        ):()=> 
                        {return <p>Não há livros na categoria</p>} }
                    </ul>
                </div>
            <FooterPag />
        </CatDet>
    )
}

export default CategoriaDet;