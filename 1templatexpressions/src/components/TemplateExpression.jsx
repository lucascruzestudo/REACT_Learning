const TemplateExpression = () => {
    const Name = "Lucas"
    return (
        <div>
            <h1>Template Expressions</h1>
            <h2>{`Hello ${5+5}`}</h2>
            <h3>{`Your name is ${Name}`}</h3>
        </div>
    )
}

export default TemplateExpression