import './styles.css'
import { useId } from 'react'
// Asetts
import useCart from '../../hooks/useCart'
import ClearCart from '../../assets/ClearCart'
import CartIcon from '../../assets/CartIcon'
import AddCart from '../../assets/AddCart'

export default function Cart () {
  const checkboxId = useId()
  const { cart, addToCart, clearCart } = useCart()

  const handlerClickAddToCart = (product) => {
    addToCart(product)
  }
  return (
    <section className='Cart'>
      <label htmlFor={checkboxId}><CartIcon /></label>
      <input type='checkbox' id={checkboxId} />
      <aside>
        <ul>
          {
            cart.map(product => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <footer>
                  <h4>{product.title} - {product.price}</h4>
                  <span>Quantity: {product.quantity}</span>
                  <button onClick={() => handlerClickAddToCart(product)}><AddCart /></button>
                </footer>
              </li>
            ))
          }
        </ul>
        <button onClick={clearCart}><ClearCart /></button>
      </aside>
    </section>
  )
}
