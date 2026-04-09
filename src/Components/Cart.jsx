import { useContext } from "react";
import { a } from "./Context";

export default function Cart() {
  const { cart, setcart } = useContext(a);

  function del(i) {
    let b = cart.filter((_, index) => index !== i);
    setcart(b);
  }

  return (
    <div className="grid">
      {cart.length === 0 && <h2 className="center">Your cart is empty</h2>}

      {cart.map((x, i) => (
        <div key={i} className="card">
          <img src={x.thumbnail} />
          <h3>{x.title}</h3>
          <p>${x.price}</p>
          <button onClick={() => del(i)}>Remove</button>
        </div>
      ))}
    </div>
  );
}