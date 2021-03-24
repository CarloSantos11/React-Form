import { FaGithub, FaDiscord, FaInstagram, FaSlackHash } from "react-icons/fa";
import styled, { css } from 'styled-components'

const LanguageName = styled.p`
  text-transform: capitalize;
  `

const CardView = styled.section`
  width: 500px;
  margin: auto;
  background-color: #fff;
  padding: 2rem 0rem 3rem 5rem;
  margin-bottom: 10rem;
  -webkit-box-shadow: 8px 7px 11px 6px rgba(163,163,163,0.7);
  box-shadow: 8px 7px 11px 6px rgba(163,163,163,0.7);
`
const Container = styled.section`
    display: flex;
`

const Column = styled.section`
  display: inline-block;
  padding: 2rem 5rem 0 0;
`
// const ColumnTwo = styled.section`
//   display: inline-block;
// `

function Card(props) {
  const socialMedia = props.userInfo.socialMedia;
  return (
    <CardView>
      <h1>{props.userInfo.username}</h1>
      <Container>
        <Column>
          <h2>Role</h2>
          {props.userInfo.role.map((currentRole) => (
            currentRole.value && <h4>{currentRole.name}</h4>
          ))}
          
        </Column>
        <Column>
          <h2>Languages</h2>
          {props.userInfo.socialMedia.map((social) => console.log(social)) }
          {props.userInfo.languages.map((language) => (
            language.value && <LanguageName>{language.name}</LanguageName>
          ))}

          <h3>Social Media</h3>
          <div id="post_social_links">
            {socialMedia.map((social) => (
              social.value && <a style={{ padding: '0.2rem' }} href={social.value} target="_blank">{social.icon}</a>
            ))}
          </div>
        </Column>
      </Container>
    </CardView>
  )
}

export default Card

// React router
// - Login
// - Home - list of users
// - User (uses the hiddenForm component) - dynamic router
// Fake user login

// Available people - import JSON
// Page for displaying user
