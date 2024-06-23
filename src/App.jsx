import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "./MyStore/reducers/cartSlice";

export default App = () => {
    const laptop = useSelector((store) => store.laptop);
    const cart = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    let total = 0;

    if (Array.isArray(cart)) {
        cart.forEach((data) => {
            total = total + data.count * data.price;
        })
    }

    let cartCount = 0;
    cart.forEach((data) => {
        cartCount = cartCount + data.count;
    })

    return (
        <>
            <h1>Product List</h1>
            {laptop.map(({ price, cpu, ram, id }) =>
                <p key={id}> {price} | {cpu} | {ram}
                    <button onClick={() => dispatch(addItemToCart(id, price, cpu, ram))}>Add to Cart</button>
                </p>
            )}
            <h1>Cart</h1>
            <h3>{cartCount}</h3>
            <h3>Total: Rs {total}</h3>
        </>
    )
}