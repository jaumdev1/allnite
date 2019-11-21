import React, {useState} from 'react';
import {Header, DivLogin, DivLogo, DivCentral, DivMenu, DivPesquisa} from './styles';
import {InputPesquisa, ButtonPesquisa, Menu, LiMenu} from './styles';
import {FaSearch} from 'react-icons/fa'

import { FaRegPaperPlane, FaPen, FaTrophy, FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.png'

export function HeaderMenu(){
    const [showDiv, setShowDiv] = useState(false);

    function handleShowDiv() {
      setShowDiv(!showDiv);
    }

//allnite
    return (
        <Header>
          <DivLogo>
               <h1>AllNite</h1>
          </DivLogo>
          <DivCentral>
           <DivPesquisa>
                <InputPesquisa/>
                <ButtonPesquisa><FaSearch/></ButtonPesquisa>
           </DivPesquisa>
           <DivMenu>
              <Menu>
              
                   <LiMenu><a href="#">TABELAS</a></LiMenu>
                   <LiMenu><a href="#">PROCURAR TIMES</a></LiMenu>
                   <LiMenu><a href="#">PARCERIAS</a></LiMenu>
                   <LiMenu><a href="#">SOBRE</a></LiMenu>
                   
              
              </Menu>
           </DivMenu>
          </DivCentral>
          <DivLogin>

          </DivLogin>
        
        </Header>
      );
}
