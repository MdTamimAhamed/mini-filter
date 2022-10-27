
const SearchFilter = () => {
  return (
    <form className="flex flex-col">
        <input
        type='text'
        placeholder="Search..."
        className="border border-gray-300"
        />

        {/*Filter Options*/}
        <label className="">
            <input type="checkbox"/>
            {' '}
            Only show products in stock
        </label>
        <label className="">
            <input type="checkbox"/>
            {' '}
            Only Fruits
        </label>
        <label className="">
            <input type="checkbox"/>
            {' '}
            Only Vegetable
        </label>
        
    </form>
  )
}

export default SearchFilter