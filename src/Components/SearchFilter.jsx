
const SearchFilter = () => {
  return (
    <form className="flex flex-col">
        <input
        type='text'
        placeholder="Search..."
        className="border border-gray-300"
        />
        <label className="">
            <input type="checkbox"/>
            {' '}
            Only show products in stock
        </label>
    </form>
  )
}

export default SearchFilter