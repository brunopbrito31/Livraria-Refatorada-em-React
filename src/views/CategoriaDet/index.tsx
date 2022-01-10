import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../services/api';

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

    useEffect(()=>{
        api.get(`categories/${id}`).then(response =>{
            console.log(response);
            setData(response.data)
        }).catch(err =>{console.log(err)})
    })

    const{ id } = useParams();

    return(
        <div>
            Página de detalhe da categoria: {data.name} <br />

            Lista de Livros: <br />
            <ul>
                {data.products ? data.products.map((it) => {return <li>Livro:{it.title}</li>}) : ()=> {return <p>Não há livros na categoria</p>} }
            </ul>
        </div>
    )
}

export default CategoriaDet;