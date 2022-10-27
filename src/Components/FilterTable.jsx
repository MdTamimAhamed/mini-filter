import SearchFilter from "./SearchFilter"
import ProductTable from "./ProductTable"

const FilterTable = ({products}) => {
  return (
    <div className="max-w-xl bg-white-200 p-10 mx-auto shadow-xl">
        <div>
          <h1 className="text-center pb-5 text-xl font-medium">Mini Filter</h1>
        </div>
        <SearchFilter />
        <ProductTable products = {products}/>
    </div>
  )
}

export default FilterTable