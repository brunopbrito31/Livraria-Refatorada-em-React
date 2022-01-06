import React from 'react';
import { Link } from 'react-router-dom';
import { MenuARes } from './style';

const MenuAreaRestrita : React.FC = ()=>{
    return(
        <MenuARes>
            <Link to='/dashboard' className='home'>DashBoard</Link>
            <ul className="op-top">
                <li>
                    <Link to="/produtos/cadastro" className="link-p">Cadastrar Produtos</Link>
                </li>
                <li>
                    <Link to="" className="link-p">Verificar Contatos</Link>
                </li>
                <li>
                    <Link to="/" className="link-p">Ir para o site</Link>
                </li>
            </ul>
        </MenuARes>
    )
}

export default MenuAreaRestrita;