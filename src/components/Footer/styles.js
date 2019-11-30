import styled from 'styled-components';
import React from 'react';

export const FooterS = styled.footer`


`;
export const FooterQuadro = styled.div`
width:100%;
border-top: 1px solid #fff;
height:400px;
display:flex;
background-color:#c500ff;
align-items:center;
justify-content:space-around;
@media (max-width: 767.9px){
flex-direction:column;
align-items:flex-start;
padding: 15px 15px;
height:500px;
}
`;
export const QuadroF = styled.div`

width:200px;
height:250px;
color:#fff;
/* border-right: 1px solid;
border-color: #FFF;  */
h1{
    color:#000;
}
a{
    margin-top: 15px;
    display:flex;
    align-items:center;
    color:#fff;
    :hover{
        color:#000;

    }
}    
/* :last-of-type{
border-right: none;
} */
@media (max-width: 767.9px){
    border: none;
    margin-top:30px;


}


`;

export const  Copy = styled.div`
width:100%;
background-color:#000;
display:flex;
align-items:center;
justify-content:center;
height:50px;
color:#fff;
font-family:  Arial, Helvetica, sans-serif;
@media (max-width: 767.9px){
p{
margin-left:15px;
}
}
`;