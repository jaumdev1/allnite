import React, { useState } from 'react';

import { styles } from 'ansi-colors';
import { FaBars, FaTimes } from 'react-icons/fa';
import {Div, Button, Menu, Links} from './styles';

//MENU
import {HeaderMenu} from './components/menu';
//CORPO 
import {SectionH} from './components/Corpo'
//FOOTER
import Footer from './components/Footer'
function App() {

  
  return (
    
  <>

  <HeaderMenu /> 
 
  <SectionH/>
 

   </>
    
  );
}

export default App;
