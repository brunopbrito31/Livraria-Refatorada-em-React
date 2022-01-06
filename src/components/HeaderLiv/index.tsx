import React from "react";
import FaixaTopoSlogan from "../FaixaTopoSlogan";
import MenuContainerTop from "../MenuContainerTop";
import SubMenuContainer from "../SubMenuContainer";

const HeaderLiv : React.FC = ()=>{
    return(
        <div>
            <FaixaTopoSlogan>
            <h1>Procurando o <span>menor</span> preço? A gente <b>tem!</b></h1>
            </FaixaTopoSlogan>
            <MenuContainerTop/>
            <SubMenuContainer />
        </div>
    )
}

export default HeaderLiv;