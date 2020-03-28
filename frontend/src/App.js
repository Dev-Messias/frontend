import React from 'react';

import './global.css';

import Routes from './routes';

//JSX (Sigla para JavaScript XML - sintaxe do html , xml)
function App() {
  //const [counter, setCounter] = useState(0);
  //Retorna um array [Valor da variavel, função de atualização]

 // function increment() {
   // setCounter(counter + 1);
 // }

  return (
    <Routes />
  );
}

export default App;
