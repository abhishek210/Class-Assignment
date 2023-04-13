
import {Link} from "react-router-dom"
const Navbar = () => {
  return (
    <div className='nav'>
        <Link to="/" > <h1>Home</h1></Link>
        <Link to = "/tech" ><h1>Technology</h1></Link>
        <Link to = "/product" ><h1>Product</h1></Link>
    </div>
  )
}

export default Navbar