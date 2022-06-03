import { useState } from "react";

export default function Offers() {

  const [items] = useState([
    { title: 'Essence Hoodie', price: 21.99 },
    { title: 'Cardien Sneakers', price: 34.99 },
    { title: 'Villow Tee', price: 12.99 }
  ]);

  return (

    <div>

      <h3>Latest Offers</h3>

      <div className="offers">
        {items.map(item => (
          <div key={item.title}>
            <img src="https://via.placeholder.com/350x200" alt="product" />
            <h4>{item.title}</h4>
            <p>£{item.price}</p>
          </div>
        ))}
      </div>

    </div>
  )

};
