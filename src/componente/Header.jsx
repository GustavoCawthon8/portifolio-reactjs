import React from "react";
import Banner from "./images/banner.jpg"
import "./Header.scss"

export default function Header(){
    const linkGitHub = "https://github.com/GustavoCawthon8";
    const linkLinkedin = "https://www.linkedin.com/in/gustavo-cawthon-a6371b297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
    const linkYouTube = "https://youtube.com/@gustavocawthon?si=nhSBUeE1YQvbKlPY";
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
                <h1 id="meuNome"></h1>
                <p id="sobreMimTxt">
                Olá, meu nome é Gustavo. Sou desenvolvedor <b>Back-End</b> especializado em <b>NodeJS</b> e <b>MongoDB Atlas</b>. Além disso, atuo também como <b>Front-End</b>, utilizando tecnologias como <b>React</b>, <b>Bootstrap</b>, <b>Scss</b> e <b>TailwindCSS</b>.
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
