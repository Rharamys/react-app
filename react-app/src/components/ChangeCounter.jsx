// import { useContext } from "react"

// import { CounterContext } from "../context/CounterContext"
import { useCounterCotext } from "../hooks/useCounterCotext"

const ChangeCounter = () => {
    // use like this,
    //const { counter, setCounter }  = useContext(CounterContext)

    // OR refactoring using hooks
    const {counter, setCounter} = useCounterCotext()

  return (
    <div>
        <button onClick={() => {setCounter(counter+1)}}>
            Add value to counter
        </button>
    </div>
  )
}

export default ChangeCounter