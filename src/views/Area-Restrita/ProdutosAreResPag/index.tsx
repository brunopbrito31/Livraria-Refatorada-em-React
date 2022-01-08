import React from 'react';
import { Link } from 'react-router-dom';
import FooterAreaRestrita from '../../../components/FooterAreaRestrita';
import MenuAreaRestrita from '../../../components/MenuAreaRestrita';
import { ProAreRes } from './style';

const ProdutosAreResPag: React.FC = ()=> {
    return(
        <ProAreRes>
            <MenuAreaRestrita />
            <div className="produtos-main">
                <p>Operações com produtos</p>
                <Link to="cadastro" className="link-pr">Cadastrar Produto</Link>
                <Link to="" className="link-pr">Editar Produto</Link>
                <Link to="" className="link-pr">Categorias</Link>
            </div>
            <FooterAreaRestrita mens='Desenvolvido por '>
                <a href="https://www.linkedin.com/in/brunopbrito3108/" target="_blank">BrunoPBrito31</a>
            </FooterAreaRestrita>
        </ProAreRes>
    )
}

export default ProdutosAreResPag;