
const Products = ({products}) => {

    const name = products.stocked? products.name : 
        <span className='text-red-600 line-through'>
            {products.name}</span>

    const priceOrMsg = products.stocked? products.price :
        <span className='text-red-600 line-through'>{products.price}</span>

  return (
    <tr>
        <td>{name}</td>
        <td className="text-right">{priceOrMsg}</td>
    </tr>
  );
}

export default Products