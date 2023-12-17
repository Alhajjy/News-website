import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Logo from "../assets/Frame 2.svg";
import { Link } from "react-router-dom";
import json from "./data.json";
function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    const show_menu = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="navbar con">
            <div className="logo-side hoverable">
                <div className="image">
                    <img src={Logo} alt="logo" />
                </div>
                <h1>News</h1>
            </div>
            <ul className={`menu bg-menu ${showMenu ? "small-menu" : ""}`}>
                {json.pths.map((e) => (
                    <Link to={e[0]} className="hoverable">
                        {e[1]}
                    </Link>
                ))}
                <a className="hoverable">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </a>
            </ul>
            <div className="menu-btn" onClick={show_menu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </div>
    );
}
export default Navbar;
