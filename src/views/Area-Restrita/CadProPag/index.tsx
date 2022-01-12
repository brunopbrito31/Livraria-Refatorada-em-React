import React, { FormEvent, useCallback, useState } from 'react';
import { toast } from 'react-toastify';
import FooterAreaRestrita from '../../../components/FooterAreaRestrita';
import InputTextPers from '../../../components/InputTextPers';
import MenuAreaRestrita from '../../../components/MenuAreaRestrita';
import { api } from '../../../services/api';
import { CdProp } from './style';

interface ProductModel{
    id?: number;
    title?: string;
    description?: string;
    imgUrl?: string;
    price?:number;
    rating?:number;
    discount?:number;
}

interface CategoryModel{
    id: number
    name: string
}


const CadProPag: React.FC = ()=>{

    const[isLoad, setIsLoad] = useState(false);
    const[data, setData] = useState({} as ProductModel);
    const[path, setPath] = useState('products');
    const[dataAux, setDataAux] = useState<CategoryModel[]>([]);
    const[selCat, setSelCat] = useState(false);

    const goSubmit = useCallback((e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post(path,data,{headers: {'Authorization':'Bearer '+localStorage.getItem('chave-mestra-br')}}).then( response =>{
            if(response.status === 201){
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
    },[data,path]);

    if(selCat){
        api.get('categories').then(response =>{
            console.log(response);
            setDataAux(response.data)
        }).catch(error => setDataAux([]))
    }

    function goSubmitAux (){
        setSelCat(!selCat);
        return 1;
    }
    
    return(
        <CdProp>
            <MenuAreaRestrita />
            <div className="main-cad-prod">
                <h1>Pagina de cadastro de produtos</h1>

                {data.title}

                <form onSubmit={goSubmit} className="form-cadas">

                    <div className="inp-ps" onChange={ (e: any) => setData({...data,title: e.target.value }) }>
                        <InputTextPers plac="Nome" />
                    </div>

                    <div className="inp-ps" onChange={ (e: any) => setData({...data,description: e.target.value }) }>
                        <InputTextPers plac="Descrição" />
                    </div>

                    <div className="inp-ps" onChange={ (e: any) => setData({...data,imgUrl: e.target.value }) }>
                        <InputTextPers plac="Caminho da Imagem" />
                    </div>

                    <div className="inp-ps" onChange={ (e: any) => setData({...data,price: e.target.value }) }>
                        <InputTextPers plac="Preço" typ="number"/>
                    </div>

                    <div className="inp-ps" onChange={ (e: any) => setData({...data,rating: e.target.value }) }>
                        <InputTextPers plac="Nota de Avaliação" typ="number"/>
                    </div>

                    <div className="inp-ps" onChange={ (e: any) => setData({...data,discount: e.target.value }) }>
                        <InputTextPers plac="Desconto" typ="number"/>
                    </div>

                    <div className="inp-ps" >
                        <select onClick={goSubmitAux} name="cate" onChange={ (e: any) => setPath(`categories/${e.target.value}`) } className="inp-sel">
                            <option disabled selected>Selecione uma Categoria</option>
                            {dataAux ? dataAux.map((il) => {return <option value={il.id} >{il.name}</option>}) : 'null'}
                        </select>
                    </div>
                    
                    <div className="inp-ps">
                        <input type="submit" value="Cadastrar" className="inp-sub"/>
                    </div>
                </form>
            </div>

            <FooterAreaRestrita mens='Desenvolvido por '>
                <a href="https://www.linkedin.com/in/brunopbrito3108/" target="_blank">BrunoPBrito31</a>
            </FooterAreaRestrita>
        </CdProp>
    )
}

export default CadProPag;