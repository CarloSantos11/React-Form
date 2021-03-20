import { FaGithub, FaDiscord, FaInstagram, FaSlackHash } from "react-icons/fa";
import styled, { css } from 'styled-components'

const LanguageName = styled.p`
  text-transform: capitalize;
  `

function HiddenForm(props) {
  const socialMedia = props.userInfo.socialMedia;
  return (
    <div style={props.style}>
      <h2>User Name</h2>
      <h3>{props.userInfo.username}</h3>

      <h2>Role</h2>
      <h4>Mentor</h4>
      { props.userInfo.role.mentor ? <p>Yes</p> : <p>No</p> }

      <h4>Mentee</h4>
      { props.userInfo.role.mentee ? <p>Yes</p> : <p>No</p> }

      <!-- This would be the code I am modeling -->
      <h2>Languages</h2>
      {props.userInfo.languages.map((language) => (
        <>
          {language.value && <LanguageName>{language.name}</LanguageName>}
        </>
      ))}

      <!-- WIP: DRY THIS SECTION -->
      <!-- I would like to find a way for the react-icon to be dynamic. 
           I will try interpolating the react-icon to be be a variable if that is possible -->

      <h3>Social Media</h3>
      <div id="post_social_links">
        {socialMedia.map((social)=>(
          <a style={{padding: '0.4rem'}} href={socialMedia.github} target="_blank"><FaGithub size={30}/></a>
        ))}

        <a style={{padding: '0.4rem'}} href={socialMedia.github} target="_blank"><FaGithub size={30}/></a>
        <a style={{padding: '0.4rem'}} href={socialMedia.discord} target="_blank"><FaDiscord size={30}/></a>
        <a style={{padding: '0.4rem'}} href={socialMedia.instagram} target="_blank"><FaInstagram size={30}/></a>
        <a style={{padding: '0.4rem'}} href={socialMedia.slack} target="_blank"><FaSlackHash size={30}/></a>
      </div>
    </div>
  )
}

export default HiddenForm