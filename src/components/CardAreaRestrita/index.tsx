import React from 'react';
import { Link } from 'react-router-dom';
import { Cubes } from '../FontAweSomeIcones';
import { CarAreRes } from './style';

interface CardAreRest{
    menstit?:string;
    path?:string;
}

const CardAreaRestrita: React.FC<CardAreRest> = (props)=>{
    return (
        <CarAreRes>
            <Link to={props.path ? props.path : '/'} className="link-ar">
                <h2>
                    {props.menstit ? props.menstit: 'Sem Titulo'}
                </h2>
                <div className="area-icone">
                    {props.children}
                </div>
            </Link>
        </CarAreRes>
    )
}

export default CardAreaRestrita;