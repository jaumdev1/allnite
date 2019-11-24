import React,{useState} from 'react';
import {Section, AnimationArea, BoxArea, Banner} from './styles'
import {Noticia} from './noticia'

export function SectionH(){
   
    const [showDiv, setShowDiv] = useState(false);

    return (
        
        <Section>
          <Noticia/>

       
         

         
          

          
        </Section>
        
      );
}