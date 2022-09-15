import { Link } from "react-router-dom";

const Navbar = () => (
    <nav>
        <ul>
            <li>Billboards</li>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/Billboards'>
                <li>Billboards</li>
            </Link>  
        </ul>
    </nav>
)

export default Navbar;