import { useState } from 'react'
import './App.scss'
import Header from './componente/Header'
import Projetos from './componente/Projetos'
import Sobre from './componente/Sobre'

export default function App(){

  const loader = ()=>{
    location.reload()
  }
  return(
    <>
    <section id='menu'>
      <h1 id='textNome' onClick={loader}>Gustavo <span>Cawthon</span></h1>
    </section>
    <Header identificador='header'></Header>
    <Projetos identificador='projetos'></Projetos>
    <br></br>
    <Sobre identificador='sobre'></Sobre>
    </>
  )
}