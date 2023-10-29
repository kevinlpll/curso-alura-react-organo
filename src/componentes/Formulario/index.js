import "./index.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"
import Botao from "../Botao"

const Formulario = () => {
   const times = [
      "Programação",
      "Front-end",
      "Data Science",
      "Devops",
      "UX e Design",
      "Mobile",
      "Inovação e gestão"
   ];
   
   const onSave = (event) =>{
      event.preventDefault();
      console.log("Enviado");
   }


   return (
   <section className="formulario">
      <form onSubmit={onSave}>
         <h2>Preencha os dados para criar o card do colaborador</h2>
         <CampoTexto required={true} label="Nome" placeholder="Informe o seu nome"/>
         <CampoTexto required={true} label="Cargo" placeholder="Informe o seu cargo"/>
         <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
         <ListaSuspensa required={true} label="Times" itens={times} />
         <Botao>Criar card</Botao>
      </form>
   </section>

   )
}


export default Formulario