import { createContext, useEffect, useState } from "react";


export const CartContext=createContext()

export default function CartContextProvider({children}){
    const [cartLength,setCartLength]=useState(0);

    useEffect(()=>{
        const cart=JSON.parse(localStorage.getItem('cart')) || []
        setCartLength(cart.length)
    },[])

    return <CartContext.Provider value={{cartLength,setCartLength}}>{children}</CartContext.Provider>
}