import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

//   const times = [
//     { nome: "Programação",corPrimaria: "#D9F7E9",corSecundaria: "#57C278" },
//     { nome: "Front End",corPrimaria: "#E8F8FF",corSecundaria: "#82CFFA" },
//     { nome: "Data Science",corPrimaria: "#F0F8E2",corSecundaria: "#A6D157" },
//     { nome: "Devops",corPrimaria: "#FDE7E8",corSecundaria: "#E06B69" },
//     { nome: "UX e Design",corPrimaria: "#FAE9F5",corSecundaria: "#DB6EBF" },
//     { nome: "Mobile",corPrimaria: "#FFF5D9",corSecundaria: "#FFBA05" },
//     { nome: "Inovação e gestão",corPrimaria: "#FFEEDF",corSecundaria: "#FF8A29" },
//  ];



  const times = [
    { nome: "Programação",corPrimaria: "#57C278",corSecundaria: "#D9F7E9" },
    { nome: "Front End",corPrimaria: "#82CFFA",corSecundaria: "#E8F8FF" },
    { nome: "Data Science",corPrimaria: "#A6D157",corSecundaria: "#F0F8E2" },
    { nome: "Devops",corPrimaria: "#E06B69",corSecundaria: "#E06B69" },
    { nome: "UX e Design",corPrimaria: "#DB6EBF",corSecundaria: "#FAE9F5" },
    { nome: "Mobile",corPrimaria: "#FFBA05",corSecundaria: "#FFF5D9" },
    { nome: "Inovação e gestão",corPrimaria: "#FF8A29",corSecundaria: "#FFEEDF" },
 ];

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaborador = ( colaborador ) =>{    
    console.log(colaborador)
    setColaboradores(...colaboradores, colaborador)
  }

  return (
    <div className="App">
        <Banner />
        <Formulario times={times} aoColaboradorCadastrado={colaborador => aoNovoColaborador(colaborador) } />
        { times.map(( time ) => <Time key={ time.nome }  nome={ time.nome } corPrimaria={ time.corPrimaria } corSecundaria={ time.corSecundaria }  /> ) }
    </div>  
  );
}

export default App;
