import './App.css';
import Boton from './componentes/Boton';
import Counter from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setCount] = useState(0);

  const incrementarClic =() =>{
    setCount(numClics + 1);
  }

  const disminuirClic = () => {
    setCount(numClics - 1);
  }

  return (
    <div className="App">
      <div className='titulo'>
        <h2>CONTADOR  DE CLIC</h2>
        </div>  
      <div className='contenedor-principal'>
        <Counter 
         numClics={numClics}
        />

        <Boton 
          texto='Incrementar'
          esBotonClic={true}
          manejarClic={incrementarClic}/>
        <Boton 
          texto='Disminuir'
          esBotonClic={false}
          manejarClic={disminuirClic}
          />
      </div>
    </div>
  );
    
    
}

export default App;
