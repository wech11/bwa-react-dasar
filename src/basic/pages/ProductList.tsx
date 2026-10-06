import ProductRow from "./ProductRow";
import CartSummary from "./CartSummary";
import Card from "./Card";

function ProductList() {
  return (
    <div>
      <Card title="Cart">
        <ProductRow name="Latte" price={18000} />
        <ProductRow name="Toast" price={12000} />
        <ProductRow name="Iced Tea" price={8000} />
        <CartSummary total={38000} />
      </Card>
    </div>
  );
}

export default ProductList;
