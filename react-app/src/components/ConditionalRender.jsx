import { useState } from "react";

const ConditionalRender = () => {

    const [x] = useState(true);

    const [name] = useState("João")

    return (
        <div>
            <h1>Will this be shown?</h1>
            {x && <p>If x is true, this will be shown</p>}
            {!x && <p>If x is false, this will be shown</p>}

            {name === "João" ? (
                <div> 
                    <p>The name is João</p>
                </div>
            ) : (
                <div> 
                    <p>The name is different than João</p>
                </div>
            )}
        </div>
    )
}

export default ConditionalRender