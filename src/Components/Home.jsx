import { useEffect, useState, useContext } from "react";
import { a } from "./Context";

export default function Home() {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(true);
  const { cart, setcart } = useContext(a);

  useEffect(() => {
    async function getdata() {
      try {
        let res = await fetch("https://dummyjson.com/products");
        let d = await res.json();
        setdata(d.products);
        setload(false);
      } catch (err) {
        console.log(err);
      }
    }
    getdata();
  }, []);

  function add(x) {
    setcart([...cart, x]);
  }

  if (load) return <h2 className="center">Loading products...</h2>;

  return (
    <div className="grid">
      {data.map((x) => (
        <div key={x.id} className="card">
          <img src={x.thumbnail} />
          <h3>{x.title}</h3>
          <p>${x.price}</p>
          <button onClick={() => add(x)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}