import React, { useState } from 'react';
import Card from './Card';
import { FaGithub, FaDiscord, FaInstagram, FaSlackHash } from "react-icons/fa";
import styled from 'styled-components'


const OuterSection = styled.section`
  width: 300px;
  display: block;
  grid-template-columns: 1fr 1fr;
  margin: 50px auto;
  column-gap: 30px;
  color: ${props => props.color || "black"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  padding: 40px;
  -webkit-box-shadow: 8px 7px 11px 6px rgba(163,163,163,0.7);
  box-shadow: 8px 7px 11px 6px rgba(163,163,163,0.7);
  `

function Form(props) {
  const [visibility, setVisibility] = useState(false);
  const [username, setUsername] = useState("");
  const [role, setRole] = useState([
    {
      name: "mentor",
      value: false
    },
    {
      name: "mentee",
      value: false
    }
  ])

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
      icon: <FaGithub size={30}/>,
      value: ""
    },
    {
      name: "discord",
      icon: <FaDiscord size={30} />,
      value: ""
    },
    {
      name: "instagram", 
      icon: <FaInstagram size={30} />,
      value: ""
    },
    {
      name: "slack", 
      icon: <FaSlackHash size={30} />,
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

  function handleRoleChange(event) {
    const _role = role.map(role => {
      if(role.name === event.target.id) {
        return { name: role.name, value: true}
      } return role;
    })
    setRole(_role)
  }

  // This should be applied to each one of our languages
  function handleLanguageChange(event){
    const _languages = languages.map(language => {
        if(language.name === event.target.id) {
          return {name: language.name, value: true} 
        } return language;      
      }) 
    setLanguages(_languages)
  }

  // Should handle the userInfo for each one of our social links.
  function handleSocialLinks(event) {
    const _socialMedia = socialMedia.map(social => {
      if(social.name === event.target.id) {
        return {name: social.name, icon: social.icon, value: event.target.value}
      } return social;
    })

    setSocialMedia(_socialMedia)
    // setSocialMedia({...socialMedia, [e.target.id]: e.target.value})
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

              {languages.map(language => (
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
              {socialMedia.map(social => (
                <>
                  <input
                    onChange={handleSocialLinks}
                    type="text"
                    name="social_links"
                    id= {social.name}
                    placeholder={social.name.replace(/^\w/, (firstLetter) => firstLetter.toUpperCase()) + " Profile URL"}
                  /><br />
                </>
              ))}
            </div>
            <br />

            <button className="btn-danger" type="submit">Submit</button>
          </form>
        </section>
      </OuterSection>
        {visibility && <Card userInfo={userInfo} />}

    </>
  )
}

export default Form