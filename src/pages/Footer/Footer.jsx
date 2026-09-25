import "./Footer.css"
import { FaYoutube } from "react-icons/fa";

function Footer(){

  return(

    <footer className="footer">

      <div className="footer-container">

        <p>© 2026 Toha Al–Mahmudu</p>

        <div className="social-icons">

          <a href="https://youtube.com/@tohaalmahmudi001?si=aaFI0H53C64bezQI"><FaYoutube/></a>

        </div>

      </div>

    </footer>

  )

}

export default Footer;