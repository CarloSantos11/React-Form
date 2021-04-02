import { FaGithub, FaDiscord, FaInstagram, FaSlackHash } from "react-icons/fa";
import styled, { css } from "styled-components";
//import { useState } from "react";

let socilaIcons = {
  github: <FaGithub size={30} />,
  discord: <FaDiscord size={30} />,
  instagram: <FaInstagram size={30} />,
  slack: <FaSlackHash size={30} />,
};

const LanguageName = styled.p`
  text-transform: capitalize;
`;

const CardView = styled.section`
  width: 500px;
  margin: auto;
  background-color: #fff;
  padding: 2rem 0rem 3rem 5rem;
  margin-bottom: 10rem;
  -webkit-box-shadow: 8px 7px 11px 6px rgba(163, 163, 163, 0.7);
  box-shadow: 8px 7px 11px 6px rgba(163, 163, 163, 0.7);
`;
const Container = styled.section`
  display: flex;
`;

const Column = styled.section`
  display: inline-block;
  padding: 2rem 5rem 0 0;
`;

// let noneActiveUserStyle = styled.section`
//   color: #c0b5b5;
// `;

// const ColumnTwo = styled.section`
//   display: inline-block;
// `

/**
 * Refactored userInfo
 * Added conditional rendering to set active user to true
 * Card component now displays online and offline status
 * ? Need to figure out how to pass state for login to card view form.
 * ? Login converts active from false to true but when user is rendered to "/index"
 * ? active is converted back to a false value.
 */

function Card({ userInfo }) {
  const socialMedia = userInfo.socialMedia;
  const activeUser = !userInfo.active;
  console.log(activeUser);

  return (
    <CardView>
      <h1>{userInfo.username}</h1>
      {activeUser ? (
        <h5 style={{ color: "green" }}>online</h5>
      ) : (
        !activeUser && <h5 style={{ color: "gray" }}>offline</h5>
      )}

      {/* {activeUser && <h5 style={{ color: "green" }}>online</h5>}
      {!activeUser && <h5 style={{ display: "none" }}>online</h5>} */}
      <Container>
        <Column>
          <h2>Role</h2>
          {userInfo.role.map(
            (currentRole) => currentRole.value && <h4>{currentRole.name}</h4>
          )}
        </Column>
        <Column>
          <h2>Languages</h2>
          {userInfo.socialMedia.map((social) => console.log(social))}
          {userInfo.languages.map(
            (language) =>
              language.value && <LanguageName>{language.name}</LanguageName>
          )}

          <h3>Social Media</h3>
          <div id="post_social_links">
            {socialMedia.map(
              (social) =>
                social.value && (
                  <a
                    style={{ padding: "0.2rem" }}
                    href={social.value}
                    target="_blank"
                  >
                    {socilaIcons[social.name]}
                  </a>
                )
            )}
          </div>
        </Column>
      </Container>
    </CardView>
  );
}

export default Card;

// React router
// - Login
// - Home - list of users
// - User (uses the hiddenForm component) - dynamic router
// Fake user login

// Available people - import JSON
// Page for displaying user
