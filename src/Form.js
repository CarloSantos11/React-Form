import React, { useState, useEffect } from 'react';
import HiddenForm from './HiddenForm';

const outerSectionStyle =  {
  width: '30%',
  display: 'grid',
  gridTemplateColumns: '40% auto',
  padding: '20px 16px',
  margin: '20px auto'

}

function Form(props) {
  const [visibility, setVisibility] = useState(false);

  function handleSubmit(e){
    e.preventDefault();
    setVisibility(true)
  }
  return (
    <>
      <section style={outerSectionStyle}>     
        <section id="formSection" className="grid-item">
          <form
            name="form"
            id="signupform"
            onSubmit={handleSubmit}
            // method="get"
          >
            <div id="username">
              <label htmlFor="username">User Name</label><br/>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
              /><br />
            </div>

            <div id="role">
              <label htmlFor="role">Role</label><br/>

              <input type="radio" name="role" id="mentor" value="mentor" />
              <label htmlFor="mentor">Mentor</label>

              <input type="radio" name="role" id="mentee" value="mentee" />
              <label htmlFor="mentor">Mentee</label><br />
            </div>

            <div id="languages">
              <label htmlFor="languages">Languages</label><br />

              <input
                type="checkbox"
                value="javascript"
                name="languages"
                id="javascript"
              />
              <label htmlFor="javascript">Javascript</label><br />

              <input type="checkbox" value="java" name="languages" id="java" />
              <label htmlFor="java">Java</label><br />

              <input type="checkbox" value="ruby" name="languages" id="ruby" />
              <label htmlFor="ruby">Ruby</label><br />

              <input type="checkbox" value="python" name="languages" id="python" />
              <label htmlFor="python">Python</label><br />
            </div>

            <div id="social_links">
              <input type="button" value="Github" /><br />
              <input
                type="text"
                name="social_links"
                id="github"
                placeholder="Profile URL"
              /><br />

              <input type="button" value="Discord" /><br />
              <input
                type="text"
                name="social_links"
                id="discord"
                placeholder="Profile URL"
              /><br />

              <input type="button" value="Instagram" /><br />
              <input
                type="text"
                name="social_links"
                id="instagram"
                placeholder="Profile URL"
              /><br />

              <input type="button" value="Slack" /><br />
              <input
                type="text"
                name="social_links"
                id="slack"
                placeholder="Profile URL"
              /><br />
            </div>

            <button type="submit">Submit</button>
          </form>
        </section>

        <HiddenForm display={visibility} />
      </section>
    </>
  )
}

export default Form