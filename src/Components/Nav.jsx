import { Link } from "react-router-dom";
import { useContext } from "react";
import { a } from "./Context";

export default function Nav() {
  const { cart } = useContext(a);

  return (
    <div className="nav">
      <h2>Shopify-a demo shop✨</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cart.length})</Link>
      </div>
    </div>
  );
}