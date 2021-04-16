import { FaGithub, FaDiscord, FaInstagram, FaSlackHash } from "react-icons/fa";
import styled from "styled-components";

let socialIcons = {
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

const SocialMediaLink = styled.a`
  padding: 0.2rem;
`;

function Card({ userInfo }) {
  const socialMedia = userInfo.socialMedia;
  return (
    <CardView>
      <h1>{userInfo.username}</h1>
      <Container>
        <Column>
          <h2>Role</h2>
          {userInfo.role.map(
            (currentRole, index) =>
              currentRole.value && <h4 key={index}>{currentRole.name}</h4>
          )}
        </Column>
        <Column>
          <h2>Languages</h2>
          {userInfo.languages.map(
            (language, index) =>
              language.value && (
                <LanguageName key={index}>{language.name}</LanguageName>
              )
          )}

          <h3>Social Media</h3>
          <div id="post_social_links">
            {socialMedia.map(
              (social, index) => 
                social.value && (
                  <SocialMediaLink
                    key={index}
                    style={{ padding: "0.2rem" }}
                    href={social.value}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {socialIcons[social.name]}
                  </SocialMediaLink>
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
