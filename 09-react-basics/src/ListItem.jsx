import "./ListItem.css"
import Quantity from "./Quantity";

function ListItem({ name, image, quantity }) {

    return (
        <li className="listitem">
            <div className="imagediv">
                <img src={image} width={"100%"} height={"100%"}/>
            </div>
            <div className="namediv">{name}</div>
            <Quantity quantity={quantity} />
        </li>
    )

}

export default ListItem