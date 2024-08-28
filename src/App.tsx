import { useState } from "react";
import Cart from "./components/Cart";
import NavBar from "./components/NavBar";

function App() {
  const [cardItems, setItems] = useState(["product1", "product2"]);
  return (
    <div>
      <NavBar cartItemsCount={cardItems.length}></NavBar>
      <Cart cartItems={cardItems} onClear={() => setItems([])} />
    </div>
  );
}

export default App;
