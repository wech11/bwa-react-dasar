import ProductRow from "./ProductRow";
import CartSummary from "./CartSummary";
import Card from "./Card";

type Product = {
  id: string;
  name: string;
  price: number;
  inOnSale?: boolean;
  isSoldOut?: boolean;
};

const products: Product[] = [
//   { id: "1", name: "Latte", price: 18000, inOnSale: true, isSoldOut: false },
//   { id: "2", name: "Toast", price: 12000, inOnSale: false, isSoldOut: false },
//   { id: "3", name: "Iced Tea", price: 8000, inOnSale: true, isSoldOut: false },
//   { id: "4", name: "Sandwich", price: 25000, inOnSale: false, isSoldOut: true },
//   { id: "5", name: "Cookies", price: 15000, inOnSale: true, isSoldOut: false },
//   { id: "6", name: "Cookies", price: 20000 }
];

function ProductList() {
  const searchTerm: string = "Latte";
  const total = products.reduce((sum, product) => sum + product.price, 0);

  if (products.length === 0) {
    return (
      <Card title="Cart">
        {searchTerm === "" ? (
          <p>Your cart is empty. Add something from the menu to get started.</p>
        ) : (
          <p>Nothing matches &quot;{searchTerm}&quot;. Try another word.</p>
        )}
      </Card>
    );
  }

  //   if (products.length === 0) {
  //     return (
  //       <Card title="Cart">
  //         <p>Your cart is empty.</p>
  //         <p>Add something from the menu to get started.</p>
  //       </Card>
  //     );
  //   }
  return (
    <div>
      <Card title="Cart">
        {products.length > 0 && <p>{products.length} items</p>}
        {products.map((product) => (
          <ProductRow
            key={product.id}
            name={product.name}
            price={product.price}
            inOnSale={product.inOnSale}
            isSoldOut={product.isSoldOut}
          />
        ))}
        <CartSummary total={total} />
      </Card>
    </div>
  );
}

export default ProductList;
