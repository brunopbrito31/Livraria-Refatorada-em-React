import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';

function deslog(){
    localStorage.removeItem('chave-mestra-br');
}

const Deslogar : React.FC | any = () => {
    return(
        <div>
            {deslog()}
            <Navigate to="/login" />
        </div>
    )
}

export default Deslogar;