import styled from 'styled-components';

export const FooterAreRes = styled.div`
    background-color: black;
    height:8%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .msg-rodape{
        background-color:inherit;
        display: inline-block;
        color: gold;
        margin: 0 auto;
        font-size: 2em;
        font-style: italic;
        a{
            text-decoration: none;
            color: inherit;
            text-decoration: underline;
        }

        &:hover{
            color:yellow;
        }
    }

`