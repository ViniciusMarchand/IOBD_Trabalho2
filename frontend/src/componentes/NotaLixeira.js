import axios from "axios"

export default function NotaLixeira({ nota, atualizar, setIdEditar, editarController }) {

  function deletar(id) {
    axios.delete('http://localhost:4567/Anotacao/' + id).then(res => {
      atualizar();
    })
  }

  function tirarDaLixeira(id) {
    axios.put('http://localhost:4567/TirarDaLixeira/' + id).then(res => {
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
        <button onClick={() => deletar(nota.id)}>Deletar permanentemente</button>
        <button onClick={() => tirarDaLixeira(nota.id)}>Recuperar</button>

      </div>
    </div>
  )
}