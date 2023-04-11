import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
    maxPrice: false
  })
  const updateFilters = ({ type, value }) => {
    if (type !== 'category' && type !== 'minPrice' && type !== 'maxPrice') return

    setFilters(oldValues => ({ ...oldValues, [type]: value }))
  }
  return (
    <FiltersContext.Provider
      value={{
        filters,
        updateFilters
      }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
