import "./CampoTexto.css"

export default function CampoTexto(props) {

   const aoDigitar = ( event ) => {
      props.aoAlterado(event.target.value);
   }


   return (
      <div className="campo-texto">
         <label>{ props.label }</label>
         <input value={ props.valor } onChange={aoDigitar} required={props.required} placeholder={props.placeholder}/>
      </div>
   );

}