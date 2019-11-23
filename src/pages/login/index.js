import React, { useState } from 'react';

import {Conteiner, ConteinerLogin, LogoImg, InputLogin, InputSenha, ButtomLogar} from './styles';
import {FaUnlock} from 'react-icons/fa'
function Login() {

  
  return (
    
  <>
  <Conteiner>
  <ConteinerLogin>
   <a><LogoImg/></a>
    <label>E-mail</label>
    <InputLogin type='text' id='login'/>
    <label>Senha</label>
    <InputSenha type='password' id='senha'/>
    <ButtomLogar><FaUnlock/>ENTRAR</ButtomLogar>
  
  </ConteinerLogin>
  

  </Conteiner>
 

   </>
    
  );
}

export default Login;