import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import PrivateRoute from './private-routes';
import CadProPag from './views/CadProPag';
import DashPag from './views/DashPag';
import HomePag from './views/HomePag';
import LoginPag from './views/LoginPag';

const Rotas: React.FC = ()=>{
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePag/>} />
                <Route path="/login" element={<LoginPag/>} />
                <Route path="/dashboard" element={<PrivateRoute><DashPag/></PrivateRoute>}/>
                <Route path="/produtos/cadastro" element={<PrivateRoute><CadProPag/></PrivateRoute>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;