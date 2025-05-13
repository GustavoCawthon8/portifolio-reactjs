import React from 'react'
import './Style.scss'
import SassImg from './images/tecnologias/sass.png'
import BootstrapImg from './images/tecnologias/bootstrap.png'
import TailwindImg from './images/tecnologias/tailwind.png'
import ReactImg from './images/tecnologias/react.png'
import GitImg from './images/tecnologias/git.png'
import NodeImg from './images/tecnologias/node.png'
import SequelizeImg from './images/tecnologias/sequelize.png'
import PostgresqlImg from './images/tecnologias/postgresql.png'

export default function Sobre(props){
    return(
        <section id={props.identificador}>
            <div className='container-titulo'>
                <h1 className='titulo'>Sobre mim</h1>
            </div>
            <br></br>

        <div id='sobreMim'>
            <section className='paragrafos'> 
               Olá, meu nome é Gustavo, tenho 16 anos
                e moro em Ubatã, no sul da Bahia. Estudo
                programação há 3 anos e, nesse período,
                venho atuando como freelancer em diversos 
                projetos. Sou autodidata, participei de
                diversos cursos gratuitos e estou sempre
                em busca de novos conhecimentos para me 
                aprimorar na área de tecnologia.
            </section>

            <section className='paragrafos'> 
                Sou desenvolvedor back-end com foco em 
                Node.js e PostgreSQL. Também tenho experiência
                com tecnologias como ReactJS, Sass, Bootstrap
                e Tailwind. Meu principal objetivo é atuar
                profissionalmente no back-end, desenvolvendo
                APIs eficientes e seguras, além de buscar 
                oportunidades em empresas para adquirir experiência
                prática e evoluir constantemente meu conhecimento.
            </section>
        </div>

            <br></br>
            <div id='tecnologias'>
                <section className='container-titulo'>
                    <h1 className='titulo'>Habilidades</h1>
                </section>

                <section id='habilidades'>
                <div id='tec'>
                    <img className='imgTecnologias' src={ReactImg}></img>
                    <img className='imgTecnologias' src={BootstrapImg}></img>
                    <img className='imgTecnologias' src={TailwindImg}></img>
                    <img className='imgTecnologias' src={SassImg}></img>
                    <img className='imgTecnologias' src={GitImg}></img>
                    <img className='imgTecnologias' src={NodeImg}></img>
                    <img className='imgTecnologias' src={PostgresqlImg}></img>
                    <img className='imgTecnologias' src={SequelizeImg}></img>
                </div>
                </section>
            </div>
        </section>
    )
}