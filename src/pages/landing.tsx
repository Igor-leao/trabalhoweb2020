import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './landing.css';

import logo from '../imgs/logo.png'
import noticia1 from '../imgs/noticia1.jpg';
import noticia2 from '../imgs/noticia2.jpg';
import noticia3 from '../imgs/noticia3.jpg';
import perfil1 from '../imgs/perfil1.jpg';
import perfil2 from '../imgs/perfil2.jpg';
import perfil3 from '../imgs/perfil3.jpg';

interface Popular{
    results:Array<{
        id:number;
        title:string;
        overview:string;
        release_date:string;
        vote_average:number;
        poster_path:string;      
    }>
  }
  interface Playing{
    results:Array<{
        id:number;
        title:string;
        overview:string;
        release_date:string;
        vote_average:number;
        poster_path:string;
    }>
  }
    

export default function Landing(){
    const [nomeFilme, setNomeFilme] = useState('');
    const [popular, setPopular] = useState<Popular>();
    const [playing, setPlaying] = useState<Playing>();
    
    useEffect(() => {
        api.get('movie/popular?api_key=d309750af349ef3b9528264e8bdc54d3&language=en-US&page=1').then(response => {
          setPopular(response.data);
        })
        api.get('movie/upcoming?api_key=d309750af349ef3b9528264e8bdc54d3&language=en-US&page=1').then(response => {
            setPlaying(response.data);
          })
      }, []);

    if(!popular){
        return <p>Carregando....</p>
    }
    document.title = 'Portal de filmes';
      return(
        <body id='root'>
              
        <main className="container main">
        <header className="container header">
    
    <div className="row">
        <div className="col-12 header_area">
            <div className="row">
                <div className="col-12 col-sm-2 col-md-2 col-lg-2 col-xl-2 logo_area">
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

        <article className="row">
            <div className="col-12 main2">
                <div className="row cartaz">
                    <h2 className=" col-12 tit1" id="cartaz">Filmes em Cartaz</h2>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row lancamentos ">
                                    <div className="col-12 col-lg-6 trailer">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title='video' className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/9nlhmJF5FNI"></iframe>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="row">
                                            <h3 className="col-12 nome_filme">{playing?.results[0].title}</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-10 sinopse text-justify">
                                                <span className="negrito">Sinopse: </span>{playing?.results[0].overview}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 datalanc">
                                                <span className="negrito">Data de lançamento: </span>{playing?.results[0].release_date}
                                            </div>

                                            <div className="col-sm-12 col-md-4 nota_media">
                                                <span className="negrito">Nota Média: </span>{playing?.results[0].vote_average}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row lancamentos">
                                    <div className="col-12 col-lg-6 trailer">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title='video' className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/XUN5EEDwHcI"></iframe>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="row">
                                            <h3 className="col-12 nome_filme">{playing?.results[1].title}</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-10 sinopse text-justify">
                                                <span className="negrito">Sinopse: </span>{playing?.results[1].overview}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 datalanc">
                                                <span className="negrito">Data de lançamento: </span>{playing?.results[1].release_date}
                                            </div>

                                            <div className="col-sm-12 col-md-4 nota_media">
                                                <span className="negrito">Nota Média: </span>{playing?.results[1].vote_average}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row lancamentos">
                                    <div className="col-12 col-lg-6 trailer">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title='video' className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/X0K5cA2hS6g"></iframe>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="row">
                                            <h3 className="col-12 nome_filme">{playing?.results[2].title}</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-10 sinopse text-justify">
                                                <span className="negrito">Sinopse: </span>{playing?.results[2].overview}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 datalanc">
                                                <span className="negrito">Data de lançamento: </span>{playing?.results[2].release_date}
                                            </div>

                                            <div className="col-sm-12 col-md-4 nota_media">
                                                <span className="negrito">Nota Média: </span>{playing?.results[2].vote_average}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="row lancamentos">
                                    <div className="col-12 col-lg-6 trailer">
                                        <div className="embed-responsive embed-responsive-16by9">
                                            <iframe title='video' className="embed-responsive-item"
                                                src="https://www.youtube.com/embed/y8UDuUVwUzg"></iframe>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-12 col-lg-6">
                                        <div className="row">
                                            <h3 className="col-12 nome_filme">{playing?.results[3].title}</h3>
                                        </div>
                                        <div className="row">
                                            <div className="col-12 col-lg-10 sinopse text-justify">
                                                <span className="negrito">Sinopse: </span>{playing?.results[3].overview}
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-sm-12 col-md-4 datalanc">
                                                <span className="negrito">Data de lançamento: </span>{playing?.results[3].release_date}
                                            </div>

                                            <div className="col-sm-12 col-md-4 nota_media">
                                                <span className="negrito">Nota Média: </span>{playing?.results[3].vote_average}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article className="row populares conteudo-central">
            <h2 className="col-12 col-md-6 col-lg-6 tit2 " id="populares">Populares</h2>

            <div className="col-7 col-md-6 col-lg-6 dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Categoria: TODOS
                </button>
                <div className="dropdown-menu">
                    <button className="dropdown-item" type="button">Aventura</button>
                    <button className="dropdown-item" type="button">Romance</button>
                    <button className="dropdown-item" type="button">Comédia</button>
                    <button className="dropdown-item" type="button">Suspense</button>
                </div>
            </div>

            <div className="row">

                <div className="col-6 col-md-3 col-lg-3">
                    <div className="row">
                        <h3 className="col-12 nome_filme">{popular.results[0].title}</h3>
                    </div>
                    <div className="banner">
                        <img alt='banner1' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${popular.results[0].poster_path}`}/>
                    </div>
                    <div className="row">
                        <div className="col-12 sinopse text-justify">
                            <span className="negrito">Sinopse: </span>{popular.results[0].overview}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-4 datalanc">
                            <span className="negrito">Data de lançamento: </span>{popular.results[0].release_date}
                        </div>

                        <div className="col-sm-12 col-md-4 nota_media">
                            <span className="negrito">Nota Média: </span>{popular.results[0].vote_average}
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3 col-lg-3">
                    <div className="row">
                        <h3 className="col-12 nome_filme">{popular.results[1].title}</h3>
                    </div>
                    <div className="banner">
                        <img alt='banner2' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${popular.results[1].poster_path}`}/>
                    </div>
                    <div className="row">
                        <div className="col-12 sinopse text-justify">
                            <span className="negrito">Sinopse: </span>{popular.results[1].overview}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-4 datalanc">
                            <span className="negrito">Data de lançamento: </span>{popular.results[1].release_date}
                        </div>

                        <div className="col-sm-12 col-md-4 nota_media">
                            <span className="negrito">Nota Média: </span>{popular.results[1].vote_average}
                        </div>
                    </div>                    
                </div>

                <div className="col-6 col-md-3 col-lg-3">
                    <div className="row">
                        <h3 className="col-12 nome_filme">{popular.results[2].title}</h3>
                    </div>
                    <div className="banner">
                        <img alt='banner3' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${popular.results[2].poster_path}`}/>
                    </div>
                    <div className="row">
                        <div className="col-12 sinopse text-justify">
                            <span className="negrito">Sinopse: </span>{popular.results[2].overview}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-4 datalanc">
                            <span className="negrito">Data de lançamento: </span>{popular.results[2].release_date}
                        </div>

                        <div className="col-sm-12 col-md-4 nota_media">
                            <span className="negrito">Nota Média: </span>{popular.results[2].vote_average}
                        </div>
                    </div>
                </div>

                <div className="col-6 col-md-3 col-lg-3">
                    <div className="row">
                        <h3 className="col-12 nome_filme">{popular.results[3].title}</h3>
                    </div>
                    <div className="banner">
                        <img alt='banner4' src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${popular.results[3].poster_path}`}/>
                    </div>
                    <div className="row">
                        <div className="col-12 sinopse text-justify">
                            <span className="negrito">Sinopse: </span>{popular.results[3].overview}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-sm-12 col-md-4 datalanc">
                            <span className="negrito">Data de lançamento: </span>{popular.results[3].release_date}
                        </div>

                        <div className="col-sm-12 col-md-4 nota_media">
                            <span className="negrito">Nota Média: </span>{popular.results[3].vote_average}
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active" id="botao-carregar">
                            <input type="checkbox" checked/> <i className="fa fa-plus"></i> Carregar mais filmes
                        </label>
                    </div>
                </div>
            </div>
        </article>

        <article className="row avaliacoes">
            <div className="col-12 avaliacao conteudo-central">
                <h2 className="tit2" id="avaliacao">Últimas avaliações</h2>
                <div className="row">

                    <div className="col-12 col-lg-6 col-xl-4 card-avaliacao">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-2 foto">
                                    <img alt='perfil3' src={perfil3}/>
                                </div>

                                <div className="col-12 resposta_avaliacao">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5>Scarlett</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <span className="negrito">Filme: </span>Ghost in the Shell
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 text-justify">
                                            <p><span className="negrito">Avaliação: </span>Tecnicamente quando se diz em
                                                visual, fotografia, efeitos e ambientação, o filme funciona muito bem,
                                                mas a história esta truncada e soturna, cenas de ação muito espaçadas,
                                                não deve agradar o grande público, já que a protagonista não é
                                                carismática, mas esta muito bem adaptado do anime, lá também a
                                                personagem não esbanja carisma.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-7 avaliacao_individual">
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela-nula2"></i>
                                            <i className="fa fa-star" id="estrela-nula2"></i>
                                        </div>
                                        <div className="col-5 data_avaliacao">
                                            <span className="negrito">18/08/2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-4 card-avaliacao">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-2 foto">
                                    <img alt='perfil2' src={perfil2}/>
                                </div>

                                <div className="col-12 resposta_avaliacao">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5>Robert</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <span className="negrito">Filme: </span>Água para Elefantes
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 text-justify">
                                            <p><span className="negrito">Avaliação: </span>Filme planejado com esmero,
                                                história e roteiros que não deixam lacunas, a meu ver, Christof Waltz,
                                                mais uma vez roubou a cena com uma atuação digna de elogios. Tendo como
                                                pano de fundo a depressão pós 1929 , o cenário e figurinos ótimos, essa
                                                produção a meu ver merece conceito muito bom.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-7 avaliacao_individual">
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                        </div>
                                        <div className="col-5 data_avaliacao">
                                            <span className="negrito">25/07/2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-4 card-avaliacao">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-2 foto">
                                    <img alt='perfil1' src={perfil1}/>
                                </div>

                                <div className="col-12 resposta_avaliacao">
                                    <div className="row">
                                        <div className="col-12">
                                            <h5>Keanu</h5>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12">
                                            <span className="negrito">Filme: </span>Jhon Wick 3: Parabellum
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-12 text-justify">
                                            <p><span className="negrito">Avaliação: </span>Adrenalina pura em roteiro
                                                simples e eficiente. Filme de alta qualidade cenográfica e coreográfica.
                                                No final, nada de esperar os créditos para ter as cenas do próximo filme
                                                da franquia, pois o final do filme já é a chamada para o próximo. Keanu
                                                manda muito bem e a Halle Barry com seus 2 cachorros também. Algumas
                                                piadas provocam frouxos de risos. Tem a questão do cachorro com a Halle
                                                e a motivação singela do John para viver. Muita pipoca e refri, porque
                                                vale a pena. Comparado com Vingadores é muito mais divertido e eficaz.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-7 avaliacao_individual">
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela2"></i>
                                            <i className="fa fa-star" id="estrela-nula2"></i>
                                        </div>
                                        <div className="col-5 data_avaliacao">
                                            <span className="negrito">03/03/2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 conteudo-central">
                <div className="btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-secondary active" id="botao-carregar">
                        <input type="checkbox" checked/> <i className="fa fa-plus"></i> Carregar mais avaliações
                    </label>
                </div>
            </div>
        </article>
        <article className="row entrevista">
            <div className="col-12 entrevistas conteudo-central">
                <h2 className="tit2" id="entrevista">Entrevistas & Making Of</h2>

                <div className="row">

                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title='video' className="embed-responsive-item" src="https://www.youtube.com/embed/mox0_xGO-Do"></iframe>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                <h5>Joker</h5>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Diretor: </span>Todd Phillips
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Roteiro: </span>Todd Phillips | Scott Silver
                                    </div>

                                    <div className="col-12 estreia_filme">
                                        <span className="negrito">Estreia: </span>2019
                                    </div>
                                </div>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title='video' className="embed-responsive-item" src="https://www.youtube.com/embed/cdYZQ_ZU0MM"></iframe>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                <h5>Bird Box</h5>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Diretor: </span>Susanne Bier
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Roteiro: </span>Josh Malerman | Eric Heisserer
                                    </div>

                                    <div className="col-12 estreia_filme">
                                        <span className="negrito">Estreia: </span>2018
                                    </div>
                                </div>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="card">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe title='video' className="embed-responsive-item" src="https://www.youtube.com/embed/iTBmSCJvUcI"></iframe>
                            </div>
                            <div className="card-body">
                                <p className="card-text">
                                <h5>Suicide Squad</h5>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Diretor: </span>David Ayer

                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-12">
                                        <span className="negrito">Roteiro: </span>David Ayer
                                    </div>

                                    <div className="col-12 estreia_filme">
                                        <span className="negrito">Estreia: </span>2016
                                    </div>
                                </div>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="btn-group-toggle" data-toggle="buttons">
                            <label className="btn btn-secondary active" id="botao-carregar">
                                <input type="checkbox" checked/> <i className="fa fa-plus" ></i> Carregar mais filmes
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </article>

        <article className="row conteudo-central informacoes">

            <div className="col-12 col-lg-8 novidades">
                <h2 className=" col-12 tit2" id="novidades">Novidades</h2>

                <div className="row reportagem">
                    <div className="col-12 col-lg-4">
                        <img alt='noticia1' src={noticia1} className="foto_noticia" />
                    </div>

                    <div className="col-12 col-lg-8 materia">
                        <div className="col-12 data_materia">
                            28 de Agosto de 2019
                        </div>
                        <div className="col-12">
                            <h5>Esquadrão Suicida 2 será lançado com outro título</h5>
                        </div>
                        <div className="col-12">
                            <p className="text-left">
                                Palavra do James Gunn!
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="tags">
                                <a href="#esquadrao suicida">esquadrao suicida</a>
                                <a href="#hollywood">hollywood</a>
                                <a href="#james gunn">james gunn</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row reportagem">
                    <div className="col-12 col-lg-4">
                        <img alt='' src={noticia2} className="foto_noticia" />
                    </div>

                    <div className="col-12 col-lg-8 materia">
                        <div className="col-12 data_materia">
                            2 de Dezembro de 2020
                        </div>
                        <div className="col-12">
                            <h5>The Mandalorian: 5 produtos que todo fã da série do Disney+ precisa ter</h5>
                        </div>
                        <div className="col-12">
                            <p className="text-left">
                                Mesmo após a Black Friday, a Amazon continua com algumas ofertas — e frete grátis — para
                                quem está louco para ter produtos da série The Mandalorian, derivada do universo Star
                                Wars.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="tags">
                                <a href="#mandalorian">mandalorian</a>
                                <a href="#disney">disney</a>
                                <a href="#produtos">produtos</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row reportagem">
                    <div className="col-12 col-lg-4">
                        <img alt='noticia3' src={noticia3} className="foto_noticia" />
                    </div>

                    <div className="col-12 col-lg-8 materia">
                        <div className="col-12 data_materia">
                            1 de Dezembro de 2020
                        </div>
                        <div className="col-12">
                            <h5>Brasileiros usuários de torrent recebem multa de R$ 3 mil</h5>
                        </div>
                        <div className="col-12">
                            <p className="text-left">
                                A autuação aconteceu por conta de um suposto download e compartilhamento de três filmes
                                de 2019.
                            </p>
                        </div>
                        <div className="col-12">
                            <div className="tags">
                                <a href="#pirataria">pirataria</a>
                                <a href="#torrent">torrent</a>
                                <a href="#brasil">brasil</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-12">
                    <div className="btn-group-toggle" data-toggle="buttons">
                        <label className="btn btn-secondary active" id="botao-carregar">
                            <input type="checkbox" checked/> <i className="fa fa-plus" ></i>Ver mais notícias
                        </label>
                    </div>
                </div>
            </div>

            
            <div className="col-12 col-lg-4 info">

              
                <div className="row">
                    <div className="col-12">
                        <h2 className="tit2">Sobre</h2>
                        <p className="text-justify">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt dolor voluptatibus
                            quisquam dolores, repellendus, at commodi, facere quis aliquid ipsam vel eos pariatur iste
                            fuga. Esse molestiae nulla minus maiores!
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="tit3">Editorial</h2>

                        <div className="col-12 pessoas">
                            <i className="fa fa-user"></i>
                            <span className="negrito">Redação: </span>Igor Sena
                        </div>

                        <div className="col-12 pessoas">
                            <i className="fa fa-user"></i>
                            <span className="negrito">Pesquisa: </span>Igor Sena
                        </div>

                        <div className="col-12 pessoas">
                            <i className="fa fa-user"></i>
                            <span className="negrito">Gerente Geral: </span>Igor Sena
                        </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="tit4">Redes Sociais:</h3>
                        <div className="row">
                            <div className="col-12 media-icons">
                                <a href="https://www.facebook.com/AdoroCinema/" target="blanck"><i
                                        className="fa fa-facebook-square"></i></a>&emsp;
                                <a href="https://twitter.com/adorocinema" target="blanck"><i
                                        className="fa fa-twitter"></i></a>&emsp;
                                <a href="https://www.instagram.com/adorocinema/" target="blanck"><i
                                        className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article> 
    </main>
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
)}