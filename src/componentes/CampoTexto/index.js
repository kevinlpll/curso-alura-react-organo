import "./index.css"

export default function CampoTexto(props) {

   return (
      <div className="campo-texto">
         <label>{ props.label }</label>
         <input required={props.required} placeholder={props.placeholder}/>
      </div>
   );

}