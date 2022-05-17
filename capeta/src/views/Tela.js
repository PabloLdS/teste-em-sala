import React from "react";
import Lista from "../components/Lista";
import tela from './css/Tela.css';


const Tela = () => {
  return (
  <>
    <div className="cssContainer">

        <h1>Minha lista</h1>
          <Lista/>

    </div>
  </>
  )
}
export default Tela;