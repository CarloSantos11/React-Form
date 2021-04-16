import {Link} from 'react-router-dom';
import styled from "styled-components";

const UnorderedList = styled.ul`
  list-style-type: none;
  margin: 0 0 50px 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  position: -webkit-sticky; 
  position: sticky;
  top: 0;
`

const ListItems = styled.ul`
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 20px 16px;
  text-decoration: none;
`


const Nav = () => {
  return (
    <nav>
      <UnorderedList>
        <ListItems>
          <Link to="/index">Home</Link>
        </ListItems>
        <ListItems>
          <Link to="/signup">Signup</Link>
        </ListItems>
        <ListItems>
          <Link to="/">logout</Link>
        </ListItems>
      </UnorderedList>
    </nav>
  )
}

export default Nav
