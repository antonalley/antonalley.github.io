import { useEffect, useRef, useState } from "react"
import "./Intro.css"


const downArrow = <svg xmlns="http://www.w3.org/2000/svg" fill="var(--olive)" viewBox="0 -4 16 16">
<path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67"/>
</svg>

export function Intro({instructions}){
    const portraitRef = useRef(null);
    const [portraitHeight, setPortraitHeight] = useState(100);

    useEffect(() => {
        if (portraitRef.current) {
            setPortraitHeight(portraitRef.current.offsetHeight)
        }
    }, [])

    function scrollToBottom() {
        console.log("Scrol to bottom")
        window.scrollBy({
          top: 100,
          behavior: 'smooth', // Optional: defines the transition animation
        });
      }
    return (
        <div className={`intro-container ${instructions}`}>
            <div className="over-portrait" ref={portraitRef}>
                <div className="portrait-overlay-right"></div>
                <div className="portrait-overlay-left"></div>
                
                <div className="welcome-word">Welcome</div>
            </div>

            <div className="under-portrait" style={{marginTop:portraitHeight}}>
                <div className="welcome-title">Anton Alley's Development Portfolio</div>
                <div className="subtitle">Feel free to expolore!</div>
            </div>

            {/* <div className="down-arrow" onClick={scrollToBottom}>{downArrow}</div>

            <div className="intro">
                <div className="intro-paragraph">
                    Come check out my professional qualifications!
                    <br/><br/>
                    I created this portfolio because I've always disliked how short a resumé is, and I felt like I had more to show.
                    <br/>
                    This is a project in and of itself, but I have work experience, projects, and other experiences and skills that have developed me professionally.
                </div>
            </div> */}
            
        </div>
    )
}