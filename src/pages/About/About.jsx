import { useState } from "react";
import "./About.css";
import Skills from "./Skills";

function About() {

  const [flip, setFlip] = useState(false);

  return (
    <div className="about" id="about">

      <div className="title">
        <h2>About Me</h2>
      </div>

      <div className="content">

        <div
          className="photo-card"
          onClick={() => setFlip(!flip)}
        >

          <div className={flip ? "photo-inner flip" : "photo-inner"}>

            {/* FRONT IMAGE */}

            <div className="photo-front">
              <img src="img3.png" alt="" />
            </div>

            {/* BACK IMAGE */}

            <div className="photo-back">
              <img src="img4.png" alt="" />
            </div>

          </div>

        </div>

        <div className="text-about">
          <p>
            Deeply interested in AI, digital tools, cybersecurity, and creative technology. Naturally curious, enjoys problem-solving, storytelling, and understanding the rapidly changing digital world.

            Education: Hifz al-Qur’an (Sylhet Bagha Madrasa),
            Mawlana Studies (Moulvibazar Darul Uloom Title Madrasa - Currently studying),
            SSC (Uttarmunai Malliksarai Fazil Madrasa - Completed).

          </p>
        </div>

      </div>

      <Skills />

    </div>
  );
}

export default About;