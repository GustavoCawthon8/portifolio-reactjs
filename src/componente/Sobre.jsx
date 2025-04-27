import React from 'react'
import './Style.scss'
import HtmlImg from './images/tecnologias/html.png'
import SassImg from './images/tecnologias/sass.png'
import CssImg from './images/tecnologias/css.png'
import JsImg from './images/tecnologias/js.png'
import BootstrapImg from './images/tecnologias/bootstrap.png'
import TailwindImg from './images/tecnologias/tailwind.png'
import ReactImg from './images/tecnologias/react.png'
import GitImg from './images/tecnologias/git.png'
import NodeImg from './images/tecnologias/node.png'
import FirebaseImg from './images/tecnologias/firebase.png'



export default function Sobre(props){
    return(
        <section id={props.identificador}>
            <div>
                <h1 className='titulo'>Sobre mim</h1>
            </div>
            <br></br>

            <div id='sobreMim'>
                
                <section className='paragrafos'> 
                    Olá, meu nome é Gustavo, tenho 16 anos e 
                    atualmente moro na cidade de Ubatã, no sul 
                    da Bahia.
               </section>
               <section className='paragrafos'> 
                    Sou desenvolvedor back-end e 
                    trabalho com tecnologias como NodeJs, ReactJS, Sass,
                     Bootstrap e Tailwind, no entanto, meu objetivo 
                     é expandir minhas habilidades para o back-end, 
                     focando no desenvolvimento de APIs com NodeJs.
                </section>
                <section className='paragrafos'>
                      Já desenvolvi alguns aplicativos Android utilizando 
                      Java, mas, por falta de recursos, acabei 
                      interrompendo a criação de apps.
               </section>
                   

            </div>
            <br></br>
            <div id='tecnologias'>
                <section>
                    <h1 className='titulo'>Habilidades</h1>
                </section>

                <section id='habilidades'>
                <div id='tec'>
                    <img className='imgTecnologias' src={HtmlImg}></img>
                    <img className='imgTecnologias' src={CssImg}></img>
                    <img className='imgTecnologias' src={JsImg}></img>
                    <img className='imgTecnologias' src={BootstrapImg}></img>
                    <img className='imgTecnologias' src={TailwindImg}></img>
                    <img className='imgTecnologias' src={ReactImg}></img>
                    <img className='imgTecnologias' src={GitImg}></img>
                    <img className='imgTecnologias' src={NodeImg}></img>
                    <img className='imgTecnologias' src={SassImg}></img>
                    <img className='imgTecnologias' src={FirebaseImg}></img>
                </div>
                </section>
            </div>
        </section>
    )
}