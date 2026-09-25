import "./Project.css";

import img1 from "../../assets/images/Cleveroad.jpg";
import img2 from "../../assets/images/Capture d'écran 2025-10-22 182207.png";
import img3 from "../../assets/images/Weather Forecast Dashboard.jpg";




const projects = [
  {
    title: "VYROX",
    img: img1,
    desc: "AI-powered cinematic storytelling and video production.",
    skills: ["AI", "Creative Tech"]
  },
  {
    title: "YouTube Content",
    img: img2,
    desc: "Digital creation and audience development.",
    skills: ["Digital", "Media"]
  },
  {
    title: "Personal Portfolio",
    img: img3,
    desc: "Digital identity and web development.",
    skills: ["Web", "Portfolio"]
  }
];

export default function Project() {

  return (

    <section className="project reveal" id="project">

      <div className="title">
        <h2>Project</h2>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (

          <div className="project-card" key={index}>

            <img src={project.img} alt={project.title} />

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="skills">
              {project.skills.map((skill, i) => (
                <a href="#" key={i}>{skill}</a>
              ))}
            </div>

            <div className="btns">

              <a href="#" className="btn">
                <i className="fab fa-github"></i> GitHub
              </a>

              <a href="#" className="btn">
                <i className="fas fa-external-link-alt"></i> Live Demo
              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}