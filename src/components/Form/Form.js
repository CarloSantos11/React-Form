import React, { useState, useEffect } from 'react';
import HiddenForm from '../HiddenForm/HiddenForm';
import styled, { css } from 'styled-components'

const OuterSection = styled.section`
  width: 30%;
  display: grid;
  gridTemplateColumns: 1fr 1fr;
  margin: 50px auto;
  columnGap: 30px;
`

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
  const [languages, setLanguages] = useState({
    "javascript": false,
    "java": false,
    "ruby": false,
    "python": false
  })

  const [socialMedia, setSocialMedia] = useState({
    "github": "",
    "discord": "",
    "instagram": "",
    "slack": ""
  })

  let userInfo = {
    "username": username,
    "role": role,
    "languages": languages,
    "socialMedia": socialMedia
  }

  function handleSubmit(e){
    e.preventDefault();
    setVisibility(true);
  }

  function handleNameChange(e) {
    setUsername(e.target.value)
  }

  // function handleInfoChange(e) {
  //   setUserInfo({...userInfo, [e.target.name]: e.target.value})
  // }

  function handleRoleChange(e) {
    setRole({...role, [e.target.id]: (e.target.checked)})
  }
  // This should be applied to each one of our languages
  function handleLanguageChange(e){
    setLanguages({...languages, [e.target.id]: (e.target.checked)})
  }

  // Should handle the userInfo for each one of our social links.
  function handleSocialLinks(e) {
    setSocialMedia({...socialMedia, [e.target.id]: e.target.value})
  }

  return (
    <>
      <OuterSection>     
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

              <input
                onChange={handleLanguageChange}
                type="checkbox"
                value={languages.javascript}
                id="javascript"
              />
              <label htmlFor="javascript">Javascript</label><br />

              <input 
                onChange={handleLanguageChange}
                type="checkbox" 
                value={languages.java} 
                id="java" 
                />
              <label htmlFor="java">Java</label><br />

              <input 
                onChange={handleLanguageChange}
                type="checkbox" 
                value={languages.ruby} 
                id="ruby" />
              <label htmlFor="ruby">Ruby</label><br />

              <input 
                onChange={handleLanguageChange}
                type="checkbox" 
                value={languages.python} 
                name="languages" 
                id="python" 
              />
              <label htmlFor="python">Python</label><br />
            </div>

            <div id="social_links">
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