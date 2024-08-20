// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import {useState} from "react";

export default function Home() {

    const [listaProdutos, setProdutos] = useState([
        { id:1, nome: 'nike kd 15', preco: '1.234.00'},
        { id:2, nome: 'nike fly by mid 3', preco:'540,99'},
        { id:3, nome: 'kyrie 7', preco: '769,99'},
        
    ]);

return (
    <div>
        <h1>Nike</h1> 
  </div>
)
}