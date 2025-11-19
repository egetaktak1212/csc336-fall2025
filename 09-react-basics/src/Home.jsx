import { useState } from "react";
import ListItem from "./ListItem"
import "./Home.css"

function Home({items, setItems}) {


  const [item, setItem] = useState({ name: "", image: "", quantity: 0 });


  function handleAdd() {
    let newItem = {
      name: item.name,
      image: item.image,
      quantity: item.quantity,
    };

    setItems([...items, newItem]);
    setItem({ name: "", image: "", quantity: 0 });
  }




  return (
    <div>
      <h1>Shopping List</h1>
      <div className="inputs">
        <h2>{"Item Name"}</h2>
        <input
          type="text"
          value={item.name}
          onChange={(e) => setItem({ ...item, name: e.target.value })}
        />
        <h2>{"Image"}</h2>
        <input
          type="text"
          value={item.image}
          onChange={(e) => setItem({ ...item, image: e.target.value })}
        />
        <button onClick={handleAdd}>Add Item</button>
      </div>

      <ul className="unordered">
        {items.map((item, index) => (
          <ListItem
            key={index}
            name={item.name}
            image={item.image}
            quantity={item.quantity}
          />
        ))}
      </ul>
    </div>
  );
}


export default Home;