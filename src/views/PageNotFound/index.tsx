import React from 'react';
import LoaderPgNotFound from '../../components/LoaderPgNotFound';
import { NotFound } from './style';

const PageNotFound : React.FC = ()=>{
    return(
        <NotFound className="page-not-found">
            <LoaderPgNotFound  />
        </NotFound>
    )
}

export default PageNotFound;