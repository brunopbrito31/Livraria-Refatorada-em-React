import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FooterPag from '../../components/FooterPag';
import HeaderLiv from '../../components/HeaderLiv';
import { api } from '../../services/api';
import { ProDeta } from './style';

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
    },[id])

    return(
        <ProDeta>
            <HeaderLiv />
            <div className="main-prod-det">
                <h2>{data.title}</h2>
                <div className="prod-det-sec1">
                    <div className="prod-det-img">
                        <img src={data.imgUrl} />
                    </div>
                    <div className="prod-det-inf">
                        <div className="prod-prop">
                            {data.rating}
                        </div>
                        <div className="prod-prop">
                            R$:{data.price}
                        </div>
                        <div className="prod-prop">
                            <form>
                                <input type="hidden" value={data.id} />
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                                <button type="button">Comprar</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div>
                    {data.description}
                </div>
            </div>
            <FooterPag />
        </ProDeta>
    )
}

export default ProdutoDet;