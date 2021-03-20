import React, { useState } from 'react';
import HiddenForm from '../HiddenForm/HiddenForm';
import styled, { css } from 'styled-components'

const OuterSection = styled.section`
  width: 30%;
  display: grid;
  gridTemplateColumns: 1fr 1fr;
  margin: 50px auto;
  columnGap: 30px;
  color: ${props => props.user || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  padding: 40px;
  `;

// How can i do this with styled components?
const hiddenForm = {
  gridColumn: 2 
}

function Form(props) {
  const [visibility, setVisibility] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState({
    "mentor": false,
    "mentee": false
  })
  const [languages, setLanguages] = useState([
    { 
      name: "javascript", 
      value: false
    },
    {
      name: "java", 
      value: false
    },
    {
      name: "ruby", 
      value: false
    },
    {
      name: "python", 
      value: false
    }
  ])

  const [socialMedia, setSocialMedia] = useState([
    { 
      name: "github", 
      value: ""
    },
    {
      name: "discord", 
      value: ""
    },
    {
      name: "instagram", 
      value: ""
    },
    {
      name: "slack", 
      value: ""
    }
  ])

  let userInfo = {
    username: username,
    role: role,
    languages: languages,
    socialMedia: socialMedia
  }

  function handleSubmit(e){
    e.preventDefault();
    setVisibility(true);
  }

  function handleNameChange(e) {
    setUsername(e.target.value)
  }

  function handleRoleChange(e) {
    setRole({...role, [e.target.id]: (e.target.checked)})
  }

  // This should be applied to each one of our languages
  function handleLanguageChange(event){
    const _languages = languages.map(language => {
        if(language.name == event.target.id) {
          return {name: language.name, value: true} 
        } return language;      
      }) 
    setLanguages(_languages)
  }

  // Should handle the userInfo for each one of our social links.
  function handleSocialLinks(event) {
    const _socialMedia = socialMedia.map(social => {
      if(social.name == event.target.id) {
        return {name: social.name, value: true}
      } return social;
    })

    setSocialMedia(_socialMedia)
    // setSocialMedia({...socialMedia, [e.target.id]: e.target.value})
  }

  return (
    <>
      <OuterSection user>     
        <section id="formSection">
          <form
            name="form"
            id="signupform"
            onSubmit={handleSubmit}
          >
            <div id="username">
              <label htmlFor="username">User Name</label><br/>
              <input
                onChange={handleNameChange}
                type="text"
                name="username"
                value={username}
                placeholder="Username"
              /><br />
            </div>

            <div id="role">
              <label htmlFor="role">Role</label><br/>

              <input onChange={handleRoleChange} type="checkbox" id="mentor"/>
              <label htmlFor="mentor">Mentor</label>

              <input onChange={handleRoleChange} type="checkbox" id="mentee" />
              <label htmlFor="mentor">Mentee</label><br />
            </div>

            <div id="languages">
              <label htmlFor="languages">Languages</label><br />

              {languages.map((language) => (
                <>
                  <input
                    onChange={handleLanguageChange}
                    type="checkbox"
                    value={language.value}
                    id={language.name}
                  />
                  <label htmlFor={language.name}>{language.name}</label><br />
                </>
              ))}
            </div>

            <div id="social_links">
              <label htmlFor="Social Media">Social Media</label><br />
              <input type="button" value="Github" /><br />
              <input
                onChange={handleSocialLinks}
                type="text"
                name="social_links"
                id="github"
                placeholder="Profile URL"
              /><br />

              <input type="button" value="Discord" /><br />
              <input
                onChange={handleSocialLinks}
                type="text"
                name="social_links"
                id="discord"
                placeholder="Profile URL"
              /><br />

              <input type="button" value="Instagram" /><br />
              <input
                onChange={handleSocialLinks}
                type="text"
                name="social_links"
                id="instagram"
                placeholder="Profile URL"
              /><br />

              <input type="button" value="Slack" /><br />
              <input
                onChange={handleSocialLinks}
                type="text"
                name="social_links"
                id="slack"
                placeholder="Profile URL"
              /><br />
            </div>

            <button className="btn-danger" type="submit">Submit</button>
          </form>
        </section>
        {visibility && <HiddenForm userInfo={userInfo} style={hiddenForm}/>}
      </OuterSection>
    </>
  )
}

export default Form