import styled from 'styled-components';

export const MenuARes = styled.nav`
    background-color: black;
    padding:2%;

    .bo-top{
        position:absolute;
        right: 15px;
        top: 10px;
        display: flex;
        .home{
            margin-left: 10px;
            color: gold;
            text-decoration: none;
            font-size: 12px;
        }
    }
    
    .op-top{
        list-style: none;
        display:flex;
        justify-content: space-around;
        font-size: 20px;
        li{
            .link-p{
                color: gold;
                text-decoration: none;
                &:hover { color: yellow;}
                
            }
        }
    }

`