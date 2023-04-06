import React from 'react';
import '../hojas-de-estilo/Contador.css';

function Counter({ numClics }) {
    return (
        <div className = 'contador'>
            {numClics}
        </div>
    );
}
export default Counter;