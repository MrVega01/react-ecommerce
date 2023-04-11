import './App.css'
import { Products } from './components/Products'
import Filters from './components/Filters'
import productsResponse from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import Cart from './components/Cart'

function App () {
  const { filterProducts, updateFilters } = useFilters()

  const filteredProducts = filterProducts(productsResponse.products)

  return (
    <div className='App'>
      <h1>Shopping card</h1>
      <Cart />
      <Filters updateFilters={updateFilters} />
      <Products products={filteredProducts} />
    </div>
  )
}

export default App
