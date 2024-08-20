// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
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

            {
                listaProdutos.map((produto)=>
                <div key= {setProdutos.id}>
                    <p>{produto.nome}</p>
                    <p>{produto.preco}</p>
                    </div>
            )}

        </div>
    );
 }