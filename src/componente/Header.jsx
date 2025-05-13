import React from "react";
import Banner from "./images/banner2.png"
import "./Header.scss"

export default function Header(){
    const linkGitHub = "https://github.com/GustavoCawthon8";
    const linkLinkedin = "https://www.linkedin.com/in/gustavo-cawthon-a6371b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
    const linkYouTube = "https://youtube.com/@gustavo_cawthon?si=-J9m_L57VfC-aKho";
    const linkEmail = "https://contatogcdev.netlify.app/"
    return(
        <section>
            <div style={{
                backgroundImage: `url(${Banner})`,
                width: "100%",
                height: "400px",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(3px)",
                filter: "grayscale(0.7)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}>
                <h1 id="meuNome">
                   <span>Desenvolvedor</span> Back-End
                </h1>
                <p id="sobreMimTxt">
                   Sou desenvolvedor com 2 anos de experiência, atualmente focado em 
                   desenvolvimento <b>Back-End</b> com <b>Node.js</b>, <b>Sequelize</b> e <b>PostgreSQL</b>. Tenho 
                   experiência anterior com <b>Front-End</b> utilizando <b>ReactJs</b>, <b>Scss</b>, <b>Tailwindcss</b>
                    e <b>Bootstrap</b>, o que me permite atuar como desenvolvedor <b>Fullstack</b> 
                    quando necessário. Estou aprofundando meus conhecimentos em criação
                     de APIs RESTful escaláveis, segurança de aplicações e banco de dados
                      relacionais. Busco constantemente novos desafios e soluções 
                      eficientes para problemas reais.
                </p>
                <br></br>
                <nav id="links">
                    <a href={linkGitHub} className="links" id="github">
                    <i class="bi bi-github"></i>
                    </a>

                    <a href={linkYouTube} className="links" id="youtube">
                    <i class="bi bi-youtube"></i>
                    </a>

                    <a href={linkLinkedin} className="links" id="linkedin">
                    <i class="bi bi-linkedin"></i>
                    </a>

                    <a href={linkEmail} className="links" id="email">
                    <i class="bi bi-envelope-at-fill"></i>
                    </a>
                </nav>

            </div>
        </section>
    )
}
