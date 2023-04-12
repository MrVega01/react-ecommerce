import { useContext } from 'react'
import { CartContext } from '../context/cart'

export default function useCart () {
  const cart = useContext(CartContext)

  if (cart === undefined) throw new Error('useCart must have a provider')

  const productInCart = (product) => cart.cart.findIndex(productCart => productCart.id === product.id) !== -1

  return { ...cart, productInCart }
}
