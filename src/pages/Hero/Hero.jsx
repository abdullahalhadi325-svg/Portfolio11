import UnicornScene from "unicornstudio-react";
import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <UnicornScene
        projectId="kLM3mnmLXnAU5DHNMhUN"
        width="100%"
        height="900px"
        scale={1}
        dpi={1.5}
        sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@2.1.3/dist/unicornStudio.umd.js"
      />
      <div className="content" style={{textAlign: "center", color: "white"}}>
        <h1>Toha Al–Mahmudu</h1>
        <h2>Creative Technologist • Researcher • Writer</h2>
        <p>Think Deeper. Create Fearlessly. Shape What’s Next.</p>
        <p>Exploring technology, ideas, creativity, and the possibilities of tomorrow.</p>
        <div className="buttn" style={{marginTop: "20px"}}>
          <a href="#">Contact</a>
          <a href="#">Who i'm</a>
        </div>
      </div>
    </div>
    
  );
}