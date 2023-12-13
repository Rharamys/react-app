const Events = () => {
    const handleMyEvent = (e) => {
        console.log('event', e)
    }

    const renderSomething = (x) => {
        if (x) {
            return <h1>Rendering this</h1>
        } else {
            return <h1>Also rendering this</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Click here</button>
                <button onClick={() => {console.log("clicked here")}}>Click here also</button>
            </div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    )
}

export default Events