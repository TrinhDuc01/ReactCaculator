import { NavLink, Route, Routes } from "react-router-dom"
import "./css/Nav.css"
import App from "./component/caculator/App"
import Home from "./component/home/Home"
import Todo from "./component/todo/Todo"
import CategoryProduct from "./component/Cart/CategoryProduct"
import Cart from "./component/Cart/Cart"
import DetailProduct from "./component/Cart/DetailProduct"
import { useContext } from "react"
import { ContextCart } from "./component/Context/ContextCart"
const Nav = () => {
    const {detail} = useContext(ContextCart)
    return (
        <>
            <div className="topnav">
                <NavLink to="/">Home</NavLink>
                <NavLink  to="/Todo">Todo</NavLink>
                <NavLink to="/Caculator">Caculator</NavLink>
                <NavLink to="/CategoryProduct">Category Product</NavLink>
                <NavLink to="/Cart">Cart</NavLink>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Todo" element={<Todo/>}/>
                <Route path="/Caculator" element={<App/>}/>
                <Route path="/DetailProduct" element={<DetailProduct/>}/>
                <Route path="/CategoryProduct" element={<CategoryProduct/>}/>
                <Route path="/Cart" element={<Cart/>}/>
                <Route path="/DetailProduct/:id" element={<DetailProduct />}/>
            </Routes>
        </>
    )
}

export default Nav