import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css"
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to={`/category/2`} className="navLinkCat"> Carteras </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/category/3`} className="navLinkCat"> Mochilas </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/category/4`} className="navLinkCat"> Monederos </NavLink>
                    </li>
                </ul>
            </nav>
            <Link to={"/"} className="titiloLogo">
            <h1>Purse</h1>
            </Link>
            <CartWidget />
        </header >
    );
}

export default NavBar;