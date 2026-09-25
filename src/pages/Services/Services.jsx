import "./Services.css"
import { FaCode, FaPalette, FaLaptopCode, FaShieldAlt } from "react-icons/fa";

function Services(){

  return(
    <div className="services" id="serv">

      <div className="title">
        <h2>Services</h2>
      </div>

      <div className="services-container">

        <div className="service-card">
          <FaCode className="service-icon"/>
          <h3>AI & Creative Technology</h3>
          <p>Prompt Engineering, AI Content</p>
        </div>

        <div className="service-card">
          <FaPalette className="service-icon"/>
          <h3>Digital & Technology</h3>
          <p>Website Creation, Tech Troubleshooting</p>
        </div>

        <div className="service-card">
          <FaLaptopCode className="service-icon"/>
          <h3>Creative Media</h3>
          <p>Video Editing, Graphic Design</p>
        </div>

        <div className="service-card">
          <FaShieldAlt className="service-icon"/>
          <h3>Cybersecurity</h3>
          <p>Ethical Hacking, Security Research</p>
        </div>

      </div>

    </div>
  )

}

export default Services;