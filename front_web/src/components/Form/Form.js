import axios from 'axios';
import React from 'react';
import toastNot from '../../services/toastNot';
import { ToastContainer } from 'react-toastify';
import './form.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Form() {
    const [id, setId] = useState();
    const [nome, setNome] = useState();
    const [estado, setEstado] = useState();
    const [descricao, setDescricao] = useState();
    const [tipo, setTipo] = useState();
    const [opcao1, setOpcao1] = useState();



    const submit = async ()=>{
        await axios.post('http://localhost:3001/sessao', {id, nome, estado, descricao, tipo, opcao1})
            .then(res=> res).catch(e=> e);
        toastNot();       
    }

    const handleSubmit = e=>{
        e.preventDefault();
    }
  return (
    <div className="container">
        <form className='form' onSubmit={handleSubmit}>
            <label className='div_label'>
                <span>Número da sessão</span>
                <input type="text"  name='id' onChange={(e)=> setId(e.target.value)}/>
            </label>
            <label className='div_label'>
                <span>Nome do candidato</span>
                <input type="text"  name='nome'onChange={(e)=> setNome(e.target.value)}/>
            </label>
            <label className='div_label'>
                <span>Estado</span>
                <input type="text"  name='estado'onChange={(e)=> setEstado(e.target.value)}/>
            </label>
            <label className='div_label'>
                <span>Tipo</span>
                <input type="text"  name='tipo'onChange={(e)=> setTipo(e.target.value)}/>
            </label>
            <label className='div_label'>
                <span>Descrição da proposta</span>
                <textarea name="descricao" cols="51" rows="5" onChange={(e)=> setDescricao(e.target.value)}></textarea>
                {/* <input type="text"  name='descricao'onChange={(e)=> setDescricao(e.target.value)}/> */}
            </label>
            <div className='opcao_voto'>
                <label>
                    <span>Sim</span>
                    <input type="checkbox" value='sim' name="opcao1" onChange={(e)=> setOpcao1(e.target.value)}/>
                </label>
                <label>
                    <span>Não</span>
                    <input type="checkbox" value='nao' name="opcao2" onChange={(e)=> setOpcao1(e.target.value)}/>
                </label>
            </div>
            <div className='btn_div'> 
                <button className='btn' onClick={submit}>Enviar</button>
                <Link to='/voto'>
                    <button className='btn_vt'>Votação</button>
                </Link>
            </div>
        </form>
        <ToastContainer/>
    </div>
  )
}


