import { useState } from 'react'
import './App.css'
import { Products } from './components/Products'
import Filters from './components/Filters'
import productsResponse from './mocks/products.json'
import { useFilters } from './hooks/useFilters'

function App () {
  const [products, setProducts] = useState(productsResponse.products)
  const { setFilters, filterProducts } = useFilters()

  const filteredProducts = filterProducts(products)
  return (
    <div className='App'>
      <h1>Shopping card</h1>
      <Filters />
      <Products products={filteredProducts} />
    </div>
  )
}

export default App
