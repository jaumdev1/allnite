import styled from 'styled-components';

export const Header = styled.header`
height:120px;

width:100%;

background-color: #c500ff;
display:flex;
justify-content:center;
align-items:center;
box-sizing:border-box;
overflow:hidden;
border-bottom: 1px solid;
border-color:rgba(255,255,255, 0.7);

@media (max-width: 767.9px){
height:170px;
position:initial;
z-index:0;
display:flex;
flex-wrap:wrap;

justify-content:space-around;
transition: 800ms;
filter: brightness(${props => (props.show ? "60%" : "100%")});


}
`;

export const ButtonAbrir = styled.button`
display:none;
@media (max-width: 767.9px){
color:#fff;
background:none;
border:none;
font-size: 30px;
display:flex;
align-items:center;
justify-content:center;
:hover{
  color:#000;
}
}


`;

export const DivLogo = styled.div`
width:30%;
height:100%;
background-color: #c500ff;
display:flex;
align-items:center;
justify-content:center;
box-sizing:border-box;

a{
  width:150px;
  height:150px;
  display:flex;
  align-items:center;
  justify-content:center;
}
img{
  width:150px;
 height:150px;
}
@media (max-width: 767.9px){
height:35px;

img{
  width:100px;
  height:100px;
}
  }

`;


export const DivPesquisa = styled.div`
box-sizing:border-box;

width:100%;
display:flex;
justify-content:center;
align-items:center;
@media(max-width:767.9px){
  order: 1;
}

`;
export const InputPesquisa = styled.input`
width:80%;
box-sizing:border-box;
height:40px;
border:none;
border-radius:8px;
padding-left:15px;

`;
export const ButtonPesquisa = styled.button`
color:#fff;
margin-left:10px;
box-sizing:border-box;
background:none;
border:none;
font-size:25px;
:hover{
cursor: pointer;
color:#000;
}
`;


export const DivLogin = styled.div`
border:none;
width:20%;
height:100%;
background-color:#c500ff;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;  
@media (max-width: 767.9px){
 height:15px;
 order: 0;
width:50px;

  }
  
`;
export const ButttonLogin = styled.button`
background:none;
border:none;
display:flex;
flex-direction:column;
align-items:center;
font-size:15px;
color:#fff;
:hover{
border:none;
cursor: pointer;
color:#000;
}

@media (max-width: 767.9px){
 width:0%;

  }
`;
export const DivMenu = styled.div`

width:100%;
background-color:#c500ff;
box-sizing:border-box;
height:40px;
display:flex;
align-items:center;
justify-content:center;
transition: left .7s;

@media (max-width: 767.9px){
    top:0;
    left:${props => (props.show ? "0" : "-100%")}; 
    height:100%;
    width:200px;
    justify-content:left;
    align-items:flex-start;
    position:absolute;
    flex-direction:column;
    z-index:1;

  }
`;
export const Menu = styled.ul`
width:100%;
box-sizing:border-box;
display:flex;
justify-content:center;
align-items:center;
@media (max-width: 767.9px){
  flex-direction:column;
  
  
}

`;
export const LiMenu = styled.li`
display:flex;
align-items:center;
box-sizing:border-box;
list-style:none;
padding: 0 15px;
height:50px;
a{
  color:#fff;
 text-decoration:none;
 :hover{
   color:#000;
   cursor:pointer;

 }
}


  @media (max-width: 767.9px){
  padding:0 0;
  border-bottom: 1px solid;
  border-color:#fff;

  a{
    
  }
  
}

`;

export const DivFechar = styled.div`
display:none;
@media (max-width: 767.9px){
  display:flex;
  width:100%;
height:50px;
display:flex;
align-items:center;

}

`;
export const ButtonFechar = styled.button`
display:flex;
justify-content:center;
height:20px;
margin-left:15px;
background:none;
border:none;
font-size:20px;
color:#fff;
:hover{
  color:#000;
}
`;

