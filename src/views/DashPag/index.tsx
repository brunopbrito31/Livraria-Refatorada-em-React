import React from 'react';
import CardAreaRestrita from '../../components/CardAreaRestrita';
import { Adm, Cubes, Globe } from '../../components/FontAweSomeIcones';
import FooterAreaRestrita from '../../components/FooterAreaRestrita';
import MenuAreaRestrita from '../../components/MenuAreaRestrita';
import { DashBoardAreRes } from './style';

const DashPag : React.FC = ()=>{
    return(
        <DashBoardAreRes>
            <MenuAreaRestrita />
            <div className="container-main">
                <div className="area-cards">
                    <CardAreaRestrita menstit="Produtos" path="/area-restrita/produtos">
                        <Cubes/>
                    </CardAreaRestrita>
                    <CardAreaRestrita menstit="Operações" path="/area-restrita/operacoes">
                        <Globe/>
                    </CardAreaRestrita>
                    <CardAreaRestrita menstit="Administração" path="/area-restrita/administrativo">
                        <Adm/>
                    </CardAreaRestrita>
                </div>
            </div>
            <FooterAreaRestrita mens='Desenvolvido por '>
                <a href="https://www.linkedin.com/in/brunopbrito3108/" target="_blank">BrunoPBrito31</a>
            </FooterAreaRestrita>
        </DashBoardAreRes>
    )
}

export default DashPag;