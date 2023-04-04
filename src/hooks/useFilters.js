import { useState } from 'react'

export function useFilters () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: false
  })
  const filterProducts = (products) => {
    return products.filter(product => (
      product.price >= filters.minPrice &&
      (
        product.category === filters.category ||
        filters.category === 'all'
      ) &&
      (
        product.price <= filters.maxPrice ||
        filters.maxPrice === false
      )
    ))
  }
  return { setFilters, filterProducts }
}
