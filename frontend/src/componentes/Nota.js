import axios from "axios"

export default function Nota({ nota, atualizar }) {

    function deletar(id) {
        axios.delete('http://localhost:4567/Anotacao/' + id).then(res => {
            atualizar();
        })
    }

    return(
        <div className="card">
        <div className="card-body">
          <h5 className="card-title">{nota.titulo}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <button onClick={() =>deletar(nota.id)}>Deletar</button>
        </div>
      </div>
    )
}