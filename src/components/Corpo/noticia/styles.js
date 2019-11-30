import styled from 'styled-components';
import React from 'react';

export const NoticiaDiv = styled.div`
box-sizing:border-box;
width:100%;
height:400px;
background-color:#c500ff;
border-bottom: 1px ridge;
border-color: rgba(255, 255, 255, 0.1);
color:#fff;
flex-direction:${props => (props.show ? "row-reverse" : "row")};
display:flex;
align-items:center;
justify-content:center;
@media (max-width: 767.9px){
height:450px;
flex-direction:column;
justify-content:flex-start;




}
@media (max-width: 960px){
padding: 0 15px;




}
  

`;
export const ImagemNoticia = styled.img`
margin: 0 0 ;
border:solid 1px #fff;

width:500px;
height:300px;
background-size: cover;
transition: 10ms;
filter: brightness(
90%
);
:hover{

    cursor:pointer;
    zoom: 105%;
    filter: brightness(
100%

);

   
}
@media (max-width: 960px){
width:500px;
height:300px;

  }  
@media (max-width: 767.9px){
width:90%;
height:50%;


  }


`;
export const TextoNoticia = styled.h1`
display:flex;
align-items:center;
justify-content:center;
height:200px;
text-align:center;
width:500px;
padding: 20px 20px;
font-size:35px;

:hover{
    cursor:pointer;
    color:#000;
}
@media (max-width: 767.9px){
font-size:25px;
align-items:center;
width:90%;
height:100%;


  }
  @media (max-width: 960px){
    height:100%;
    font-size:30px;
    align-items:center;
  }  

`;