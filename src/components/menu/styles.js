import styled from 'styled-components';

export const Header = styled.header`
z-index:2;
width:100%;
position:absolute;
background-color: #000;
display:flex;
opacity:0.8;
justify-content:center;

@media (min-width: 768px) {
height:60px;
}
`;



export const Nav = styled.nav`

display:flex;
align-items:center;
width:100%;
height:100%;
max-width:960px;
justify-content:space-between;
@media (max-width: 767.9px) {
  display:flex;
  max-height: 300px;
  
  align-items:center;
  flex-direction: column;
}
`;




export const Logo = styled.a`

display:flex;
align-items:center;
justify-content:center;
font-size: 30px;
height:70px;
 width:70px;
@media (max-width: 767.9px){
  
}
`;

export const LogoImg = styled.img`
width:50px;

`;


export const UlMenu = styled.ul`

height:100%;

width:300px;
list-style: none;
margin:0;

-webkit-flex-flow: row wrap;
align-items:center;
display: flex;
justify-content: space-between;
padding-right:15px;
li{
display:flex;
align-items:center;
justify-content:center;
}
a{
  display: flex;
  align-items:center;
 justify-content:center;
  text-decoration: none;
 
  
  color: white;
} 
a:hover {
  color:#f00;
}

@media (max-width: 767.9px) {

display: ${props => (props.show ? "flex" : "none")};
width:100%;
flex-flow: column wrap;
padding: 0;
li{
  width:200px;
}

a{ 
width:200px;
padding: 10px;
border-bottom: 1px solid;
border-color: #f00; 
}


li:last-of-type a {
border-bottom: none;
}
}

  `;

export const DivButton = styled.div`
transition-timing-function: linear;
height: 30px;
display:none;

@media (max-width: 767.9px) {
width:100%;

display: flex;
border-bottom: 1px solid; 
border-top: 1px solid;
border-color: #666;
align-items:center;
justify-content: space-between;

}
`;


export const Button = styled.button`
cursor: pointer;
display: flex;
justify-content:center;
margin-right: 15px;
background:none;
color: #fff;
border:none;
font-size: 20px;
:hover{
  color:#f00;
}

`;