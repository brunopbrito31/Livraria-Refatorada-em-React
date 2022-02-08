import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CategoryModel } from '../../auxiliar-types';
import CardProduto from '../../components/CardProduto';
import FooterPag from '../../components/FooterPag';
import HeaderLiv from '../../components/HeaderLiv';
import { api } from '../../services/api';
import { CatDet } from './style';

const CategoriaDet : React.FC = () => {

    const[data, setData] = useState<CategoryModel>({} as CategoryModel);
    const{ id } = useParams();

    const CardNoBooks =
    <p>Não há livros na categoria</p>

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
                        ): CardNoBooks }
                    </ul>
                </div>
            <FooterPag />
        </CatDet>
    )
}

export default CategoriaDet;