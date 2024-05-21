import React, {  createContext, useState } from 'react'



export const ProductsContext = createContext()

export const ProductsProvider = ({children}) =>{
    const [data, setData]= useState([])


    return (
        <ProductsContext.Provider  
        value={{data, setData}}>
            {children}
        </ProductsContext.Provider>
    );
};