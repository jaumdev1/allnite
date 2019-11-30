import React, { useState } from 'react';

import { styles } from 'ansi-colors';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Div, Button, Menu, Links} from './styles';

//MENU
import {HeaderMenu} from '../../components/menu';
//CORPO 
import {SectionH} from '../../components/Corpo'
//FOOTER 
import {Footer} from '../../components/Footer'

function Inicial() {

  
  return (
    
  <>

  <HeaderMenu /> 
  <SectionH/>
  <Footer/>
 

   </>
    
  );
}

export default Inicial;