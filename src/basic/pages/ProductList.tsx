import ProductRow from "./ProductRow";
import CartSummary from "./CartSummary";
import Card from "./Card";

type Product = {
  name: string;
  price: number;
};

const products: Product[] = [
  { name: "Latte", price: 18000 },
  { name: "Toast", price: 12000 },
  { name: "Iced Tea", price: 8000 },
  { name: "Sandwich", price: 25000 },
  { name: "Cookies", price: 15000 },
];

function ProductList() {
  const total = products.reduce((sum, product) => sum + product.price, 0);
  return (
    <div>
      <Card title={products.length + " Products"}>
        {products.map((product) => (
          <ProductRow key={product.name} name={product.name} price={product.price}/>
        ))}
        <CartSummary total={total} />
      </Card>
    </div>
  );
}

export default ProductList;
