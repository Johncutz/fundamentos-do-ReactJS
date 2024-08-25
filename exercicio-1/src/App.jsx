import React from 'react'
import reactLogo from '../public/react.png'
import './App.css'

function App() {
  return (
    <div>
      <div>
        <img src={reactLogo} alt="logo-react" />
      </div>
      <div className='container'>
        <h1>React</h1>
        <p>A biblioteca para interfaces de usuário web e nativas.</p>
        <div>
          <button>Aprenda React</button>
          <button>Referência da API</button>
        </div>
      </div>
      <div className='container'>
        <h2>Crie interfaces de usuário de componentes</h2>
        <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes</p>
      </div>
      <div className='container'>
        <h2>Escreva componentes com código e marcação</h2>
        <p>Componentes React são funções JavaScript. A sintaxe de marcação é chamada de JSX. é uma extensão de sintaxe JavaScript popularizada pelo React.</p>
      </div>
      <div>
        <h2>Próximos passos</h2>
        <ul>
          <li>Uso de dados dinâmicos no JSX</li>
          <li>criação de novos componentes</li>
          <li>Estilização de componentes</li>
          <li>Reutilização de componentes</li>
          <li>Uso de props e children</li>
          <li>Uso de eventos do JavaScript</li>
        </ul>
      </div>
    </div>
  )
}

export default App
