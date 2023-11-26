import { Fragment, useEffect, useState } from 'react';
import './assets/App.css';
import Nota from './componentes/Nota';
import axios from 'axios';
import Notas from './componentes/Notas';
function App() {

  const [key, setKey] = useState(0);
  const [titulo, setTitulo] = useState('');
  const [cor, setCor] = useState('#000000');
  const [data, setData] = useState('');
  const [hora, setHora] = useState('');
  const [descricao, setDescricao] = useState('');

  function atualizar() {
    console.warn(key)
    setKey(key + 1);
    console.warn(key)

  }

  function enviar(e) {
    e.preventDefault();
    console.warn(hora)
    const nota = {
      titulo:titulo,
      cor:cor,
      data:data,
      hora:hora,
      descricao:descricao
    }
    console.warn("nota criada")
    axios.post('http://localhost:4567/Anotacao', nota).then(res => {
    atualizar();
  }).catch(error => console.warn(error.message))

  }

  return (
    <div className="container-fluid">
      <div className="fundo">
      <Notas key={key} atualizar={atualizar}/>
      <button className="botao-adicionar-nota"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" title='Adicionar Nota'>
        <i className="fa-solid fa-plus"></i>
      </button>
      <button className="botao-deletar-nota"  data-bs-toggle="modal" data-bs-target="#staticBackdrop" title='Lixeira'>
      <i className="fa-solid fa-trash"></i>
      </button>
      </div>


    {/* Modal Adicionar */}
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={(e) => enviar(e)}>
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Adicionar Nota</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <div className="input-label-block">
                  <div className="input-label">
                    <label>Título</label>
                    <input type="text" placeholder="insira o titulo da nota" onChange={(e) => setTitulo(e.target.value)} required/>
                  </div>
                  <div className="input-label">
                    <label>Cor</label>
                    <input type="color" placeholder="insira o titulo da nota" onChange={(e) => setCor(e.target.value)} required/>
                  </div>
                  <div className="input-label">
                    <label>Data</label>
                    <input type="date" placeholder="insira o titulo da nota" onChange={(e) => setData(e.target.value)} required/>
                  </div>
                  <div className="input-label">
                    <label>Hora</label>
                    <input type="time" placeholder="insira o titulo da nota" onChange={(e) => setHora(e.target.value)} required step={1}/>
                  </div>
                  <div className="input-label">
                    <label>Descrição</label>
                    <textarea placeholder="insira o titulo da nota" onChange={(e) => setDescricao(e.target.value)} required/>
                  </div>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
              <button type="submit" className="btn btn-primary" >Adicionar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
