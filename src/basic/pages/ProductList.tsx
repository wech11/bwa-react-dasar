import ProductRow from './ProductRow'
import CartSummary from './CartSummary'

function ProductList() {
  return (
    <div>
      <div>
        <h2>Cart</h2>
        <span>3 items</span>
      </div>

      <ProductRow />
      <ProductRow />
      <ProductRow />

      <CartSummary />
    </div>
  )
}

export default ProductList
