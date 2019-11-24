import React, {useState} from 'react';
import {NoticiaDiv, DivNoticia, ImagemNoticia, TextoNoticia} from './styles'
import { tsPropertySignature } from '@babel/types';


export function Noticia(){

 
  

    return (
       <>
        <NoticiaDiv show = {true} >
         <ImagemNoticia src="https://media.discordapp.net/attachments/595355714008907806/648200996131962880/FortniteEsports2Fevents2Fseason-x2FEN_10BR_Competitive_ChampionSeries_Logo_1920x1080_Logo-1920x1080-.png"/>
         <TextoNoticia>
         PEIXOTO DE BATALHA APRESENTA: PATRULHA DA PESCA DO FORTNITE!
        
         </TextoNoticia>
        </NoticiaDiv>
        <NoticiaDiv show = {false} >
         <ImagemNoticia src="https://media.discordapp.net/attachments/595355714008907806/648201186079408147/FortniteEsports2Fnews2Ffortnite-champion-series-season-x-official-rules2FNewsHeader-1920x1080-1c78cc.png"/>
       <TextoNoticia>
         EXTENSÃO DO CAPÍTULO 2: TEMPORADA 1
        
         </TextoNoticia>
       
        </NoticiaDiv>
        <NoticiaDiv show = {true} >
         <ImagemNoticia src="https://cdn.discordapp.com/attachments/595355714008907806/648201340199370773/fortnite-battle-royale-gameplay-capa.png"/>
           <TextoNoticia>
         UM NOVO PROJETO COM O OBJETIVO DE REVOLUCIONAR A COMUNIDADE É CRIADO!
        
         </TextoNoticia>
        
        </NoticiaDiv>
        </>
      );
}