import SearchFilter from "./SearchFilter"
import ProductTable from "./ProductTable"

const FilterTable = () => {
  return (
    <div className="max-w-xl bg-gray-200 p-4 mx-auto">
        <SearchFilter />
        <ProductTable />
    </div>
  )
}

export default FilterTable