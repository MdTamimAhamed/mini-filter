
const ProductTable = ({products}) => {

  let lastCategory = null;
  products.forEach((item) =>{
    if(item.category === lastCategory){
        
    }
  });

  return (
    <div>
        <table className="w-full">
            <thead>
                <tr className="flex justify-evenly">
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable