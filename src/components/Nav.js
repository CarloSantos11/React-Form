import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.ul`
  list-style-type: none;
  margin: 0 0 50px 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
`;

const NavItem = styled.ul`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
`;

const Nav = ({ authenticated, setUser }) => {
  // const loggedOut = () => setUser(null);

  const loggedOut = () => {
    sessionStorage.clear();
    setUser(null);
  }


  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="/users">Home</Link>
        </NavItem>
        {
          !authenticated && // Only if the user is not yet logged in should they see this
          <NavItem>
            <Link to="/signup">Signup</Link>
          </NavItem>
        }
        <NavItem>
          <Link to="/" onClick={loggedOut}>
            logout
          </Link>
        </NavItem>
      </NavList>
    </nav>
  );
};

export default Nav;
