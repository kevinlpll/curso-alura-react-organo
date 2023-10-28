import Banner from './componentes/Banner';
import CampoTexto from './componentes/CampoTexto';

function App() {
  return (
    <div className="App">
        <Banner />
        <CampoTexto label="Nome" placeholder="Informe o seu nome"/>
        <CampoTexto label="Cargo" placeholder="Informe o seu cargo"/>
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem"/>
    </div>  
  );
}

export default App;
