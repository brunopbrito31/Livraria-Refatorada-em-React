import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { BarsMenu } from "../FontAweSomeIcones";
import { SubMenu } from "./style";

interface CategoryModel{
    id: number
    name: string
}


const SubMenuContainer : React.FC = ()=>{
    
    const [menAb, setmenAb] = useState(false);
    const [classMen, setClassMen] = useState("menu-cat menu-cat-invis");
    const [data, setData] = useState<CategoryModel[]>([]);
    const[stateCall, setStateCall] = useState(false);

    useEffect(()=>{
        api.get('categories').then(response =>{
            console.log(response);
            setData(response.data)
        }).catch(error => setData([]));
    },[stateCall])


    function mostrarFecharMenu (){
        setmenAb(!menAb);
        if(menAb){
            setClassMen("menu-cat menu-cat-vis");
        }else{
            setClassMen("menu-cat menu-cat-invis");
        }
    }

    return(
        <SubMenu>
            <div className="men-bot">
                <div onClick={mostrarFecharMenu} className="btcat">
                    <BarsMenu />
                    Todas as Categorias
                </div>

                <div className={classMen}>
                    <ul>
                        {data.length > 0? (data.map((it) => {
                            return <li className="item-men"><Link to={`/categorias/${it.id}`} >{it.name}</Link></li>
                        })): ()=>{return <li>Sem Categorias</li>}}
                    </ul>
                </div>
            </div>
            <div className="area-categ">
                <ul>
                    {data.length > 0? (data.map((it) => {
                        return <li className="item-men"><Link to={`/categorias/${it.id}`} >{it.name}</Link></li>
                    })): ()=>{return <li>Sem Categorias</li>}}
                </ul>
            </div>
        </SubMenu>
    )
}

export default SubMenuContainer;