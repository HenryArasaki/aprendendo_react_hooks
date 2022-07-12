import React, { useState } from "react";
import ReactDOM from "react-dom";

export function FuncTeste(){
    const [nome,setNome] = useState("nome inicial")

    return(
        <div>
            <input type="text" onChange={e=> setNome(e.target.value)} />
            <p>{nome}</p>
        </div>
    )
}