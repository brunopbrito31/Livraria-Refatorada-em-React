import styled from 'styled-components';

export const DashBoardAreRes = styled.div`
   height:100vh;
   display: flex;
   flex-direction: column;
   background-color:gold;
   .container-main{
       flex-grow: 1;
       display: flex;
       flex-direction: column;
       justify-content: center;
       .area-cards{
           display: flex;
           justify-content: space-around;
           align-items: center;
           height: 75%;
           display: flex;
           background-color:whitesmoke;
       }
   }

   @media screen and (max-width:700px){
       height: 100%;
       .container-main{
           .area-cards{
               flex-wrap: wrap;
           }
       }
   }


`

