import React from 'react';
import { FooterAreRes } from './style';

interface rodap{
    mens?:string;
}

const FooterAreaRestrita : React.FC<rodap> = (props)=>{
    return(
        <FooterAreRes>
            <div className="msg-rodape">
                {props.mens ? props.mens : 'Sem Mensagem'}{props.children}
            </div>
        </FooterAreRes>
    )
}

export default FooterAreaRestrita;