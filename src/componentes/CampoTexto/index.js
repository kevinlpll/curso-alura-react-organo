import "./index.css"

export default function CampoTexto(props) {
   console.log(arguments)

   return (
      <div className="campo-texto">
         <label>{ props.label }</label>
         <input placeholder={props.placeholder}/>
      </div>
   );

}