import "./index.css"
import CampoTexto from "../CampoTexto"
import ListaSuspensa from "../ListaSuspensa"

const Formulario = () => {
   const times = [
      "Programação",
      "Front-end",
      "Data Science",
      "Devops",
      "UX e Design",
      "Mobile",
      "Inovação e gestão"
   ]
   

   return (
   <section className="formulario">
      <form>
         <h2>Preencha os dados para criar o card do colaborador</h2>
         <CampoTexto label="Nome" placeholder="Informe o seu nome"/>
         <CampoTexto label="Cargo" placeholder="Informe o seu cargo"/>
         <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
         <ListaSuspensa label="Times" itens={times} />
      </form>
   </section>

   )
}


export default Formulario