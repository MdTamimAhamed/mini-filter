import Category from "./Category";
import Products from "./Products";

const ProductTable = ({showInStock, filterText,products}) => {

  const itemRow = []
  let lastCategory = null;

  products.forEach((item) =>{

    if(item.name.toLowerCase().startsWith(filterText.toLowerCase()) === false){
      return;
    }

    if(showInStock && !item.stocked) {
      return;
    } 


    if(item.category !== lastCategory){
        itemRow.push(
          <Category 
          category = {item.category}
          key = {item.category}
          />
        );
    }
    
    itemRow.push(
      <Products 
      products = {item}
      key = {item.name}
      />
    )
    lastCategory = item.category;
  });

  return (
    <div>
        <table className="w-full">
            <thead>
                <tr>
                    <th className="py-5">Name</th>
                    <th className="py-5">Price</th>
                </tr>
            </thead>
            <tbody>
              {itemRow}
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable