import { createContext } from "react";
import { useState, useEffect } from "react";

const ContextCart = createContext();

const ContextCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [list, setList] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((data) => setList(data))
    }, [])



    const value = {
        list,
        setCart,
        cart
    }

    return (
        
        <ContextCart.Provider value={value}>
            {children}
            {/* {console.log('re')} */}
        </ContextCart.Provider>
    )
}

export { ContextCart, ContextCartProvider }
