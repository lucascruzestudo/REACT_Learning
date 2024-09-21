import React, { useState } from 'react'

const ManageData = () => {
    let dado = 10;

    const [number, setNumber] = useState(0);

    const handleClique = () => {
        dado = dado + 1
        console.log(dado);
    }

    const handleCliqueComEstado = () => {
        setNumber(number + 1)
        console.log(number);
    }

  return (
    <div>
        <div>
            Valor dos dados: {dado}
            <br></br>
            <button onClick={handleClique}>Clique aqui</button>
        </div>
        <br></br>
        <div>
            Valor do estado: {number}
            <br></br>
            <button onClick={handleCliqueComEstado}>Clique aqui com estado</button>
        </div>
    </div>
  )
}

export default ManageData