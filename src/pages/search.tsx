import React, { useEffect, useState } from 'react'
import api from '../services/api'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import logo from '../imgs/logo.png'

interface Filme{
  results:Array<{
      id:number;
      title:string;
      overview:string;
      release_date:string;
      vote_average:number;
      poster_path:string;
  }>
}



export default function Search(){

  const [nomeFilme, setNomeFilme] = useState('');
  const [filme, setFilme] = useState<Filme>();

 

  useEffect(() => {
    var url_atual = window.location.href;
    var params = url_atual.split('?');
    api.get(`/search/movie?api_key=d309750af349ef3b9528264e8bdc54d3&language=en-US&query=${params[1]}&page=1`).then(response => {
      setFilme(response.data);
    })
  }, []);

  console.log(filme)

  if(!filme){
    return <p>Carregando....</p>
  }

  return(
    <body id='root'>
      <header className="container header">
    
    <div className="row">
        <div className="col-12 header_area">
            <div className="row">
                <div className="logo_area">
                    <img alt='logo' src={logo} className="logo"/>
                </div>

                <div className="col-12 col-sm-10 col-md-10 col-lg-10 col-xl-7 menu_area">
                    <input type="checkbox" id="menuToggle"/>
                    <label htmlFor="menuToggle" className="menu-icon">
                        <i className="fa fa-bars"></i>
                        <i className="fa fa-times-circle"></i>
                    </label>

                    <nav className="nav menu">
                        <input type="checkbox" id="menuToggle"/>
                        <a className="nav-link" href="#cartaz">Em Cartaz</a>
                        <a className="nav-link" href="#populares">Populares</a>
                        <a className="nav-link" href="#avaliacao">Avaliações</a>
                        <a className="nav-link" href="#entrevista">Entrevistas & Making Of</a>
                        <a className="nav-link" href="#novidades">Novidades</a>
                    </nav>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-3 pesquisa_area">
                     
                    <input id='texto_pesquisa' className="form-control mr-sm-2 caixa-pesquisa" type="search" placeholder="Pesquisar Filme"
                        aria-label="Search" onChange={event => setNomeFilme(event.target.value)}/> 
                                 
                    <Link className="enter-app" to={`/search?${nomeFilme}`}>
                        <FiSearch className='pesquisa_botao' size={26} color="rgba(255, 255, 255, 255)"/>
                    </Link>                     
                </div>  
                </div>
            </div>
        </div>
        </header>
        {filme.results.map((filme) => {
        return(
          <div className="col-6 col-md-3 col-lg-3">
            <div className="row">
               <h3 className="col-12 nome_filme">{filme.title}</h3>
            </div>
            
            <div className="banner">
                <img alt='banner' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${filme.poster_path}`}/>
            </div>
            <div className="row">
                <div className="col-12 sinopse text-justify">
                    <span className="negrito">Sinopse: </span>{filme.overview}
                </div>
            </div>
            <div className="row">
            <div className="col-sm-12 col-md-4 datalanc">
                <span className="negrito">Data de lançamento: </span>{filme.release_date}
            </div>
            <div className="col-sm-12 col-md-4 nota_media">
                <span className="negrito">Nota Média: </span>{filme.vote_average}
            </div>
            </div>
          </div>
        );
      })}
      <footer className="container footer">
    <div className="row conteudo-central">
        <div className="col-12">
            <div className="row">
                <div className="col-10 copyright">
                    <p>Copyright 2020 - Disciplina de Desenvolvimento de Interfaces Web - <span className="negrito">ICEI
                            PUC Minas</span>
                    </p>
                </div>

                <div className="col-2 logo">
                    <img alt='logo' src={logo} className="logo_rodape"/>
                </div>
            </div>
        </div>
    </div>

</footer>
    </body>
  )
}