import styled from 'styled-components';

export const CatDet = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    .categ-main{
        flex-grow: 1;
        ul{
            display: flex;
            flex-direction:row;
            flex-wrap: wrap;
        }
    }
`