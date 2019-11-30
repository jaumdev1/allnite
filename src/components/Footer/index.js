import React from 'react';
import {FooterS, QuadroF, FooterQuadro, Copy} from './styles'
import {FaInstagram, FaTwitter,  FaDiscord} from 'react-icons/fa'
export  function Footer(){

    


    return (
        
     
     <FooterS>
       <FooterQuadro>
        <QuadroF>
          <h1>Informações</h1>
          <li><a href="/">Sobre o Projeto</a></li>
          <li><a href="/">Contato e Sugestões</a></li>
          <li><a href="/">Política e Privacidade</a></li>
        </QuadroF>
        <QuadroF>
          <h1>Criadores</h1>
          <li><a href="/">João "Luse</a></li>
          <li><a href="/">Arthur "Dale"</a></li>
        
      
        </QuadroF>
        <QuadroF>
          <h1>Redes Sociais</h1>
          <li><a href="/"><FaInstagram/> Instagram</a></li>
          <li><a href="/"><FaTwitter/> Twitter</a></li>
          <li><a href="/"><FaDiscord/>Discord</a></li>
         
        </QuadroF>
        </FooterQuadro>
        <Copy>
            <p>COPYRIGHT ALLNITE 2019-2020. TODOS OS DIREITOS RESERVADOS.</p>
        </Copy>
     </FooterS>

      
      );
}