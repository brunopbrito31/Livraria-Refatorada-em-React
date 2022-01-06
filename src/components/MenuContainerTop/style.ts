import styled from 'styled-components';

export const MenuA = styled.div`
    background: linear-gradient(to top left, #ccffcc 0%, #669999 100%);
    padding: 1.5%;
    .area-exibicao{
        display: flex;
        justify-content: space-around;
        align-items: center;
        ul{
            list-style-type: none;
            display: flex;
            li{
                margin: 2px;
            }
        }
    }
    .area-pesquisa{
        margin: 0.5%;
        display: flex;
        justify-content: center;
    }
`