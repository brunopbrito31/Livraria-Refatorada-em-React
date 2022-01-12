import styled from 'styled-components';

export const PgLg = styled.div`
    height:100vh;
    width:100vw;
    background-image: url('https://wallpaperaccess.com/full/464232.jpg');

    .form-login{
        background-color: green;
        text-align: center;
        width: 30%;
        height: 40%;
        position: relative;
        top: 30%;
        left: 35%;
        display: flex;
        flex-direction: column;
        opacity: 0.75;

        .btn-voltar{
            position: relative;
            bottom: 10%;
        }

        h1{
            position: relative;
            top: 15%;
        }

        .container-form{
            margin: auto 0;
            .form-campo{
                padding: 1% 0;
                width: 100%;
                height: 30%;
                margin: 0 auto;
                
                input{
                    text-align: center;
                    width: 80%;
                    font-size: 25px;
                }

                
                
            }
            
            .form-submit{
                padding: 1% 0;
                width: 100%;
                height: 30%;
                margin: 0 auto;
                input{
                    width: 80%;
                    height:100%;
                    font-size: 25px;
                    background-color:darkgreen;
                }

                &:hover{
                    cursor: pointer;
                }
            }
        }
    }

    .carregando{
        height: 100vh;
        width: 100vw;
        position: absolute;
        background-color:black;
        opacity: 0.65;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h1{
            color: white;
            font-size: 36px;
            font-family: roboto, arial, helvetica;
        }
    }
`