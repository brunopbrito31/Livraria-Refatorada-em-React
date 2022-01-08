import styled from 'styled-components';

export const CarAreRes = styled.div`
    width: calc(100%/3 - 7%);
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    .link-ar{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: whitesmoke;
        height: 80%;
        width: 80%;
        color: black;
        h2{
            margin-bottom: 1%;
        }
        .area-icone{
            height: 100%;
            width: 100%;
        }
    }
    box-shadow: 3px 3px 5px black;

    &:hover{
        box-shadow: 3px 3px 5px gold;
        .link-ar{
            h2{
                font-style: italic;
                color:gold;
            }
        }
    }

`