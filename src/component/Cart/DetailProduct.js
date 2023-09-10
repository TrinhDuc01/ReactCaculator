
import { useContext, useState } from "react";
import { useParams } from "react-router-dom"
import { ContextCart } from "../Context/ContextCart";



const DetailProduct = () => {
    // const [detail,setdetail] = useState({});
    const { list } = useContext(ContextCart);
    let { id } = useParams();
    let a = list.filter((e) => e.id == id)
    return (
        <>
            <img style={{ width: 100 }} src={a[0].image} alt={a[0].title}></img>

            {console.log(a)}
        </>
    )
}

export default DetailProduct;