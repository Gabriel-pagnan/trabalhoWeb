/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

export default function Navbar() {
  return (
    <div>
        <nav className='nav'>
            <Link to='/'>
                <a>Home</a>
            </Link>
            <ul>
                <li>
                    <Link to='/formulario'>
                        <a>Cadastrar Sessão</a>
                    </Link>
                </li>
                <li>
                    <Link to='/voto'>
                        <a>Votação</a>
                    </Link>
                </li>
                <li>
                <   Link to='/resultados'>
                        <a>Resultados</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
