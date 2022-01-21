import styled from 'styled-components';

export const CardPro = styled.div`

    background-color:whitesmoke;
    width: calc(100%/4 - 4%);
    height: 400px;
    text-align:center;
    box-shadow: 2px 2px 5px;
    margin: 2%;
    
    img{
        width: 100%;
        height: 75%;
    }

    .card-nome{
        font-size:18px;
    }

    .card-preco{
        font-style: italic;
    }

    .card-rating {
        ul{
            display:flex;
            list-style: none;
            justify-content:center;
        }
    }

`