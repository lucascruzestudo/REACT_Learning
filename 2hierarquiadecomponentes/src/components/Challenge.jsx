const Challenge = () => {
    var contador = 15
    var contador2 = 265

    const handleSumRequest = () => {
        console.log("Solicitou a soma")
        console.log(contador + contador2)
    }

    return (
        <div>
            <h1>Challenge</h1>
            <h2>Contador: {contador}</h2>
            <h2>Contador2: {contador2}</h2>
            <button onClick={handleSumRequest}>Soma</button>
        </div>
    )
}

export default Challenge