import React from 'react';
import { EstrelaCheia } from '../FontAweSomeIcones';
import { CardPro } from './style';

interface ProductModel{
    id?: number;
    title?: string;
    description?: string;
    imgUrl?: string;
    price?:number;
    rating?:number;
    discount?:number;
}

function renderizarEstrelas(nume: number){
    for(let i = 0; i < nume; i++){
        return ( <EstrelaCheia />)
    }
}

const CardProduto: React.FC<ProductModel> = (props)=>{

    return(
        <CardPro>
            {props.discount? <div>{props.discount * 100} % de desconto</div> : ''}
            <img src={props.imgUrl ? props.imgUrl : "https://th.bing.com/th/id/OIP.duMffoTt9BtwEl5gBRpwKgHaEi?pid=ImgDet&rs=1"} />
            <div className="card-nome">
                {props.title ? props.title : 'Sem Titulo Definido'}
            </div>
            <div className="card-preco">
                {props.price ? `R$: ${props.price}` : 'Sem Preço Definido'}
            </div>
            <div>
                {props.rating ? renderizarEstrelas(props.rating) : 'Sem Avaliações'}
            </div>
        </CardPro>
    )
}

export default CardProduto;