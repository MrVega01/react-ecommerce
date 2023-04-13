import './styles.css'
import { useId } from 'react'
import useCart from '../../hooks/useCart'
// Asetts
import ClearCart from '../../assets/ClearCart'
import CartIcon from '../../assets/CartIcon'
import AddCart from '../../assets/AddCart'
import RemoveCart from '../../assets/RemoveCart'

export default function Cart () {
  const checkboxId = useId()
  const { cart, addToCart, decreaseToCart, clearCart } = useCart()

  const handlerClickAddToCart = (product) => addToCart(product)
  const handlerClickDecreaseToCart = (product) => decreaseToCart(product)

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
                  <div>
                    <h4>{product.title} - ${product.price}</h4>
                    <span>Quantity: {product.quantity}</span>
                  </div>
                  <div>
                    <button onClick={() => handlerClickDecreaseToCart(product)}><RemoveCart /></button>
                    <button onClick={() => handlerClickAddToCart(product)}><AddCart /></button>
                  </div>
                </footer>
              </li>
            ))
          }
        </ul>
        {
          cart.length
            ? <button onClick={clearCart}><ClearCart /></button>
            : <span>Cart empty</span>
        }
      </aside>
    </section>
  )
}
