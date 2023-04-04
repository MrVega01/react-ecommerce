import './styles.css'

export default function Filters () {
  return (
    <form className='Filters'>
      <label>
        Category
        <select>
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
        Maximum price
        <input type='number' placeholder='0' />
      </label>
      <label>
        Minimum price
        <input type='number' placeholder='0' />
      </label>
    </form>
  )
}
