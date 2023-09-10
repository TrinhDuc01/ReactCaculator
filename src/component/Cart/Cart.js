import { useContext } from "react";
import { ContextCart } from "../Context/ContextCart";

const Cart = () => {
    const { cart, setCart } = useContext(ContextCart);

    return (
        <div className="Cart">
            {cart.length <= 0 && <h1 className="header">Cart empty</h1>}
            {cart.length > 0 &&
                (
                    <>
                        <h1 style={{}} className="header">Cart</h1>
                        {
                            cart.map((e) => (
                                <li>
                                    {console.log(e)}
                                    <img style={{ width: 100 }} src={e.image} alt={e.title}></img>
                                    <div>
                                        <p className="title">{e.title}</p>
                                        <p className="rate">{e.rating.rate} <span>{e.rating.count}</span></p>
                                        <p>{e.category}</p>
                                        <p>{e.description.slice(0, 40) + '...'}</p>
                                        <p>{e.quantity}</p>
                                    </div>
                                </li>
                            )
                            )}
                    </>


                )
            }
        </div>
    )
}

export default Cart;