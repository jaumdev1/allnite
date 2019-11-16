import React, {useState} from 'react';
import {Header,Nav, Logo, UlMenu, Button, DivButton, LogoImg} from './styles';

import { FaBars, Fapen, FaPen,FaHandshake, FaJs } from 'react-icons/fa';
import logo from '../../assets/logo.png'

export function HeaderMenu(){
    const [showDiv, setShowDiv] = useState(true);

    function handleShowDiv() {
      setShowDiv(!showDiv);
    }


    return (
        <Header>
         <Nav>
       
             <Logo href="/">
              <LogoImg src={logo}/>
             </Logo>
             <DivButton>
         
            <h4 style={{marginLeft:'15px',color:'#fff'}}>MENU</h4>    
            <Button onClick={handleShowDiv}>
            <FaBars/>
            </Button>
            </DivButton>
             <UlMenu show={showDiv}>
             <li><a href="#"> <FaPen/>  Sobre </a></li>
             <li><a href="#"><FaHandshake/> Dicas</a></li>
             <li><a href="#"><FaJs/>Projetos</a></li>
        
            </UlMenu>

         </Nav>
        </Header>
      );
}
