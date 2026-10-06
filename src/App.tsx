import "./App.css";
import Card from "./basic/pages/Card";
import "./basic/pages/index";
import ProductList from "./basic/pages/ProductList";

function App() {
  return (
    <>
      <h2>Latihan React</h2>
      <ProductList />
      <Card title="Notes">
        <p>Delivery takes two days</p>
      </Card>
    </>
  );
}

export default App;
