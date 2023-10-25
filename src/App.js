// Em resumo, o componente App age como um invólucro para
// os componentes principais do aplicativo, incluindo 
// o cabeçalho e as rotas da aplicação. Ele é RESPONSAVEL POR
// RENDERIZAR esses componentes na interface do usuário
// do aplicativo.

import React from 'react';

import { ApplicationRoutes } from './ApplicationRoutes';
import { Header } from './components/Header';

function App() {

  return (
    <>
      <Header />
      <ApplicationRoutes />

    </>
  );

}

export default App;
