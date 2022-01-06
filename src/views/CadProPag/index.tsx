import React, { FormEvent, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import MenuAreaRestrita from '../../components/MenuAreaRestrita';
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


const CadProPag: React.FC = ()=>{

    const[isLoad, setIsLoad] = useState(false);
    const[data, setData] = useState({} as ProductModel);

    const goSubmit = useCallback((e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post('products',data,{headers: {'Authorization':'Bearer '+localStorage.getItem('chave-mestra-br')}}).then( response =>{
            if(response.status === 200){
                // setIsLoad(true);
                toast.success('Cadastro realizado com sucesso!',{
                    hideProgressBar: false,
                    onClose: ()=>{}
                })
            }
        }).catch(error => toast.error('Houve um error: ' + error.message,{
            hideProgressBar: false
        }));
    },[data]);

    return(
        <div>
            <MenuAreaRestrita />
            <h1>Pagina de cadastro de produtos</h1>

            <form onSubmit={goSubmit}>
                <div className="form-campo">
                    <label>Titulo:</label>
                    <input type="text"
                        onChange={e => setData({...data, title: e.target.value})}
                    />
                </div>
                <div className="form-campo">
                    <label>Descrição:</label>
                    <input type="text"
                        onChange={e => setData({...data, description: e.target.value})}
                    />
                </div>
                <div className="form-campo">
                    <label>Imagem:</label>
                    <input type="text"
                        onChange={e => setData({...data, imgUrl: e.target.value})}
                    />
                </div>
                <div className="form-campo">
                    <label>Preço:</label>
                    <input type="number"
                        onChange={e => setData({...data, price: e.target.valueAsNumber})}
                    />
                </div>
                <div className="form-campo">
                    <label>Nota:</label>
                    <input type="number"
                        onChange={e => setData({...data, price: e.target.valueAsNumber})}
                    />
                </div>
                <div className="form-campo">
                    <label>Desconto:</label>
                    <input type="number"
                        onChange={e => setData({...data, price: e.target.valueAsNumber})}
                    />
                </div>
                
                <input type="submit" value="Cadastrar" />
            </form>
        </div>
    )
}

export default CadProPag;