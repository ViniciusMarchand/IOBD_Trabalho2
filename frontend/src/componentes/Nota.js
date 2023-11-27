import axios from "axios"

export default function Nota({ nota, atualizar, setIdEditar, editarController }) {

  function moverParaLixeira(id) {
    axios.put('http://localhost:4567/MoverParaLixeira/' + id).then(res => {
      atualizar();
    })
  }

  return (
    <div className="card">
      <div className="card-header" style={{background:nota.cor}}></div>
      <div className="card-body">
        <h5 className="card-title">{nota.titulo}</h5>
        <p className="card-text">{nota.descricao}</p>
        <div>
          <div>
            <i className="fa-solid fa-clock"></i> {nota.hora}
          </div>
          <div>
            <i className="fa-solid fa-calendar-days"> {" " + nota.data}</i>
          </div>
        </div>
        <button onClick={() => moverParaLixeira(nota.id)}>Deletar</button>
        <button data-bs-toggle="modal" data-bs-target="#staticBackdropEditar" onClick={() => {
          setIdEditar(nota.id)
          editarController.setTitulo(nota.titulo)
        }
        }>Editar</button>
      </div>
    </div>
  )
}