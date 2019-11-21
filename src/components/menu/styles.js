import styled from 'styled-components';

export const Header = styled.header`
height:150px;
z-index:3;
width:100%;
position:absolute;
background-color: #000;
display:flex;
opacity:0.8;
justify-content:center;
box-sizing:border-box;
overflow:hidden;

`;
export const DivLogo = styled.div`
width:20%;
height:100%;
background-color:#836FFF;
display:flex;
align-items:center;
justify-content:center;
box-sizing:border-box;
`;
export const DivCentral = styled.div`
box-sizing:border-box;
width:60%;
height:100%;
background-color:#836FF0;

`;

export const DivPesquisa = styled.div`
box-sizing:border-box;
background-color:#fff;
height:50%;
display:flex;
justify-content:center;
align-items:center;
`;
export const InputPesquisa = styled.input`
width:80%;
box-sizing:border-box;
height:30px;
`;
export const ButtonPesquisa = styled.button`
margin-left:10px;
box-sizing:border-box;
background:none;
border:none;
font-size:25px;
cursor: pointer;

`;


export const DivMenu = styled.div`
box-sizing:border-box;
height:50%;
display:flex;
align-items:center;
justify-content:center;
`;
export const Menu = styled.ul`
box-sizing:border-box;
display:flex;
justify-content:space-between;


`;
export const LiMenu = styled.li`
box-sizing:border-box;
list-style:none;
padding: 0 15px;
a{
  color:#fff;
}
`;

export const DivLogin = styled.div`
width:20%;
height:100%;
background-color:#836FFF;
`;


