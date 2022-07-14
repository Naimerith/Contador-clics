import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {
  //Definimos el estado actual del componente
  const [numClics, setNumClics] = useState(0); //valor inicial del estado

  const aumentarClic = () => {
    console.log('Diste click')
    setNumClics(numClics + 1);
  };
  const reiniciarContador = () => {
    setNumClics(0)
    console.log('Se reinicio')
  };

  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClics={true}
          manejarClics={aumentarClic}
        />
        <Boton
          texto='Reiniciar'
          esBotonDeClics={false}
          manejarClics={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
