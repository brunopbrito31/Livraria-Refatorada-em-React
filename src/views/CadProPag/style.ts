import styled from 'styled-components';

export const CdProp = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    .main-cad-prod{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;

        h1{
            text-align: center;
        }

        .inp-ps{
            width:65%;
            height:30px;
            margin: 10px;
            text-align: center;
            .inp-sub{
                border-radius: 7px;               
                text-align:center;
                width:100%;
                height:40px;
                background-color:black;
                color:gold;
                font-size: 2em;
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                &:hover{
                    color: yellow;
                    cursor: pointer;
                }
            }
        }

        .form-cadas{
            height: 60%;
            width: 45%;
            background-color:whitesmoke;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
    
`