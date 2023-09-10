import { useContext, useEffect, useState } from "react";
import Product from "./Product";
import { ContextCart} from "../Context/ContextCart";
import "../../css/CategoryProduct.css"
const CategoryProduct = () => {
    const {list} = useContext(ContextCart);
    return (
        <>
            <ul className="list-products">
                {list.map(e => (
                    <li className="product" key={e.id}>
                        <Product e={e} />
                    </li>
                ))}
            </ul>
        </>
    )
}

export default CategoryProduct;