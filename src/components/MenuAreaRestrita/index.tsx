import React from 'react';
import { Link } from 'react-router-dom';
import { MenuARes } from './style';

const MenuAreaRestrita : React.FC = ()=>{
    return(
        <MenuARes>
            <ul className="bo-top">
                <Link to='/dashboard' className='home'>DashBoard</Link>
                <Link to='/sair' className='home'>Sair</Link>
            </ul>
            <ul className="op-top">
                <li>
                    <Link to="/area-restrita/produtos/cadastro" className="link-p">Cadastrar Produtos</Link>
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