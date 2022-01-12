import React, { FormEvent, useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { api } from '../../services/api';
import { PgLg } from './style';
import { toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Loader from '../../components/Loader';

interface Usuario{
    login?:string;
    password?: string;
}

const LoginPag : React.FC = ()=>{

    const[data,setData] = useState({} as Usuario);
    const navigate = useNavigate();
    const[isLoad, setIsLoad] = useState(false);

    const goSubmit = useCallback((e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        api.post('login',data).then( response =>{
            if(response.status === 200){
                setIsLoad(true);
                toast.success('Login realizado com sucesso!',{
                    hideProgressBar: false,
                    onClose: () => {
                        setIsLoad(false);
                        navigate('/dashboard')
                    }
                })
            }
            localStorage.setItem('chave-mestra-br',response.data);
        }).catch(error => toast.error('Erro ao fazer Login',error));
    },[data]);

    return(
        <PgLg>
            {!isLoad? (
                 <form className="form-login" onSubmit={goSubmit}>
                 <h1>Livraria SisLogin</h1>
                 <div className="container-form">
                     <div className="form-campo">
                         <input 
                             type="text"
                             placeholder="Usuário"
                             onChange={e => setData({...data,login: e.target.value})}
                         />
                     </div>
 
                     <div className="form-campo">
                         <input 
                             type="password"
                             placeholder="Senha"
                             onChange={e => setData({...data,password: e.target.value})}
                         />
                     </div>
 
                     <div className="form-submit">
                         <input type="submit"  value="Entrar"/>
                     </div>
                 </div>
                 <Link to="/" className="btn-voltar">Voltar para o site</Link>
             </form>
            ):(
            <div className="carregando">
                <h1>Aguarde, Estamos te redirecionando...</h1>
                <Loader />
            </div>)}
           
        </PgLg>
    )
}

export default LoginPag;