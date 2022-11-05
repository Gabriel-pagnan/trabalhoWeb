import React, { Component } from 'react';
import './result.css';
import api from '../../services/api';

class Result extends Component{
  state = {
    sessao: [],
    votos: [],
    resposta: [],
  }

  async componentDidMount(){
    const response = await api.get('/select');
    this.setState({sessao: response.data});

    const votos = await api.get('/selecaovoto');
    this.setState({votos: votos.data});

  }
  
  render(){
    const data = this.state.sessao;
    const voto = this.state.votos;
    return(
      <div className='container_sessao'>
        <div className='sessao'>
          <h3>Sessões cadastradas</h3>
          <ul>
            {
              data.map((d, index) => (
                <li key={index}>
                  <span>N° sessão: {d.ID}</span>
                  <span>Nome: {d.Nome}</span>
                  <span>Estado: {d.Estado}</span>
                  <span>Descricão: {d.Descricao}</span>
                  <span>Tipo: {d.Tipo}</span>
                  <span>Resposta: {d.Opcao1}</span>
                </li>
              ))
            }
          </ul>
        </div>
          
        <div className='container_sessao'>
            <div className='votos'>
              <h3>Votos cadastrados</h3>
              <ul>
                {
                  voto.map((d, index) => (
                    <li key={index}>
                      <span>Estado: {d.Estado}</span>
                      <span>Resposta: {d.Resposta}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
        </div>

      </div>
    )
  }
}

export default Result