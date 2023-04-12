import { useReducer } from 'react'
import { cartInitialState, cartReducer } from '../reducers/cart'

export function useCartReducer () {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  const addToCart = (product) => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })
  const removeToCart = (product) => dispatch({
    type: 'REMOVE_TO_CART',
    payload: product
  })
  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  return {
    cart: state,
    addToCart,
    removeToCart,
    clearCart
  }
}
