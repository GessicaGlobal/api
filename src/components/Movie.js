// Este código React define um componente funcional chamado Movie.
//  O componente recebe uma propriedade movie como argumento e 
//  RENDERIZA AS INFORMACOES DESSE FILME, incluindo um título,
//   uma imagem do pôster e um botão para "Ver detalhes". 
//   O URL da imagem do pôster é gerado com base nas informações 
//   do filme fornecidas na propriedade movie.

import React from 'react';
import { Link } from 'react-router-dom';



export const Movie = ({ movie }) => {
     
 return (  
     <div className="movie-item">
        <div>
            <img src = {`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt="" />
        </div>
        <div className="movie-excerp">

            <h3>{movie.title}</h3>
            <Link to ={`/movie/${movie.id}`} className = "btn btn-primary">Ver detalhes</Link>
          
        
        </div>
    </div>
    )
};
