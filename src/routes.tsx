import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Deslogar from './components/Deslogar';
import PrivateRoute from './private-routes';
import ProdutosAreResPag from './views/Area-Restrita/ProdutosAreResPag';
import CadProPag from './views/Area-Restrita/CadProPag';
import CategoriaDet from './views/CategoriaDet';
import DashPag from './views/DashPag';
import HomePag from './views/HomePag';
import LoginPag from './views/LoginPag';
import ProdutoDet from './views/ProdutoDet';
import PageNotFound from './views/PageNotFound';

const Rotas: React.FC = ()=>{
    return(

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePag/>} />
                <Route path="/login" element={<LoginPag/>} />
                <Route path="/produtos/:id" element={<ProdutoDet/>} />
                <Route path="/categorias/:id" element={<CategoriaDet/>} />
                <Route path="/dashboard" element={<PrivateRoute><DashPag/></PrivateRoute>}/>
                <Route path="/area-restrita/produtos/cadastro" element={<PrivateRoute><CadProPag/></PrivateRoute>}/>
                <Route path="/area-restrita/produtos" element={<PrivateRoute><ProdutosAreResPag/></PrivateRoute>}/>
                <Route path="/sair" element={<PrivateRoute><Deslogar/></PrivateRoute>}/>
                <Route path="*"element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas;