import React, { useState } from 'react';
import Logo from '../../assets/logo.png'
import {Conteiner, ConteinerLogin, LogoImg, InputLogin, InputSenha, ButtomLogar} from './styles';
import {FaUnlock} from 'react-icons/fa'
function Login() {

  
  return (
    
  <>
  <Conteiner>
  <ConteinerLogin>
   <a><LogoImg src={Logo}/></a>
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