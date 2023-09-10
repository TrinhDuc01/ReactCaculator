import { useContext } from "react"
import { ContextCart } from "../Context/ContextCart"
import { Link } from "react-router-dom"
import StarRatings from "react-star-ratings"
import { Button } from "antd/es/radio"
const Product = (props) => {
    const e = props.e
    const { cart, setCart, setDetail } = useContext(ContextCart)
    // console.log(handleAddCart)

    const handleAddCart = (e) => {
        const item = {
            ...e,
            quantity: 1
        };
        const [...add] = cart
        const index = cart.findIndex((element) => element.id === item.id)
        if (index < 0) {
            setCart(previous => [...previous, item])
        }
        else {
            add[index].quantity += 1
            setCart(add)
        }

    }

    return (
        <>
            <center>
                <img src={e.image} alt={e.title}></img>
            </center>
            <div className="content">
                <p className="title">{e.title.slice(0, 20) + '...'}</p>
                {/* <p>{e.category}</p> */}
                <p className="rate">
                    <StarRatings
                        rating={e.rating.rate}
                        starRatedColor="#FFD700"
                        starDimension={15}
                        starSpacing={1}
                    />
                    <span>{e.rating.count}</span>
                </p>
                {/* <p>{e.description.slice(0, 40) + '...'}</p> */}
                <p>${e.price}</p>
                <p>Free shipping</p>
                <Link to={`/DetailProduct/${e.id}`}><button>Details</button></Link>
                <button onClick={() => handleAddCart(e)}>Add to cart</button>
            </div >
        </>
    )
}

export default Product