import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import styled from 'styled-components'

const Container = styled.div`
  margin-bottom: 100px;
`

function Nav({ userInfo }) {

  return (
    <Container>
      <Paper square>
        <Tabs
          value="#"
          indicatorColor="primary"
          textColor="primary"
          // onChange={handleChange}
          aria-label="disabled tabs example"
        >
          <Link to="/index" ><Tab label="About" /></Link>
          <a rel="noopener noreferrer" target="_blank" href="https://www.codewars.com/"><Tab label="Challenges" /></a>
          <Link to="/" ><Tab label="Login" /></Link>
          <Link to="/signup" ><Tab label="Sign Up" /></Link>
        </Tabs>
      </Paper>
    </Container>

  )
}
export default Nav