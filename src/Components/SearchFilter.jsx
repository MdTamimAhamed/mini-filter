
const SearchFilter = ({showInStock, setShowInStock, filterText, setFilterText}) => {
  return (
    <form className="flex flex-col">
        <input
          value={filterText}
          onChange={e =>(setFilterText(e.target.value))}
          type='text'
          placeholder="Search..."
          className="border border-gray-300 pl-2 h-10 rounded"
          />

        {/*Filter Options*/}
        <label className="">
            <input type="checkbox"
              checked = {showInStock}
              onChange={e => (setShowInStock(e.target.checked))}
              />
            {' '}
            Only show products in stock
        </label>       
    </form>
  )
}

export default SearchFilter