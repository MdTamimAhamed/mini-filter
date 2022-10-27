import FilterTable from "./Components/FilterTable";

const ProductList = [
  { category: "Fruits", price: "$1.99", stocked: true, name: "Apple" },
  { category: "Vegetables", price: "$2.99", stocked: true, name: "Spinach" },
  { category: "Fruits", price: "$1.99", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2.99", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$4.99", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1.99", stocked: true, name: "Peas" },
  { category: "Fruits", price: "$5.99", stocked: true, name: "Strawberry" },
  { category: "Vegetables", price: "$4.99", stocked: true, name: "Potato" },
  { category: "Fruits", price: "$9.99", stocked: true, name: "Pine Apple" }
]

  ProductList.sort((a,b) =>{
  const letter_a = a.category.toUpperCase();
  const letter_b = b.category.toUpperCase();
  if(letter_a < letter_b) {
    return -1;
  };
  if(letter_a > letter_b) {
    return 1;
  };
  return 0;

});

console.log(ProductList);
function App() {
  return (
      <div className="h-screen pt-10">
        <FilterTable products = {ProductList}/>
      </div>
  );
}

export default App;
