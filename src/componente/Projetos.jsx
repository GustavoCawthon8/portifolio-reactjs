import React from "react";
import './Style.scss';
import Projeto1 from './images/projetos/projeto1.jpg'
import Projeto2 from './images/projetos/projeto2.jpg'
import Projeto3 from './images/projetos/projeto3.jpg'
import Projeto4 from './images/projetos/projeto4.jpg'
import Projeto5 from './images/projetos/projeto5.jpg'
import Projeto6 from './images/projetos/projeto6.jpg'
import Projeto7 from './images/projetos/projeto7.jpg'
import Projeto8 from './images/projetos/projeto8.jpg'
import Projeto9 from './images/projetos/projeto9.jpg'
import Projeto10 from './images/projetos/projeto10.jpg'
import Projeto11 from './images/projetos/projeto11.jpg'
import Projeto12 from './images/projetos/projeto12.jpg' 
import Projeto13 from './images/projetos/projeto13.jpg' 
import Projeto14 from './images/projetos/projeto14.jpg' 
import Projeto15 from './images/projetos/projeto15.jpg'

export default function Projetos(){
    const linkProjeto1 = "https://gustavocawthon.netlify.app/location/home";
    const linkProjeto2 = "https://appmusicamoderno.netlify.app/";
    const linkProjeto3 = "https://atravesdofrontend.netlify.app/";
    const linkProjeto4 = "https://flexstrap-doc.netlify.app/";
    const linkProjeto5 = "https://gustavo-musica.netlify.app/";
    const linkProjeto6 = "https://cubosurf.netlify.app/";
    const linkProjeto7 = "https://notas-da-unidade.vercel.app/";
    const linkProjeto8 = "https://listas-de-tarefas-ruddy.vercel.app/";
    const linkProjeto9 = "https://funcaoneural.netlify.app/";
    const linkProjeto10 = "https://gustavocawthon8.github.io/Jogo-de-bau/";
    const linkProjeto11 = "https://brasilclima.netlify.app/"
    const linkProjeto12 = "https://gustavocawthondev.vercel.app/";
    const linkProjeto13 = "https://listhub-five.vercel.app/"
    const linkProjeto14 = "https://calculadora-reactjs-seven.vercel.app/";
    const linkProjeto15 = "https://hypersomnia-api.vercel.app/";

    /*
    const screenWidth = window.innerWidth;
    console.log("Largura da tela: " + screenWidth + "px");
    */
    return(
        <section>
            <div className="container-titulo">
                <h1 className="titulo">Projetos</h1>
            </div>
            <br></br>
            <div id="projetos">
               <section className="linhaProjetos">
                <div className="projetos">
                    <img src={Projeto1} className="projetoImage"></img>
                    <h2>Gustavo Cawthon Blog</h2>
                    <p>Este projeto foi criado para o meu canal do YouTube.
                         Ele tem um sistema de admin externo com a funciona
                         lidade de postar novas postagens.
                         tecnologias utilizadas: <b>HTML</b>, <b>CSS</b>, <b>EcmaScript</b> e <b>firebase</b>
                    </p>
                    <a href={linkProjeto1} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto2} className="projetoImage"></img>
                    <h2>App de Música</h2>
                    <p>Site de música moderno, totalmente responsivo, ele foi feito para os meus estudos de flexbox.
                         tecnologias utilizada: <b>HTML</b>, <b>CSS(flexbox)</b>, <b>EcmaScript</b> e <b>bootstrap icon</b>
                    </p>
                    <a href={linkProjeto2} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto3} className="projetoImage"></img>
                    <h2>Site de Vendas</h2>
                    <p>Lading page feito em 12 minutos, esse site foi feito para divulgar o meu ebook de programação, ele é totalmente flexível.
                         tecnologias utilizada: <b>HTML</b> e <b>CSS(flexbox)</b>
                    </p>
                    <a href={linkProjeto3} className="linksProjetos">Ver Projeto</a>
                </div>
              </section>  

            <section className="linhaProjetos">
                <div className="projetos">
                    <img src={Projeto4} className="projetoImage"></img>
                    <h2>Flexstrap Lib</h2>
                    <p>Esse é um projeto que foi pensando para facilitar os desenvolvedores no desenvolvimento dos sites web, ele funciona muito bem, mas ele foi descontinuado.
                         tecnologias utilizada: <b>CSS</b>
                    </p>
                    <a href={linkProjeto4} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto5} className="projetoImage"></img>
                    <h2>Gustavo Music</h2>
                    <p>Esse projeto é um mp3, ele contem mais de 10 músicas, esse site é totalmente flexível.
                         tecnologias utilizada: <b>HTML</b>, <b>CSS(flexbox)</b>, <b>bootstrap icon</b> e <b>EcmaScript</b>
                    </p>
                    <a href={linkProjeto5} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto6} className="projetoImage"></img>
                    <h2>Cube Surf</h2>
                    <p>Esse é um jogo 3d feito sem engine, criei ele totalmente do zero com meus estudos de JavaScript 3d(webgl).
                         tecnologias utilizada: <b>HTML</b> e <b>EcmaScript/Three.js</b>
                    </p>
                    <a href={linkProjeto6} className="linksProjetos">Ver Projeto</a>
                </div>
            </section>

             <section className="linhaProjetos">
             <div className="projetos">
                    <img src={Projeto15} className="projetoImage"></img>
                    <h2>Hypersomnia</h2>
                    <p>Hypersomnia é um site que foi pensado para desenvolvedores consumirem suas APIs de forma fácil e rápida.
                         tecnologias utilizada: <b>HTML</b>, <b>CSS</b>, <b>EcmaScript</b> e <b>NodeJs</b>
                    </p>
                    <a href={linkProjeto15} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto8} className="projetoImage"></img>
                    <h2>Listas de tarefas</h2>
                    <p>Listas de Tarefas funcional, que tem um arquivo json que simula um servidor backend, aonde o usuário pode enviar  as lista.
                         tecnologias utilizada: <b>ReactJs</b> e <b>Css</b>
                    </p>
                    <a href={linkProjeto8} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto9} className="projetoImage"></img>
                    <h2>função de Aproximação Neural</h2>
                    <p>Esse é o meu primeiro projeto de machine Learning, ele é uma função de aproximação neural.
                         tecnologias utilizada: <b>HTML</b>, <b>Bootstrap</b> e <b>jQuery</b>
                    </p>
                    <a href={linkProjeto9} className="linksProjetos">Ver Projeto</a>
                </div>
            </section>
                
            <section className="linhaProjetos">   
                <div className="projetos">
                    <img src={Projeto10} className="projetoImage"></img>
                    <h2>BauMoney</h2>
                    <p>Esse projeto é um jogo que usei para treinar minha lógica de programação, o objetivo dele é pegar todos os dinheiro, e evitar pegar os tijolos.
                         tecnologias utilizada: <b>HTML</b>, <b>Bootstrap icon</b> e <b>EcmaScript</b>
                    </p>
                    <a href={linkProjeto10} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto11} className="projetoImage"></img>
                    <h2>Brasil Clima</h2>
                    <p>Esse site mostra o clima em tempo real de cada cidade do Brasil.
                         tecnologias utilizada: <b>HTML</b>, <b>CSS</b> e <b>EcmaScript</b>
                    </p>
                    <a href={linkProjeto11} className="linksProjetos">Ver Projeto</a>
                </div>

              <div className="projetos">
                <img src={Projeto12} className="projetoImage"></img>
                <h2>Portfólio</h2>
                <p>Este portfólio online foi criado para apresentar meus projetos e minhas habilidades como desenvolvedor front-end. O objetivo é fornecer uma visão completa do meu trabalho e experiência.
                     tecnologias utilizada: <b>ReactJs</b> e <b>Scss</b>
                </p>
                <a href={linkProjeto12} className="linksProjetos">Ver Projeto</a>
            </div>

        </section>  

        <section className="linhaProjetos">   
                <div className="projetos">
                    <img src={Projeto13} className="projetoImage"></img>
                    <h2>ListHub</h2>
                    <p>Lista de tarfeas completa com sistema de login, e que salva as informações no banco de dados, algumas pessoas, usam esse projeto.
                         tecnologias utilizada: <b>ReactJs</b>, <b>Css</b> e <b>Firebase</b>
                    </p>
                    <a href={linkProjeto13} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto14} className="projetoImage"></img>
                    <h2>Calculadora</h2>
                    <p>Uma calculadora funcional e responsivo.
                         tecnologias utilizada: <b>ReactJs</b> e <b>Scss</b>
                    </p>
                    <a href={linkProjeto14} className="linksProjetos">Ver Projeto</a>
                </div>
              </section>  
            </div>
        </section>
    )
}