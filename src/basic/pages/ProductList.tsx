import ProductRow from "./ProductRow";
import CartSummary from "./CartSummary";

function ProductList() {
  return (
    <div>
      <div>
        <h2>Cart</h2>
        <span>3 items</span>
      </div>

      <ProductRow name="Latte" price={18000} currency="IDR." />
      <ProductRow name="Toast" price={12000} />
      <ProductRow name="Iced Tea" price={8000} />

      <CartSummary total={38000} />
    </div>
  );
}

export default ProductList;
