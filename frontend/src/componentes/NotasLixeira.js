
import { useState, useEffect, Fragment } from "react";
import axios from "axios";
import NotaLixeira from "./NotaLixeira";
export default function NotasLixeiras({ atualizar }) {

    const [listaNotas, setListaNotas] = useState([]);
    const [titulo, setTitulo] = useState('');
    const [data, setData] = useState('');
    const [hora,setHora] = useState('');
    const [cor, setCor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [idEditar, setIdEditar] = useState(0);



    useEffect(() => {
        axios.get('http://localhost:4567/Anotacao').then(res => {
            setListaNotas(res.data)
        }).catch(error => console.warn(error.message))
    }, [])


    return <>
        <div className="anotacoes-block">
            {
                listaNotas.filter(nota => nota.lixeira === true).map((nota, i) => (
                    <NotaLixeira nota={nota} atualizar={atualizar} key={i} />
                ))
            }
        </div>
        
    </>
}