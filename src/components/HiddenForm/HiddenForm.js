import React, { useState, useEffect } from 'react';
import { FaGithub, FaDiscord, FaInstagram, FaSlackHash } from "react-icons/fa";

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

      <h2>Languages</h2>
      {props.userInfo.languages.javascript && <h4>Javascript</h4>}
      {props.userInfo.languages.java && <h4>Java</h4>}
      {props.userInfo.languages.ruby  && <h4>Ruby</h4>}
      {props.userInfo.languages.python && <h4>Python</h4>}

  

      <h3>Social Media</h3>
      <div id="post_social_links">
        {socialMedia.github && <a style={{padding: '0.4rem'}} href={socialMedia.github} target="_blank"><FaGithub size={30}/></a>}
        {socialMedia.discord && <a style={{padding: '0.4rem'}} href={socialMedia.discord} target="_blank"><FaDiscord size={30}/></a>}
        {socialMedia.instagram && <a style={{padding: '0.4rem'}} href={socialMedia.instagram} target="_blank"><FaInstagram size={30}/></a>}
        {socialMedia.slack && <a style={{padding: '0.4rem'}} href={socialMedia.slack} target="_blank"><FaSlackHash size={30}/></a>}
      </div>
    </div>
  )
}

export default HiddenForm