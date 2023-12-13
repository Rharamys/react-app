const Challenge = () => {
    let number1 = 1;
    let number2 = 2;

    const handleClick = (e) => {
        console.log("Result", number1 + number2)
    }

    return (
        <div>
            <h3>First number is {number1}</h3>
            <h3>Second number is {number2}</h3>
            <button onClick={handleClick}>Click here to perform add function</button>
        </div>
    )
}

export default Challenge