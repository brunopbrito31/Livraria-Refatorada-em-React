import { Navigate, Route} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import { Component, ReactNode } from 'react';

const PrivateRoute: any = (props: { children: Component; }) => {

    const isLoggedIn: string | null = localStorage.getItem('chave-mestra-br');
    
    const isSectionActive: any = () => {
        if(isLoggedIn === null){
            return false
        }else {
            const onlyToken:any = isLoggedIn;
            const tokenPayload: any = jwt_decode(onlyToken);
            const expSeconds = tokenPayload.exp;
            const timeNow = Date.now()/1000;
            return timeNow > expSeconds ? false : true;
        }
    }
   
    return( 
        isSectionActive() ? props.children : <Navigate to='/login' />
    )

}

export default PrivateRoute;
