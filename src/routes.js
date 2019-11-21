import {BrowserRouter, Route} from 'react-router-dom'
import  React from 'react';

import Inicial from './pages/inicial'
import Login from './pages/login'

export default function Routes(){
    return(
      
       <BrowserRouter>
          
         <Route path="/"  exact component={Inicial}/>
         <Route path="/login" exact component={Login}/>
         
       </BrowserRouter>


        
    );
}