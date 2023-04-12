import './styles.css'
import Cart from '../../assets/CartIcon'
import useCart from '../../hooks/useCart'
import RemoveCart from '../../assets/RemoveCart'

export function Products ({ products }) {
  const { addToCart, removeToCart, productInCart } = useCart()
  const handlerClickAddToCart = (product) => {
    addToCart(product)
  }
  const handlerClickRemoveToCart = (product) => {
    removeToCart(product)
  }
  return (
    <main className='Products'>
      <ul>
        {
            products.map(product => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <span>${product.price}</span>
                {
                  !productInCart(product)
                    ? <button onClick={() => handlerClickAddToCart(product)}><Cart /></button>
                    : <button className='removeButton' onClick={() => handlerClickRemoveToCart(product)}><RemoveCart /></button>
                }
              </li>
            ))
        }
      </ul>
    </main>
  )
}
