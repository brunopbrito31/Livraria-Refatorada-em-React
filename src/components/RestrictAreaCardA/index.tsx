import React from 'react';
import { Link } from 'react-router-dom';
import { ResAreCar } from './style';

interface CardAreRest{
    menstit?:string;
    path?:string;
}

const RestrictAreaCardA: React.FC<CardAreRest> = (props)=>{
    return (
        <ResAreCar>
            <Link to={props.path ? props.path : '/'} className="link-ar">
                <h2>
                    {props.menstit ? props.menstit: 'Sem Titulo'}
                </h2>
                <div className="icon-area">
                    {props.children}
                </div>
            </Link>
        </ResAreCar>
    )
}

export default RestrictAreaCardA;