import { type } from 'os';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductModel } from '../../auxiliar-types';
import CardProduto from '../../components/CardProduto';
import FooterPag from '../../components/FooterPag';
import HeaderLiv from '../../components/HeaderLiv';
import { api } from '../../services/api';
import { Home } from './style';

const HomePag : React.FC = ()=>{

    const[data, setData] = useState<ProductModel[]>([]);
    const[isLoad, setIsLoad] = useState(true);
    const[pageNo, setPageNo] = useState(0);
    const[totalEl, setTotalEl] = useState(0);
    const[qtPages,setQtPages] = useState(0);
    const qtElPag = 8;
    const final = [];

    function calcQtPages(qtTot: number, qtEle: number){
        console.log((qtTot/qtEle))
        if((qtTot/qtEle)%1 !=0){
            let valorAux = parseInt((qtTot/qtEle).toString().split('.')[0]);
            valorAux +=1;
            setQtPages(valorAux);
        }else{
            setQtPages(qtTot/qtEle);
        }
    }

    useEffect(()=>{
        api.get('products/total').then(response =>{
            setTotalEl(response.data);
            console.log('oi');
            calcQtPages(totalEl, qtElPag);
        }).finally();
    },[])


    useEffect(()=>{
        api.get(`/products?pageNo=${pageNo}&pageSize=${qtElPag}`).then(response =>{
            // setIsLoad(true);
            console.log(response);
            setData(response.data);
        }).finally(() => setIsLoad(false));
    },[pageNo])

    

    for(let i = 0 ; i < qtPages ; i++){
        final.push(<li><button onClick={() => setPageNo(i)}>{i+1}</button></li>)
    }

    return(
        <Home>
            <HeaderLiv />

            {/* <section></section> */}
           
            <div className="area-cards">
                {isLoad ? ( [1,2,3,4].map(() =>  <CardProduto loading={true} /> )): (
                    data.map((el) =>
                    {
                        return  < CardProduto
                                    id = {el.id}
                                    title = {el.title}
                                    price = {el.price}
                                    rating = {el.rating}
                                    imgUrl = {el.imgUrl}
                                />
                    })
                )}
                
                <div className="are-botoes">
                    <ul>{final}</ul>
                </div>

            </div>

            <FooterPag />

        </Home>
    )
}

export default HomePag;