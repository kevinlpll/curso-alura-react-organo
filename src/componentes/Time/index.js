import Colaborador from "../Colaborador"
import "./Time.css"


const Time = (props) => {

   const estilos = {
      time: { backgroundColor: props.corSecundaria},
   }

   return (
      <section className="time" style={ estilos.time } >
         <h3 style={{ borderColor: props.corPrimaria }}>{ props.nome }</h3>
         <div>
            <Colaborador />
            <Colaborador />
         </div>
      </section>
   )
   
}

export default Time