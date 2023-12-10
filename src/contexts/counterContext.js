import {React, createContext, useContext, useState} from "react";

const counterContext = createContext();

export const useCounter = () => useContext(counterContext);

const CounterContextProvider = (props) => {
    const [count, setcount] = useState(0);
    
    const increaseCount = () => {
        setcount(count + 1);
    }

    const decreaseCount = () => {
        setcount(count - 1);
    }

    const value = {count, increaseCount, decreaseCount};

    return (
        <counterContext.Provider value={value}>
            {props.children}
        </counterContext.Provider>
    )
}

export default CounterContextProvider;
