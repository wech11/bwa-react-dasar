import ProductRow from "./ProductRow";
import CartSummary from "./CartSummary";
import Card from "./Card";

type Product = {
  id: string;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: "1", name: "Latte", price: 18000 },
  { id: "2", name: "Toast", price: 12000 },
  { id: "3", name: "Iced Tea", price: 8000 },
  { id: "4", name: "Sandwich", price: 25000 },
  { id: "5", name: "Cookies", price: 15000 },
  { id: "6", name: "Cookies", price: 20000 },
];

function ProductList() {
  const total = products.reduce((sum, product) => sum + product.price, 0);
  return (
    <div>
      <Card title={products.length + " Products"}>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
        <CartSummary total={total} />
      </Card>
    </div>
  );
}

export default ProductList;
