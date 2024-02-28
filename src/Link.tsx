import "./App.css";
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/linkedin'
import 'react-social-icons/email'

function Link() {

  return (
    <section id="link" className="text-center">
      <div className="container">
        <h1>Connect with Us</h1>
        <br />
        <SocialIcon 
          url="https://www.linkedin.com/company/robusoft/about/?viewAsMember=true" 
          target="_blank"
          rel="noreferrer"
        />
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <SocialIcon 
          network="email"
          href="mailto:galcantarajr@yahoo.com" 
        />
      </div>
      <p className="mt-5">&copy;2024 Robusoft Limited</p>
    </section>
  );
}

export default Link;
