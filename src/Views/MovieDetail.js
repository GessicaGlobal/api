//COMPONENTE RESPONSAVEL PELA ESTILIZACAO DOS DETALHES DO FILME

import React, { useEffect, useState } from "react"
import { MoviesService } from "../api/MoviesService";
import { useParams } from "react-router-dom";


//MODIFICANDO PARA RECEBER UM FILMES APENAS, ANTES RECEBIA VARIOS FILMES.
export const MovieDetail = (props) => {
    const [movie, setMovie] = useState([]);

    const { id } = useParams(); // Obtenha o parâmetro 'id' da rota


    const getMovie = async () => {
        const { data } = await MoviesService.getMovieDetail(id);

        setMovie(data);
        

     
    };

    //esse useeffectexecuta apenas uma vez
    useEffect(() => {
        getMovie();
        

    }, []);

     return (
    <section className="movie-detail">
        <div className="container">
            <div className="row gx-5">
                <div className="row gx-6">
                <img src = {`https://image.tmdb.org/t/p/w400${movie.poster_path}`} alt="" />
    
                </div>
                <div className="row col-6">
                <h1>{movie.title}</h1>
                <ul>
                    <li> Budget: {movie.budget} </li>
                    <li> Original language: {movie.original_language} </li>
                    <li> Popularidade: {movie.popularity} </li>
                </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {movie.overview}
                </div>
            </div>
        </div>
    </section>
);
     };