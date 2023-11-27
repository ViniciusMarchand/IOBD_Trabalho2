
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Nota from "./Nota";
export default function Notas({ atualizar }) {

    const [listaNotas, setListaNotas] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [hora,setHora] = useState('');
    const [cor, setCor] = useState('#000000');
    const [descricao, setDescricao] = useState('');
    const [idEditar, setIdEditar] = useState(0);

    const editarController = {
        setTitulo: (e) => setTitulo(e),
        setData:(e) => setData(e),
        setHora:(e) => setHora(e),
        setCor:(e) => setCor(e),
        setDescricao:(e) => setDescricao(e),
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
        
        axios.put(`http://localhost:4567/Anotacao/${idEditar}`, nota).then(res => {
        atualizar();
      }).catch(error => console.warn(error.message))
    
      }


    useEffect(() => {
        axios.get('http://localhost:4567/Anotacao').then(res => {
            setListaNotas(res.data)
        }).catch(error => console.warn(error.message))
    }, [])



    return <>
        <div className="anotacoes-block">
            {
                listaNotas.filter(nota => nota.lixeira === false).map((nota, i) => (
                    <Nota nota={nota} atualizar={atualizar} setIdEditar={setIdEditar} editarController={editarController} key={i} />
                ))
            }
        </div>

        {/* Modal Editar */}
        <div className="modal fade" id="staticBackdropEditar" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <form onSubmit={(e) => enviar(e)}>
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Editar Nota</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-label-block">
                                <div className="input-label">
                                    <label>Título</label>
                                    <input type="text" placeholder="insira o titulo da nota" onChange={(e) => setTitulo(e.target.value)} required />
                                </div>
                                <div className="input-label">
                                    <label>Cor</label>
                                    <input type="color" placeholder="insira o titulo da nota" onChange={(e) => setCor(e.target.value)} required />
                                </div>
                                <div className="input-label">
                                    <label>Data</label>
                                    <input type="date" placeholder="insira o titulo da nota" onChange={(e) => setData(e.target.value)} required />
                                </div>
                                <div className="input-label">
                                    <label>Hora</label>
                                    <input type="time" placeholder="insira o titulo da nota" onChange={(e) => setHora(e.target.value)} required step={1} />
                                </div>
                                <div className="input-label">
                                    <label>Descrição</label>
                                    <textarea placeholder="insira o titulo da nota" onChange={(e) => setDescricao(e.target.value)} required />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Editar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
    </>
}