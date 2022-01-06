import styled from 'styled-components';

export const MenuARes = styled.nav`
    background-color: black;
    padding:2%;

    .home{
        position:absolute;
        top:0;
        right:15px;
        color: grey;
        text-decoration: none;
        font-size: 12px;
    }
    
    .op-top{
        list-style: none;
        display:flex;
        justify-content: space-around;
        font-size: 20px;
        li{
            .link-p{
                color: grey;
                text-decoration: none;
                &:hover { color: whitesmoke;}
                
            }
        }
    }

`