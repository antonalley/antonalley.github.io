import "./Intro.css"
import portrait from "./images/portrait.jpg"

export function Intro({instructions}){
    return (
        <div className={`intro-container ${instructions}`}>
            <div>
                <div className="welcome-title">Anton Alley's Development Portfolio</div>
            </div>
            <div className="portrait">
                <img src={portrait}></img>
                <div className="portrait-overlay-right"></div>
                <div className="portrait-overlay-left"></div>
                
                <div className="welcome-word">Welcome</div>
            </div>

            <div className="under-portrait">
                <div className="subtitle">Feel free to expolore!</div>
            </div>
            
        </div>
    )
}