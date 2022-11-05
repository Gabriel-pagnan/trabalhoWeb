import axios from 'axios';
import React from 'react';

import toastNot from '../../services/toastNot';
import '../../components/Form/form.css'
import { ToastContainer } from 'react-toastify';

import { Link } from 'react-router-dom';
import { useState } from 'react'


export default function Voto() {
  const [estado, setEstado] = useState();
  const [resposta, setResposta] = useState();

  const submit = async ()=>{
    await axios.post('http://localhost:3001/voto', {estado, resposta})
        .then(res=> res).catch(e=> e);
    toastNot();       
  }

  const handleSubmit = e=>{
    e.preventDefault();
  }
  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
          <label className='div_label'>
            <span>Estado</span>
            <input type="text" onChange={(e)=> setEstado(e.target.value)} />
          </label>
          <label className='div_label'>
            <span>Resposta</span>
            <input type="text" onChange={(e)=> setResposta(e.target.value)} />
          </label>
          <div className='btn_div'> 
                <button className='btn' onClick={submit}>Enviar</button>
                <Link to='/resultados'>
                    <button className='btn_vt'>Resultados</button>
                </Link>
            </div>
      </form>
      <ToastContainer/>
    </div>
  )
}

