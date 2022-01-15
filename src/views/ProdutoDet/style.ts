import styled from 'styled-components';

export const ProDeta = styled.div`
    height:100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    .main-prod-det{
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .prod-det-sec1{
            display: flex;
            .prod-det-img{
                img{
                    width: 400px;
                    height: 400px;
                }
            }
            .prod-det-inf{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .prod-prop{
                    font-size: 30px;
                    form{
                        display: flex;
                        flex-direction: column;
                    }
                }
            }
        }
    }

`