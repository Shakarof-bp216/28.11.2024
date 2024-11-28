import { Link, Outlet } from "react-router-dom"



function Navbar() {
  return (
   <>
   <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/addPages">addPages</Link>
          </li>
        </ul>
      </nav>



   </>
  )
}

export default Navbar