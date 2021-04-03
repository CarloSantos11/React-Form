import {Link, BrowserRouter} from "react-router-dom"
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import styled from 'styled-components'

const LanguageName = styled.p`
  text-transform: capitalize;
  `

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
          <BrowserRouter>
            <a href="#"><Tab label="About"/></a>
            <a rel="noopener noreferrer" target="_blank" href="https://www.codewars.com/"><Tab label="Challenges" /></a>
            <a href="/"><Tab label="Login" /></a>
            <a href="/signup"><Tab label="Sign Up" /></a>
          </BrowserRouter>
          
        </Tabs>
      </Paper>
    </Container>
    
  )
}
  export default Nav