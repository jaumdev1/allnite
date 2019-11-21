import styled from 'styled-components';

export const Conteiner = styled.div`
height:100%;
display:flex;
align-items:center;
justify-content:center;
box-sizing: border-box;
background-color:#000;


`;

export const ConteinerLogin = styled.div`

box-sizing: border-box;
box-shadow: 10px -10px 1em rgba(255, 255, 255, 0.5);
color:#fff;
overflow:hidden;
width: 320px;
border-radius:10px;
height:350px;

display:flex;
align-items:center;
flex-direction:column;
background-color:#6A5ACD;
@media(max-width:767.9px){
    width:90%;
}


`;

export const LogoImg = styled.img`
margin-top:15px;
width:100px;
`;

export const InputLogin = styled.input`

width:90%;
height:30px;
text-align:center;
margin-bottom:15px;
`;

export const InputSenha = styled.input`

width:90%;
height:30px;
text-align:center;
margin-bottom:15px;
`;

export const ButtomLogar = styled.button`
width:100px;
height:30px;
background:#fff;
color:#000;
border-radius:5px;
border:none;
:hover{
    opacity:0.7;
    cursor:pointer;
}
`;

