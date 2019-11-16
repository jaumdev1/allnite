import React from 'react';
import {Section, AnimationArea, BoxArea, AreaSorte,BgSorte, InputSorte, ButtomSorte} from './styles'
import {FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa'
import {GiClover} from 'react-icons/gi'
export function SectionH(){

    


    return (
        
        <Section>
          

          
            <AnimationArea>
              <AreaSorte>
              <a style = {{color:'#fff', fontSize:'50px',}}><GiClover/></a>
             <InputSorte>
              </InputSorte>
              <ButtomSorte>ESTOU COM SORTE!</ButtomSorte>
             <BgSorte>
             
             </BgSorte>
             </AreaSorte>
        
             
             
               <BoxArea>
                   <li><a href='https://twitter.com/luseftn'><FaTwitter/></a></li>
                   <li><a href='https://www.facebook.com/profile.php?id=100016215818543'><FaFacebookF/></a></li>
                   <li><a href='https://www.instagram.com/joaocruz0/'><FaInstagram/></a></li>
                   <li><a href='https://twitter.com/luseftn'><FaTwitter/></a></li>
                   <li><a href='https://www.instagram.com/joaocruz0/'><FaInstagram/></a></li>
                   <li><a href='https://twitter.com/luseftn'><FaTwitter/></a></li>
               </BoxArea>
            </AnimationArea>
        </Section>
        
      );
}