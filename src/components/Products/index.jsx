import './styles.css'
import Cart from '../../assets/Cart'

export function Products ({ products }) {
  return (
    <main className='Products'>
      <ul>
        {
            products.map(product => (
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.title} />
                <h3>{product.title}</h3>
                <span>${product.price}</span>
                <button><Cart /></button>
              </li>
            ))
        }
      </ul>
    </main>
  )
}
