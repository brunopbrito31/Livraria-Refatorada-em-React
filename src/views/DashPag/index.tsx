import React from 'react';
import RestrictAreaCardA from '../../components/RestrictAreaCardA';
import { Adm, Cubes, Globe } from '../../components/FontAweSomeIcones';
import FooterAreaRestrita from '../../components/FooterAreaRestrita';
import MenuAreaRestrita from '../../components/MenuAreaRestrita';
import { DashBoardAreRes } from './style';


const DashPag : React.FC = ()=>{

    const items = [
        { menstit: "Produtos", path: "/area-restrita/produtos", icon: <Cubes/>},
        { menstit: "Operações", path: "/area-restrita/operacoes", icon: <Globe/>},
        { menstit: "Administração", path: "/area-restrita/administrativo", icon: <Adm/>}
    ]

    return(
        <DashBoardAreRes>
            <MenuAreaRestrita />
            <div className="container-main">
                <div className="area-cards">
                    {
                        items.map((it)=>{
                            return <RestrictAreaCardA 
                                        menstit= {it.menstit}
                                        path={it.path}
                                    >
                                        {it.icon}
                                    </RestrictAreaCardA>
                        })
                    }
                </div>
            </div>
            <FooterAreaRestrita mens='Desenvolvido por '>
                <a href="https://www.linkedin.com/in/brunopbrito3108/" target="_blank">BrunoPBrito31</a>
            </FooterAreaRestrita>
        </DashBoardAreRes>
    )
}

export default DashPag;