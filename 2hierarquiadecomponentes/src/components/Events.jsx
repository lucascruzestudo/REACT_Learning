const Events = () => {
    var contador = 0

    const handleClique = (e) => {
        console.log(e)
        console.log("Clicou")
        contador = contador + 1
        console.log(contador)
    }

    return (
        <div>
            <div>
                <button onClick={handleClique}>Clique aqui</button>
            </div>
        </div>
    )
};

export default Events