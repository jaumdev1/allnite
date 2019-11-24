import styled from 'styled-components';
import React from 'react';

export const NoticiaDiv = styled.div`
box-sizing:border-box;
width:100%;
height:350px;
background-color:#c500ff;
border-bottom: 1px ridge;
border-color: rgba(255, 255, 255, 0.1);
color:#fff;
flex-direction:${props => (props.show ? "row-reverse" : "row")};
display:flex;
align-items:center;
justify-content:center;
@media (max-width: 960px){

flex-direction:column;
padding: 50px 0;

  }

`;
export const ImagemNoticia = styled.img`
margin: 0 50px;
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
height:90%;
margin-bottom:15px;
  }  
@media (max-width: 767.9px){
margin-top:30px;
width:90%;
height:80%;
margin-bottom:15px;

  }


`;
export const TextoNoticia = styled.h1`
display:flex;
align-items:center;
justify-content:center;
margin: 0 50px;
text-align:center;
width:600px;
height: 350px;
font-size:35px;
:hover{
    cursor:pointer;
    color:#000;
}
@media (max-width: 767.9px){
font-size:25px;

width:90%;
height:90%;

  }
  @media (max-width: 960px){
    font-size:30px;
margin-bottom:15px;
  }  

`;