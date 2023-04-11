import './styles.css'

export default function Filters ({ updateFilters }) {
  const handlerChangeCategory = (event) => {
    const value = event.target.value
    updateFilters({ type: 'category', value })
  }
  const handlerChangeMinPrice = (event) => {
    const value = event.target.value
    updateFilters({ type: 'minPrice', value })
  }
  const handlerChangeMaxPrice = (event) => {
    const value = event.target.value || false
    updateFilters({ type: 'maxPrice', value })
  }
  return (
    <form className='Filters'>
      <label>
        Category
        <select onChange={handlerChangeCategory}>
          <option value='all'>All</option>
          <option value='home-decoration'>Home decoration</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
          <option value='fragrances'>Fragrances</option>
          <option value='skincare'>Skincare</option>
          <option value='groceries'>Groceries</option>
        </select>
      </label>
      <label>
        Minimum price
        <input onChange={handlerChangeMinPrice} type='number' placeholder='0' />
      </label>
      <label>
        Maximum price
        <input onChange={handlerChangeMaxPrice} type='number' placeholder='0' />
      </label>
    </form>
  )
}
