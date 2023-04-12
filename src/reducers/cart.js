const saveInLocalStorage = (cart) => window.localStorage.setItem('cart', JSON.stringify(cart))

export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const cartReducer = (state, action) => {
  let newState
  const { type, payload } = action

  switch (type) {
    case 'ADD_TO_CART': {
      const { id } = payload

      const productInCartIndex = state.findIndex(cartProduct => cartProduct.id === id)
      if (productInCartIndex === -1) {
        newState = [...state, { ...payload, quantity: 1 }]
      } else {
        const cartCopy = structuredClone(state)
        cartCopy[productInCartIndex].quantity++

        newState = cartCopy
      }
    } break
    case 'REMOVE_TO_CART': {
      const { id } = payload

      const productInCartIndex = state.findIndex(cartProduct => cartProduct.id === id)
      if (productInCartIndex === -1) return

      if (state[productInCartIndex].quantity > 1) {
        const cartCopy = structuredClone(state)
        cartCopy[productInCartIndex].quantity--

        newState = cartCopy
      } else newState = state.filter(product => id !== product.id)
    } break
    case 'CLEAR_CART':
      newState = []
      break
    default: throw new Error('Action type for Cart reducer is invalid')
  }
  saveInLocalStorage(newState)
  return newState
}
