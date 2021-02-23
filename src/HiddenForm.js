const HiddenStyle =  {
  display: 'none'
}

function HiddenForm(props) {
  {
    console.log(props)
    if(props.display){
      return(
        <section className="post grid-item hidden" style={HiddenStyle}>
        <h2>User Name</h2>
        <h4 id="post_username"></h4>

        <h2>Role</h2>
        <h4 id="post_role"></h4>
        
        <h2>Languages</h2>
        <h4 id="post_languages"></h4>

        <h2>Social Links</h2>
        <div id="post_social_links">
          <a href="#" target="_blank" id="d_github" className="fab fa-github-square hidden"></a>
          <a href="#" target="_blank" id="d_discord" className="fab fa-discord hidden"></a>
          <a href="#" target="_blank" id="d_instagram" className="fab fa-instagram hidden"></a>
          <a href="#" target="_blank" id="d_slack" className="fab fa-slack hidden"></a>
        </div>
        </section>
      )
    } else return(<></>)
  }
}

export default HiddenForm