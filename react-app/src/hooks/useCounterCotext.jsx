import { useContext } from "react"

import { CounterContext } from "../context/CounterContext"

export const useCounterCotext = () => {
    const context = useContext(CounterContext)

    if (!context) {
        console.error("Context not provided!")
    }
    
    return context
}