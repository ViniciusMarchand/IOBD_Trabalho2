import { useEffect, useState } from 'react';
import './assets/App.css';
import Nota from './componentes/Nota';
import axios from 'axios';
function App() {

  const [listaNotas, setListaNotas] = useState([]);
  const [key, setKey] = useState(0);

  function atualizar() {
    setKey(key + 1);
  }
  
  useEffect(() => {
    axios.get('http://localhost:4567/Anotacao').then(res => {
      setListaNotas(res.data)
    }).catch(error => console.warn(error.message))
  }, [listaNotas])

  return (
    <div className="container-fluid">
      <div className="fundo">
        <div className="anotacoes-block" key={key}>
          {
            listaNotas.map((nota, i) => (
              <Nota nota={nota} atualizar={atualizar} key={i}/>
            ))
          }
        </div>
      </div>
    </div>

  );
}

export default App;
