import React, { FormEvent, useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { ProductModel } from '../../../auxiliar-types';
import FooterAreaRestrita from '../../../components/FooterAreaRestrita';
import MenuAreaRestrita from '../../../components/MenuAreaRestrita';
import { api } from '../../../services/api';
import { EstAre } from './style';

const Estoque : React.FC<ProductModel> = ()=>{
    const[data,setData] = useState<ProductModel[]>([]);
    const[idProduct, setIdProduct] = useState(0);
    const[quantity, setQuantity] = useState(0);

    useEffect(()=>{
        api.get('products').then(response =>{
            // setIsLoad(true);
            console.log(response);
            setData(response.data)
        }).finally();
    },[])

    const goSubmit = useCallback((e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.put(`stock-items/add?idproduct=${idProduct}&quantity=${quantity}`,data,{headers: {'Authorization':'Bearer '+localStorage.getItem('chave-mestra-br')}}).then( response =>{
            if(response.status === 200){
                console.log(response)
                // setIsLoad(true);
                toast.success('Cadastro realizado com sucesso!',{
                    hideProgressBar: false,
                    onClose: ()=>{
                    }
                })
            }
        }).catch(error => toast.error('Houve um error: ' + error.message,{
            hideProgressBar: false
        }));
    },[idProduct,quantity]);

    return(
        <EstAre>
            <MenuAreaRestrita />
            <main>
                <form className="form-cadas" onSubmit={goSubmit}>
                    <div>
                        <select onChange={ (e: any) => setIdProduct(e.target.value) }>
                            <option disabled selected>Selecione um Produto</option>
                            {data ? data.map((il) => {return <option value={il.id} >{il.title} - Cod: {il.id}</option>}) : 'null'}
                        </select>
                    </div>
                    <div>
                        <input type="number" onChange={(e: any) => setQuantity(e.target.value)}/>
                    </div>
                    <div>
                        <input type="submit" value="Cadastrar"/>
                    </div>
                </form>
            </main>
            <FooterAreaRestrita mens='Desenvolvido por '>
                <a href="https://www.linkedin.com/in/brunopbrito3108/" target="_blank">BrunoPBrito31</a>
            </FooterAreaRestrita>
        </EstAre>
    )
}

export default Estoque;