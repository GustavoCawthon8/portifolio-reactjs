import React from "react";
import './Style.scss';
import Projeto1 from './images/projetos/musicmoderno.jpg'
import Projeto2 from './images/projetos/atravesdoft.jpg'
import Projeto3 from './images/projetos/gustavomusic.jpg'
import Projeto4 from './images/projetos/cubesurf.jpg'
import Projeto5 from './images/projetos/hypersomnia.jpg'
import Projeto6 from './images/projetos/gerenciartarefas.jpg'
import Projeto7 from './images/projetos/funcao.jpg' 
import Projeto8 from './images/projetos/brasilclima.jpg' 
import Projeto9 from './images/projetos/listdetarefas.jpg' 
import Projeto10 from './images/projetos/calculadora.jpg'
import Projeto11 from './images/projetos/searchusergit.jpg'



export default function Projetos(){
    const linkProjeto1 = "https://appmusicamoderno.netlify.app/";
    const linkProjeto2 = "https://atravesdofrontend.netlify.app/";
    const linkProjeto3 = "https://gustavo-musica.netlify.app/";
    const linkProjeto4 = "https://cubosurf.netlify.app/";
    const linkProjeto5 = "https://hypersomnia-api.vercel.app/";
    const linkProjeto6 = "https://listhub-five.vercel.app/"
    const linkProjeto7 =  "https://funcaoneural.netlify.app/";
    const linkProjeto8 = "https://brasilclima.netlify.app/"
    const linkProjeto9 = "https://listas-de-tarefas-ruddy.vercel.app/";
    const linkProjeto10 = "https://calculadora-reactjs-seven.vercel.app/";
    const linkProjeto11 = "https://seachergit.netlify.app/";
    

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
                    <h2>App de Música</h2>
                    <p>Site de música moderno, totalmente responsivo, ele foi feito para os meus estudos de flexbox.
                         tecnologias utilizada: <b>HTML</b>, <b>CSS(flexbox)</b>, <b>EcmaScript</b> e <b>bootstrap icon</b>
                    </p>
                    <a href={linkProjeto1} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto2} className="projetoImage"></img>
                    <h2>Site de Vendas</h2>
                    <p>Lading page feito em 12 minutos, esse site foi feito para divulgar o meu ebook de programação, ele é totalmente flexível.
                         tecnologias utilizada: <b>HTML</b> e <b>CSS(flexbox)</b>
                    </p>
                    <a href={linkProjeto2} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto3} className="projetoImage"></img>
                    <h2>Gustavo Music</h2>
                    <p>Esse projeto é um mp3, ele contem mais de 10 músicas, esse site é totalmente flexível.
                         tecnologias utilizada: <b>HTML</b>, <b>CSS(flexbox)</b>, <b>bootstrap icon</b> e <b>EcmaScript</b>
                    </p>
                    <a href={linkProjeto3} className="linksProjetos">Ver Projeto</a>
                </div>
              </section>  

            <section className="linhaProjetos">
                <div className="projetos">
                    <img src={Projeto4} className="projetoImage"></img>
                    <h2>Cube Surf</h2>
                    <p>Esse é um jogo 3d feito sem engine, criei ele totalmente do zero com meus estudos de JavaScript 3d(webgl).
                         tecnologias utilizada: <b>HTML</b> e <b>EcmaScript/Three.js</b>
                    </p>
                    <a href={linkProjeto4} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto5} className="projetoImage"></img>
                    <h2>Hypersomnia</h2>
                    <p>Hypersomnia é um site que foi pensado para desenvolvedores consumirem suas APIs de forma fácil e rápida.
                         tecnologias utilizada: <b>HTML</b>, <b>CSS</b>, <b>EcmaScript</b> e <b>NodeJs</b>
                    </p>
                    <a href={linkProjeto5} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto6} className="projetoImage"></img>
                    <h2>ListHub</h2>
                    <p>Lista de tarfeas completa com sistema de login, e que salva as informações no banco de dados, algumas pessoas, usam esse projeto.
                         tecnologias utilizada: <b>ReactJs</b>, <b>Css</b> e <b>Firebase</b>
                    </p>
                    <a href={linkProjeto6} className="linksProjetos">Ver Projeto</a>
                </div>
            </section>

             <section className="linhaProjetos">
                <div className="projetos">
                    <img src={Projeto7} className="projetoImage"></img>
                    <h2>função de Aproximação Neural</h2>
                    <p>Esse é o meu primeiro projeto de machine Learning, ele é uma função de aproximação neural.
                         tecnologias utilizada: <b>HTML</b>, <b>Bootstrap</b> e <b>jQuery</b>
                    </p>
                    <a href={linkProjeto7} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto8} className="projetoImage"></img>
                    <h2>Brasil Clima</h2>
                    <p>Esse site mostra o clima em tempo real de cada cidade do Brasil.
                         tecnologias utilizada: <b>HTML</b>, <b>CSS</b> e <b>EcmaScript</b>
                    </p>
                    <a href={linkProjeto8} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto9} className="projetoImage"></img>
                    <h2>Gerenciar Tarefas</h2>
                    <p>Listas de Tarefas funcional, que tem um arquivo json que simula um servidor backend, aonde o usuário pode enviar  as lista.
                         tecnologias utilizada: <b>ReactJs</b> e <b>Css</b>
                    </p>
                    <a href={linkProjeto9} className="linksProjetos">Ver Projeto</a>
                </div>

            </section>
                

        <section className="linhaProjetos">   
                <div className="projetos">
                    <img src={Projeto10} className="projetoImage"></img>
                    <h2>Calculadora</h2>
                    <p>Uma calculadora funcional e responsivo.
                         tecnologias utilizada: <b>ReactJs</b> e <b>Scss</b>
                    </p>
                    <a href={linkProjeto10} className="linksProjetos">Ver Projeto</a>
                </div>

                <div className="projetos">
                    <img src={Projeto11} className="projetoImage"></img>
                    <h2>Search User GitHub</h2>
                    <p>Um projeto que faz consumo de uma API oficial do GitHub e que permite encontrar perfis do GitHub diretamente neste site, de forma rápida..
                         tecnologias utilizada: <b>HTML</b>, <b>CSS</b>, <b>TailwindCSS</b> e <b>EcmaScript</b>
                    </p>
                    <a href={linkProjeto11} className="linksProjetos">Ver Projeto</a>
                </div>
              </section>  

            </div>
        </section>
    )
}