import "./Intro.css"
import Portrait from "./images/portrait.jpg"


export function Intro(){
    return (
        <div className="intro-container">
            <div className="welcome">
                <div className="welcome-word">Welcome</div>
                <div className="welcome-info">To Anton's development portfolio. <br /> This is currently being developed, and is not yet finished.</div>
            </div>
            <div className="intro">
            <img id="portrait" src={Portrait}></img>
            <div className="intro-paragraph">
                Anton Alley is a soon to be graduated BYU student. 
                He is becoming a great developer with a diverse skillset, ready to jump into just about any situation
                and any tech stack. He has developed a passion for entrepreneurship and startups that are growing
                and exciting. 
            </div>
            </div>
        </div>
    )
}