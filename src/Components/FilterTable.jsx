import SearchFilter from "./SearchFilter"
import ProductTable from "./ProductTable"
import React,{ useState } from "react";

const productList = [
  { id : 1, category: "Fruits", price: "$1.99", stocked: true, name: "Apple" },
  { id : 2, category: "Vegetables", price: "$2.99", stocked: true, name: "Spinach" },
  { id : 3, category: "Fruits", price: "$1.99", stocked: true, name: "Dragonfruit" },
  { id : 4, category: "Fruits", price: "$2.99", stocked: false, name: "Passionfruit" },
  { id : 5, category: "Vegetables", price: "$4.99", stocked: false, name: "Pumpkin" },
  { id : 6, category: "Vegetables", price: "$1.99", stocked: true, name: "Peas" },
  { id : 7, category: "Fruits", price: "$5.99", stocked: true, name: "Strawberry" },
  { id : 8, category: "Vegetables", price: "$4.99", stocked: true, name: "Potato" },
  { id : 9, category: "Fruits", price: "$9.99", stocked: true, name: "PineApple" },
  { id : 10, category: "Vegetables", price: "$5.99", stocked: true, name: "Capsicum" }
]

//Copy of main array
const unSortedList = [...productList];

//Sorting the Product List in ascending order
const ProductList = productList.sort((a,b) =>{
  const letter_a = a.category.toUpperCase();
  const letter_b = b.category.toUpperCase();
    if(letter_a < letter_b) return -1;
    if(letter_a > letter_b) return 1;
  return 0;

});

const FilterTable = () => {

  const [filterText, setFilterText] = useState('');
  const [showInStock, setShowInStock] = useState(false);

  return (
    <div className="max-w-xl bg-white-200 p-10 mx-auto shadow-xl">
        <div>
          <h1 className="text-center pb-5 text-xl font-medium">Mini Filter</h1>
        </div>
        <div>
          <table className="w-full">
            <tr>
              <th className="text-left w-1/3">Name</th>
              <th className="text-left w-1/3">Category</th>
              <th className="text-right w-1/3">Price</th>
            </tr>
          </table>
          {
            unSortedList.map((item) => (
              <table className="w-full">
                <tr key={item.id}>
                  <td className="w-1/3">{item.name}</td>
                  <td className="w-1/3">{item.category}</td>
                  <td className="w-1/3 text-right">{item.price}</td>
                </tr>
              </table>
            ))
          }
        </div>
        <SearchFilter 
          filterText = {filterText}
          setFilterText = {setFilterText}
          showInStock = {showInStock}
          setShowInStock = {setShowInStock}
          />
        <ProductTable 
          products = {ProductList}
          filterText = {filterText}
          showInStock = {showInStock}
          />
    </div>
  )
}

export default FilterTable