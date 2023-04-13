
import {Link , Outlet} from "react-router-dom"
const Technology = () => {
  return (
    <div className='tech'>
        <div className="left">
         <Link to="html" > <h1>HTML</h1></Link>
          <Link to = "css"><h1>CSS</h1></Link>
          <Link to = "javascript"><h1>JavaScript</h1></Link>
          <Link to = "react"><h1>React</h1></Link>

        </div>
        <div className="right">
          <Outlet />
        </div>
    </div>
  )
}

export default Technology