import styled from 'styled-components';

export const Barra = styled.div`
    width: 30%;
    height: 30px;

    input{
        box-sizing: border-box;
        width:100%;
        border-radius: 10px 10px 10px 10px;
        padding:4px;
        text-align:center;
        color:#7daa7f;
        border: none;
        box-shadow: 2px 4px 5px;
        background-color: whitesmoke;
        height: 100%;

        &:focus{
        }
    }

    button {
        box-sizing: border-box;
        background-color:#7daa7f;
        width:7%;
        margin-left: -7%;
        border-radius: 0 10px 10px 0;
        border: none;
        height: 100%;
        &:hover{
            cursor: pointer;
        }
    }

    .men-pes{
        position: absolute;
        background-color:rgba(0,255,0,0.7);
        width: 26.8%;
        text-align: center;
    }

    .men-pes-inv{
        position: absolute;
        background-color:rgba(0,255,0,0.7);
        width: 26.8%;
        display: none;
        text-align: center;
    }
    
`