import SearchFilter from "./SearchFilter"
import ProductTable from "./ProductTable"

const FilterTable = ({products}) => {
  return (
    <div className="max-w-xl bg-gray-200 p-4 mx-auto">
        <SearchFilter />
        <ProductTable products = {products}/>
    </div>
  )
}

export default FilterTable