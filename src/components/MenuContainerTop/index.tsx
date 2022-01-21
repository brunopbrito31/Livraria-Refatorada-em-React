import React from "react";
import SearchBarA from "../SearchBarA";
import { GitHub, LinkedIn, WhatsApp } from "../FontAweSomeIcones";
import LogoMenTop from "../LogoMenTop";
import TextoDestaqueTrib from "../TextoDestaqueTrib";
import { MenuA } from "./style";

const MenuContainerTop : React.FC = ()=>{
    return(
        <MenuA>
            <div className="area-exibicao">
                <LogoMenTop caminho="https://th.bing.com/th/id/R.7f9de658dd102890fc02b52b4c5c8f02?rik=g%2bSiUPALv56qvA&riu=http%3a%2f%2fwww.dlojavirtual.com%2fwp-content%2fuploads%2f2015%2f11%2fcomo-vender-livros.jpg&ehk=hP1elhD%2bfHxRUGpZ8odSUPCgmHMaoo98MjIIgC%2b36hQ%3d&risl=&pid=ImgRaw&r=0" />
                <TextoDestaqueTrib textoDes='Livraria BrunoPBrito31'/>
                <ul>
                    <li><a href="https://api.whatsapp.com/send?phone=+5571992038969&text=Ola%20Bruno%20Vim%20pelo%20seu%20site%20feito%20em%20react!" target="_blank"><WhatsApp/></a></li>
                    <li><a href="https://www.linkedin.com/in/brunopbrito3108/" target="_blank"><LinkedIn/></a></li>
                    <li><a href="https://github.com/brunopbrito31" target="_blank"><GitHub/></a></li>
                </ul>
            </div>
            <div className="area-pesquisa">
                <SearchBarA
                    pathapi = "products/description?description="
                    noresultmsg= "Sem Resultados Por Aqui"
                />
            </div>
        </MenuA>
    )
}

export default MenuContainerTop;