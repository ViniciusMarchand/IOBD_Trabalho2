import axios from "axios"

export default function Nota({ nota, atualizar, setIdEditar, editarController }) {

  function moverParaLixeira(id) {
    axios.put('http://localhost:4567/MoverParaLixeira/' + id).then(res => {
      atualizar();
    })
  }

  const convertTime12to24 = (time12h) => {
    const [time, modifier] = time12h.split(' ');
  
    let [hours, minutes, seconds] = time.split(':');
  
    if (hours === '12') {
      hours = '00';
    }
  
    if (modifier === 'PM') {
      hours = parseInt(hours, 10) + 12;
    }
  
    return `${hours}:${minutes}:${seconds}`;
  }

  function copiarNota(nota) {
    let data = new Date(nota.data);
    // data = data.getFullYear() + "-" + data.getMonth() + "-" + data.getDay();
    console.log(convertTime12to24(nota.hora))
    const notaCopiada = {
      titulo:nota.titulo,
      cor:nota.cor,
      data:data.toISOString().split('T')[0],
      hora:convertTime12to24(nota.hora),
      descricao:nota.descricao
    }

    axios.post('http://localhost:4567/Anotacao', notaCopiada).then(res => {
      console.log('foi')
      atualizar()

    }).catch(error => console.warn(error.message))
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
        <button className="botao-nota" onClick={() => moverParaLixeira(nota.id)}>Deletar</button>
        <button className="botao-nota" data-bs-toggle="modal" data-bs-target="#staticBackdropEditar" onClick={() => {
          setIdEditar(nota.id)
          editarController.setTitulo(nota.titulo)
        }
        }>Editar</button>
        <button className="botao-nota" onClick={() => copiarNota(nota)}>Copiar</button>
      </div>
    </div>
  )
}