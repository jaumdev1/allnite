import styled from 'styled-components';
import React from 'react';

export const FooterS = styled.footer`
width:100%;
position: absolute;
height:400px;
display:flex;
background-color:#000;
align-items:center;
justify-content:space-around;

`;
export const QuadroF = styled.div`
width:100px;
height:250px;
color:#fff;
border-right: 1px solid;
border-color: #FFF; 
:last-of-type{
border-right: none;
}

`;