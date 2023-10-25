
// REQUISICAO para chamar o metodo do componente.
// Este trecho de código em React cria um serviço 
// para lidar com chamadas de API usando a biblioteca 
// Axios para obter informações sobre filmes a partir 
// da API do "The Movie Database" (TMDb).

import axios from 'axios';
import React from 'react';


const API_KEY = 'd416af5d4faee64e25ab001d87aab5c3';
const BASE_URL = 'https://api.themoviedb.org/3/';

const withBaseUrl = (path) => `${BASE_URL}${path}?api_key=${API_KEY}`


export class MoviesService {
    static getMovies() {
        return axios(withBaseUrl('movie/popular'))
    }

    static getMovieDetail(id) {
        return axios(withBaseUrl(`movie/${id}`))
    }

}