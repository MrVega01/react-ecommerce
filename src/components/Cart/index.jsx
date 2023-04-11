import { useId } from 'react'
import './styles.css'
import ClearCart from '../../assets/ClearCart'
import CartIcon from '../../assets/CartIcon'
import AddCart from '../../assets/AddCart'

export default function Cart () {
  const checkboxId = useId()
  return (
    <section className='Cart'>
      <label htmlFor={checkboxId}><CartIcon /></label>
      <input type='checkbox' id={checkboxId} />
      <aside>
        <ul>
          <li>
            <img src='https://i.dummyjson.com/data/products/6/thumbnail.png' alt='MacBook Pro' />
            <span>Quantity: 1</span>
            <button><AddCart /></button>
          </li>
        </ul>
        <button><ClearCart /></button>
      </aside>
    </section>
  )
}
