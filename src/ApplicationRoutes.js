
// Neste exemplo, ApplicationRoutes é um componente
//  que usa o React Router para DEFINIR AS ROTAS para 
//  diferentes partes do aplicativo, como a página inicial, 
//  a página "Sobre" e a página "Contato". A biblioteca React 
//  Router permite que você defina as rotas e associe cada rota
//   a um componente React específico.
// contem declaracoes de rotas da aplicacao

import React from 'react';
import './styles.css';
import { Movie } from "./components/Movie.js";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Views/Home.js";
import { MovieDetail } from './Views/MovieDetail';


export const ApplicationRoutes = () => (//definindo o que e a ApplicationRoutes

    <> {/* o fragment serve para delimitar uma area, s
    em especificar uma div ou elemeento html */}





        <Routes>
            {/* <Route exact path="/" element={<><Home /><Movie /></>}/> aqui as divs sao duplicadas */}        {/* Aqui a home e definida como elemento principal */}
            <Route exact path="/" element={<Home />} />

            
            <Route exact path="/movie/:id" Component={MovieDetail}/>

            <Route exact path="/favorites" Component={MovieDetail}/>


        </Routes>

    </>
);