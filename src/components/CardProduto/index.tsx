import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EstrelaCheia, EstrelaMetadeCheia } from '../FontAweSomeIcones';
import Loader from '../Loader';
import { CardPro } from './style';

interface ProductModel{
    id?: number;
    title?: string;
    description?: string;
    imgUrl?: string;
    price?:number;
    rating?:number;
    discount?:number;
    loading?:boolean;
}

    




const CardProduto: React.FC<ProductModel> = (props)=>{

    const final = [];
    const[ratingAux, setRatingAux] = useState(0);
    const[halfStar, setHalfStar] = useState(0);

    for(let i = 0; i < 5; i++){
        final.push( <li><EstrelaCheia /></li>)
    }

    return(
        <CardPro>
            {!props.loading?(
                <Link to={props.id ? `/produtos/${props.id}` : 'sem-link'}>
                {props.discount? <div>{props.discount * 100} % de desconto</div> : ''}
                <img src={props.imgUrl ? props.imgUrl : "https://th.bing.com/th/id/OIP.duMffoTt9BtwEl5gBRpwKgHaEi?pid=ImgDet&rs=1"} />
                <div className="card-nome">
                    {props.title ? props.title : 'Sem Titulo Definido'}
                </div>
                <div className="card-preco">
                    {props.price ? `R$: ${props.price}` : 'Sem Preço Definido'}
                </div>
                <div className="card-rating">
                    {props.rating ? <ul>{final}</ul> : 'Sem Avaliações'}
                    {halfStar == 1 ? <EstrelaMetadeCheia /> : ''}
                </div>
            </Link>
            ):(
                <Loader />
            )}
            
        </CardPro>
    )
}

export default CardProduto;