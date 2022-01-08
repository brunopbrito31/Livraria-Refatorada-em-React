import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Deslogar from './components/Deslogar';
import PrivateRoute from './private-routes';
import ProdutosAreResPag from './views/Area-Restrita/ProdutosAreResPag';
import CadProPag from './views/CadProPag';
import DashPag from './views/DashPag';
import HomePag from './views/HomePag';
import LoginPag from './views/LoginPag';
import ProdutoDet from './views/ProdutoDet';

const Rotas: React.FC = ()=>{
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePag/>} />
                <Route path="/login" element={<LoginPag/>} />
                <Route path="/produtos/:id" element={<ProdutoDet/>} />
                <Route path="/dashboard" element={<PrivateRoute><DashPag/></PrivateRoute>}/>
                <Route path="/area-restrita/produtos/cadastro" element={<PrivateRoute><CadProPag/></PrivateRoute>}/>
                <Route path="/area-restrita/produtos" element={<PrivateRoute><ProdutosAreResPag/></PrivateRoute>}/>
                <Route path="/sair" element={<PrivateRoute><Deslogar/></PrivateRoute>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;