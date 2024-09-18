const TemplateExpression = () => {
    const data = {
        name: "Lucas",
        age: 25,
        job: "Programmer"
    }

    return (
        <div>
            <h1>Template Expressions</h1>
            <h2>{`Hello ${5+5}`}</h2>
            <h3>{`Your name is ${data.name}`}</h3>
            <h4>{`Your age is ${data.age}`}</h4>
            <h5>{`Your job is ${data.job}`}</h5>
        </div>
    )
}

export default TemplateExpression