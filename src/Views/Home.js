//definindo a home:
// Em resumo, o componente Home FAZ UMA SOLICITACAO para obter 
// informações sobre filmes populares usando a função getMovies
//  quando é montado. Em seguida, RENDERIZA OS FILMES OBTIDOS na
//   página inicial usando o componente Movie.


import { MoviesService } from "../api/MoviesService.js";
import { Movie } from "../components/Movie.js";
import React, { useEffect, useState } from 'react';


export const Home = () => {
    const [movies, setMovies] = useState([]);
    console.log("asd", movies);
    //accessando o results dentro de data
    const getMovies = async () => {
        const { data: { results }
        } = await MoviesService.getMovies();
        setMovies(results);
        console.log(results);
    };

    //esse useeffectexecuta apenas uma vez
    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="container">
            <div className="row gy-5">
                {movies.map((movie) => (
                    //essa chave diferencia todos os itens listados com um id
                    <div key={movie.id} className="col-3">
                        <Movie movie={movie} />
                    </div >
                ))}
            </div>
        </div >
    )
};

/*
...............................................................
Explicando GETMOVIES:
 
uma função assíncrona chamada getMovies é definida. 
O async indica que a função irá conter operações 
assíncronas, como requisições de rede, que podem
demorar um tempo para serem concluídas.
...............................................................
 
 A palavra - chave AWAIT é usada para esperar a
conclusão dessa Promessa. Isso significa que o 
antes de continuar a execução.código aguardará 
até que a Promessa seja resolvida(ou rejeitada)
...............................................................
 
Quando a Promessa for resolvida, os dados retornados 
pela Promessa serão desestruturados. Isso significa 
que o código está extraindo o valor da propriedade 
data e alocando-o à variável results.
 
.............................................................
setMovies(results);: Após a desestruturação dos dados, 
o valor obtido da propriedade results é passado como 
argumento para a funçãosetMovies.É provável que setMovies 
seja uma função que atualiza algum estado no contexto de 
uma aplicação, como em uma interface de usuário.
...............................................................
 
*/

