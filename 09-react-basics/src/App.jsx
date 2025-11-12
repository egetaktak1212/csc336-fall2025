import { useState } from "react";
import ListItem from "./ListItem"
import "./App.css"

function App() {


  const [item, setItem] = useState({ name: "", image: "", quantity: 0 });



  const [items, setItems] = useState([
    {
      name: "The Wonders of the Universe",
      image: "https://static.scientificamerican.com/dam/m/6ab948766f3b54d1/original/sa0925Adva04.jpg?m=1754937178.062&w=600",
      quantity: 1,
    },
    {
      name: "Parmesan",
      image: "https://i5.walmartimages.com/seo/Kraft-Parmesan-Grated-Cheese-8-oz-Shaker_a8ba50ae-75cc-4dbc-b516-9fa9a5ea6468.472203b8e9b560e4f7f798b430d8f6e9.jpeg",
      quantity: 3,
    }
  ]);

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


export default App;