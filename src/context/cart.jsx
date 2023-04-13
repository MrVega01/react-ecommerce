import { createContext } from 'react'
import { useCartReducer } from '../hooks/useCartReducer'

export const CartContext = createContext()

export function CartContextProvider ({ children }) {
  const { cart, addToCart, removeToCart, decreaseToCart, clearCart } = useCartReducer()
  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeToCart,
      decreaseToCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
