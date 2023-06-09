import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, updateFilters } = useContext(FiltersContext)

  if (filters === undefined) throw new Error('useFilters must have a provider')

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
  return { filterProducts, updateFilters }
}
