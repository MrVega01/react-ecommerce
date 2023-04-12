import { useState, createContext } from 'react'

export const CartContext = createContext()

export function CartContextProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    const productInCartIndex = cart.findIndex(cartProduct => cartProduct.id === product.id)
    if (productInCartIndex === -1) {
      setCart(oldValues => [...oldValues, { ...product, quantity: 1 }])
    } else {
      const cartCopy = structuredClone(cart)
      cartCopy[productInCartIndex].quantity++
      setCart(cartCopy)
    }
  }
  const removeToCart = (removeProduct) => {
    const productInCartIndex = cart.findIndex(cartProduct => cartProduct.id === removeProduct.id)
    if (productInCartIndex === -1) return
    console.log(removeProduct, cart[productInCartIndex])
    if (cart[productInCartIndex].quantity > 1) {
      const cartCopy = structuredClone(cart)
      cartCopy[productInCartIndex].quantity--
      setCart(cartCopy)
    } else {
      setCart(products => products.filter(product => removeProduct.id !== product.id))
    }
  }
  const clearCart = () => setCart([])
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeToCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
