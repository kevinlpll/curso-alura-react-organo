import "./Rodape.css"

const Rodape = ( ) =>{

   return (
      <footer className="rodape">
         <div className="redes-sociais">
            <img src="/imagens/fb.png" alt="Facebook"/>
            <img src="/imagens/tw.png" alt="Facebook"/>
            <img src="/imagens/ig.png" alt="Facebook"/>
         </div>
         <div className="nome-aplicacao">
            <img src="/imagens/logo.png" alt="Logo da aplicação"/>
         </div>
         <div className="desenvolvido-por">Desenvolvido por kevin lopes </div>
      </footer>
   );
}

export default Rodape;