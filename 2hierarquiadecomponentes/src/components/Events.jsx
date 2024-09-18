const Events = () => {
    var contador = 0

    const handleClique = (e) => {
        console.log(e)
        console.log("Clicou")
        contador = contador + 1
        console.log(contador)
    }

    const renderSomething = (x) => {
        if (x) 
        {
            return <h1>Alguma coisa</h1>
        } else {
            return <h2>Alguma outra coisa</h2>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleClique}>Clique aqui</button>
            </div>
            <div>
                <button onClick={() => {alert("Clicou")}}>Clique aqui também</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
};

export default Events