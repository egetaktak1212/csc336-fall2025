import "./Quantity.css"
import { useState } from "react";

function Quantity({ quantity }) {

    const [quant, setQuant] = useState(quantity);


    return (
    <button
      onClick={() => setQuant(quant + 1)}
    >
      Quantity: {quant}
    </button>
    )



}

export default Quantity