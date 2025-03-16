import { data } from 'react-router-dom'
import axios from './axios'
import React, { createContext, useState, useEffect } from 'react'

export const ProductContext = createContext()

function Context(props) {
    const [product, setProduct] = useState(
        JSON.parse(localStorage.getItem('products')) ||
        null)

    return (

        <ProductContext.Provider value={[product, setProduct]}>
            {props.children}
        </ProductContext.Provider>

    )
}

export default Context