import React from 'react'

const CartContext = React.createContext({
    items :[],
    totalAmount:0,
    addItem : (item)=>{},
    removeItem : (id) =>{},
    addCart:(item)=>{},
    removeAllItem:(id)=>{}
})

export default CartContext;