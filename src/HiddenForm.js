import React, { useState, useEffect } from 'react';
import { FaGithub, FaDiscord, FaInstagram, FaSlackHash } from "react-icons/fa";

function HiddenForm(props) {
  const socialMedia = props.state.socialMedia.socialMedia;
  return (
    <div style={props.style}>
      <h2>User Name</h2>
      <h3>{props.state.username.username}</h3>

      <h2>Role</h2>
      <h4>Mentor</h4>
      { props.state.role.role.mentor ? <p>Yes</p> : <p>No</p> }

      <h4>Mentee</h4>
      { props.state.role.role.mentee ? <p>Yes</p> : <p>No</p> }

      <h2>Languages</h2>
      <h4>WIP</h4>

      <h3>Social Media</h3>
      <h2>Social Links</h2>
      <div id="post_social_links">
        {socialMedia.github && <a style={{padding: '0.4rem'}} href={socialMedia.github} target="_blank"><FaGithub size={30}></FaGithub></a>}
        <a style={{padding: '0.4rem'}} href={socialMedia.discord} target="_blank"><FaDiscord size={30}></FaDiscord></a>
        <a style={{padding: '0.4rem'}} href={socialMedia.instagram} target="_blank"><FaInstagram size={30}></FaInstagram></a>
        <a style={{padding: '0.4rem'}} href={socialMedia.slack} target="_blank"><FaSlackHash size={30}></FaSlackHash></a><br/>
      </div>

    </div>
  )
}

export default HiddenForm