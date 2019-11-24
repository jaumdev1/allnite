import React, {useState} from 'react';
import {Header, DivLogin, DivLogo, DivMenu, DivPesquisa, ButttonLogin, DivFechar, ButtonFechar, ButtonAbrir} from './styles';
import {InputPesquisa, ButtonPesquisa, Menu, LiMenu} from './styles';
import {FaSearch, FaTimes, FaBars} from 'react-icons/fa'

import { FaUserAlt } from 'react-icons/fa';
import Logo from '../../assets/logo.svg'

export function HeaderMenu(){
     const [showDiv, setShowDiv] = useState(false);

     function handleShowDiv() {
       showDiv ? setShowDiv(false) : setShowDiv(true);
       
     }
     function FecharDiv() {
       showDiv ? setShowDiv(false) : setShowDiv(true);
       
     }

//allnite
    return (
         <>
        <Header show={showDiv}>
             <ButtonAbrir onClick={handleShowDiv}>
                <FaBars/>
             </ButtonAbrir>
          <DivLogo>
               <a><img src={Logo}/></a>
          </DivLogo>
   
           <DivPesquisa>
                <InputPesquisa placeholder="Buscar Jogador"/>
                <ButtonPesquisa><FaSearch/></ButtonPesquisa>
                </DivPesquisa>
         
                <DivLogin>
          <ButttonLogin>
          <FaUserAlt/>
          <label>Minha conta</label>
          </ButttonLogin>
          </DivLogin>
          
        
        </Header>
          <DivMenu show={showDiv}>
               <DivFechar>
                    <ButtonFechar onClick={FecharDiv}><FaTimes/></ButtonFechar>
               </DivFechar>
          <Menu>
          
               <LiMenu><a href="#">TABELAS</a></LiMenu>
               <LiMenu><a href="#">PROCURAR TIMES</a></LiMenu>
               <LiMenu><a href="#">NOTÍCIAS</a></LiMenu>
               <LiMenu><a href="#">SOBRE</a></LiMenu>
               
          
          </Menu>
          
       </DivMenu>
       </>
      );
}
