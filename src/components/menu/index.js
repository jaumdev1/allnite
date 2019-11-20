import React, {useState} from 'react';
import {Header,Nav, Logo, UlMenu, Button, DivButton, LogoImg} from './styles';

import { FaRegPaperPlane, FaPen, FaTrophy, FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png'

export function HeaderMenu(){
    const [showDiv, setShowDiv] = useState(false);

    function handleShowDiv() {
      setShowDiv(!showDiv);
    }


    return (
        <Header>
         <Nav>
       
             <Logo href="/">
              <h2>AllNite</h2>
             </Logo>
             <DivButton>
         
            <h4 style={{marginLeft:'15px',color:'#fff'}}>MENU</h4>    
            <Button onClick={handleShowDiv}>
            <FaBars/>
            </Button>
            </DivButton>
             <UlMenu show={showDiv}>
             <li><a href="#"> <FaPen/>  Sobre </a></li>
             <li><a href="#"><FaRegPaperPlane/> Notícias</a></li>
             <li><a href="#"><FaTrophy/>Competitivo</a></li>
        
            </UlMenu>

         </Nav>
        </Header>
      );
}
