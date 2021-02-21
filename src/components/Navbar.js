import { NavLink } from "react-router-dom";
import { Navitem } from "../styles";
// import { GiBookshelf } from 'react-icons/gi';
function Navbar() {
  return (
    <nav
      className="navbar navbar-expand"
      style={{ backgroundColor: "#941b0c" }}
    >
      <div className="container-fluid">
        <NavLink
          className="navbar-brand"
          style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}
          to={`/`}
        >
          {/* <GiBookshelf size="2.5em"/>{' '} */}
          Foodiez{" "}
        </NavLink>
        <form className="d-flex">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <Navitem className="nav-item" aria-current="page" to={`/`}>
              {" "}
              Home
            </Navitem>

            <Navitem className="nav-item" to={`/categories`}>
              {" "}
              Categories
            </Navitem>

            <Navitem className="nav-item" to={`/recipes`}>
              {" "}
              Recipes
            </Navitem>
          </ul>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
