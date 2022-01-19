import styled from 'styled-components';

export const Home = styled.div`
    height:100vh;
    display: flex;
    flex-direction: column;

    .area-cards{
        flex-grow: 1;
        margin-top: 2%;
        display: flex;
        flex-wrap: wrap;
        justify-content:space-around;

        .are-botoes{
            width:100%;
            display: flex;
            align-items: center;
            justify-content:center;
            ul{
                width:60%;
                display: flex;
                justify-content:center;
                list-style: none;
                li{
                    width:40%;
                    margin: 10px;
                    button{
                        width:70%;
                    }
                }
            }
        }
    }

`