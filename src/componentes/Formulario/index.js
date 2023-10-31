import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"
import { useState } from "react"

const Formulario = (props) => {


   let times = []
   props.times.forEach( (time) => times.push(time.nome) )
   
   const [ nome, setNome ] =  useState("")
   const [ cargo, setCargo ] =  useState("")
   const [ imagem, setImagem ] =  useState("")
   const [ time, setTime ] =  useState("")
   

   const aoSalvar = (event) =>{
      event.preventDefault();
      props.aoColaboradorCadastrado(
         { nome,cargo,imagem,time }
      )
   }

   return (
   <section className="formulario">
      <form onSubmit={aoSalvar}>
         <h2>Preencha os dados para criar o card do colaborador</h2>
         <CampoTexto 
            required={true} 
            label="Nome" placeholder="Informe o seu nome"
            valor={nome}
            aoAlterado={ valor => setNome(valor) }
         />
         <CampoTexto
             required={true} 
             label="Cargo" 
             placeholder="Informe o seu cargo"
             valor={cargo}
             aoAlterado={valor => setCargo(valor)}
         />
         <CampoTexto 
            label="Imagem" 
            placeholder="Informe o endereço da imagem"
            valor={ imagem }
            aoAlterado={(valor) => setImagem(valor)}
         />
         <ListaSuspensa 
            required={true} 
            label="Times" 
            itens={ times }
            valor={ time }
            aoAlterado={(valor) => setTime(valor)}
         />
         <Botao>Criar card</Botao>
      </form>
   </section>

   )
}


export default Formulario