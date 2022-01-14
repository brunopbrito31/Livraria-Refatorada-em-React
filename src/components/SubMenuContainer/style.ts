import styled from 'styled-components';

export const SubMenu = styled.div`
    background-color: green;
    padding-top:10px;
    padding-bottom:2px;
    display: flex;
    justify-content:center;

    .men-bot{
        position: relative;
    }

    .menu-cat{
        position: absolute;
        background: linear-gradient(to top left,#ccffcc 0%,#669999 100%);
        width: 250px;
        text-align: center;
        transition: 3s;
        padding-top: 15px;
        padding-bottom: 15px;
        
        .item-men{
            margin: 0 auto;
            margin-top: 7px;
            width:75%;
            font-size: 25px;
            &:hover{
                opacity: 0.6;
                border-bottom:1px solid green;
                font-style: italic;
            }
        }
        
        ul{
            list-style: none;
            a{
                text-decoration: none;
                color: black;
            }
        }
    }

    .menu-cat-invis{
        display: none;
    }

    .menu-cat-vis{
        
    }

    .btcat{
        height: 50px;
        display: flex;
        width: 160px;
        align-items: center;
        border-radius:8px 8px 0 0;
        background: linear-gradient(to top left,#ccffcc 0%,#669999 100%);
        
        div{
            color: white;
        }
        &:hover {
            cursor: pointer;
            opacity: 0.6;
        }
    }

    .area-categ{
        ul{
    
            display: flex;
            list-style-type: none;
            li{
                margin-left: 45px;
                margin-right: 45px;
                font-size: 2em;
                a{
                    text-decoration: none;
                }
            }
        }
    }
`