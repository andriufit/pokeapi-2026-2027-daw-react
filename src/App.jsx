import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Contador from "./components/contador/contador.jsx"

import Footer from "./layout/footer/footer.jsx";
import Header from "./layout/header/header.jsx";


function App() {
  const [cont, setCont] = useState(0);

  let elementos = [];

  for(let i = 0 ; i < cont ; i++){
    elementos.push(
      <Contador contador={i}/>
    );
  }

  return (
    <>
      <Header/>
      <main>
        <Contador contador={cont}/>
        {cont % 2 == 0 ? <Contador contador={cont + 1}/> : ""}
        <Contador contador={cont + 2}/>
        <button onMouseOver={() => {console.log("over");}} onClick={() => {setCont(cont + 1);console.log(cont);}}>
          Agregar cont
        </button>
        {elementos}
      </main>
      <Footer/>     
    </>
  )
}

export default App
