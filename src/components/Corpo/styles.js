import styled from 'styled-components';
import React from 'react';
import BonecoAnimado from '../../assets/ciclo-animacao.png'
import { stringLiteral } from '@babel/types';
export const Section = styled.section`

width:100%;
height:100%;
z-index:1;
`;
export const AnimationArea = styled.div`
width:100%;

background:linear-gradient(to left, #000, #111);

overflow:hidden;
display:flex;
align-items:center;
justify-content:center;
height:100%;
`;
export const AreaSorte = styled.div`

width: 300px;
height:300px;

position: relative;

display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
padding-left:5px;
padding-right:5px;
`;
export const BgSorte = styled.div`
border-radius:15px;
   width: 100%;
   height:100%;
   opacity:0.5;
   position: absolute;
   background: #000;
 
`;

export  const InputSorte = styled.input`
z-index:2;
width:90%;
border-radius: 15px;
height:30px;
text-align:center;
color:#fff;
background-color:#000;
border-color:#fff;
`;
export const ButtomSorte = styled.button`
margin-top: 15px;
z-index:2;
width:150px;
height:30px;
border-radius: 15px;
background-color:#000;
color:#fff;

:hover{
cursor:pointer;
background-color:#fff;
color:#000;
border-color:#333;
}
`;




export const BoxArea = styled.ul`


 left:0;
 width:100%;
 height:100%;
 overflow:hidden;
 position: absolute;
 li{
    overflow:hidden;
    position: relative;
     display:flex;
     align-items:center;
     justify-content:center;
     list-style:none;
     width: 25px;
     height:25px;
     background: rgba(255, 255, 255, 0.2);
     animation: animate 20s linear infinite; 
     bottom:-500px;
  
 }
li a {
    color:#fff;
}
 li:nth-child(1){
     left:70%;
     width: 80px;
     height:80px;
     animation-delay: 0s;
     opacity:0;
 }
 li:nth-child(2){
     left:12%;
     width: 30px;
     height:30px;
     animation-delay: 1.5s;
     opacity:0;
 }
 li:nth-child(3){
     left:60%;
     width: 100px;
     height:100px;
     animation-delay: 5.5s;
     opacity:0;
 }
 li:nth-child(4){
     left:42%;
     width: 150px;
     height:150px;
     animation-delay: 0s;
     animation-duration:15s;
     opacity:0;
 }
 li:nth-child(5){
     left:75%;
     width: 40px;
     height:40px;
     animation-delay: 2s;
     opacity:0;
 }
 li:nth-child(6){
     left:15%;
     width: 110px;
     height:110px;
     animation-delay: 3.5s;
     opacity:0;
 }
 @keyframes animate{ 
     0%{
         transform: translateY(0) rotate(0deg);
         opacity:1; 
     }
     10%{
        opacity:0.4;
     }
     100%{
         transform: translateY(-800px) rotate(360deg);
         opacity:0;
     }
 }

`;




