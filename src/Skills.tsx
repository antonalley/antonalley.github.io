import { useEffect, useRef, useState } from 'react';
import './Skills.css'; // Import the CSS file
import Aws from "./icons/aws.svg"
import Css from "./icons/css.svg"
import Django from "./icons/django.svg"
import Docker from "./icons/docker.svg"
import Firebase from "./icons/firebase.svg"
import Github from "./icons/github.svg"
import Google_maps from "./icons/google_maps.svg"
import Html from "./icons/html.svg"
import Java from "./icons/java.svg"
import Javascript from "./icons/javascript.svg"
import Kotlin from "./icons/kotlin.svg"
import Linux from "./icons/linux.svg"
import Node from "./icons/node.svg"
import Python from "./icons/python.svg"
import Raspberry_pi from "./icons/raspberry_pi.svg"
// import {ReactComponent as React} from "./icons/react.svg"
import Stripe from "./icons/stripe.svg"
import Swift from "./icons/swift.svg"
import Typescript from "./icons/typescript.svg"
import Popup from './components/Popup';

const logos_details = [
    {
        'name': 'AWS',
        'logo': Aws,
        'description': 'Knowledge how to use and implement S3, EC2, Amplify, Lambda, API Gateway, DynamoDB, IAM'
    },
    {
        'logo': Css
    },
    {
        'logo': Django
    },
    {
        'logo': Docker
    },
    {
        'logo': Firebase
    },
    {
        'logo': Github
    },
    {
        'logo': Google_maps
    },
    {
        'logo': Html
    },
    {
        'logo': Java
    },
    {
        'logo': Javascript
    },
    {
        'logo': Kotlin
    },
    {
        'logo': Linux
    },
    {
        'logo': Node
    },
    {
        'logo': Python
    },
    {
        'logo': Raspberry_pi
    },
    {
        'logo': Stripe
    },
    {
        'logo': Swift
    },
    {
        'logo': Typescript
    }
]


const downButton = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-arrow-down-square" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
    </svg>

export function Skills({instructions}) {
    const [selected, setSelected] = useState(null);
    var [center, setCenter] = useState(null)
    const movingLogosRef = useRef(null);
    const fixedLogosRef = useRef(null);
    const skillsContainerRef = useRef(null);

    const handleMouseLeave = (e) => {
        movingLogosRef.current.style.transform = `translate(0px, 0px)`
    }
    const handleMouseMove = (e) => {
        const canvas = movingLogosRef.current;
        if (!canvas) return;

        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        // Calculate the center of the container
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        if (center === null){
            let new_center = {
                'x':centerX,
                'y':centerY
            }
            setCenter(new_center)
            center = new_center
        }

        let factor = 5
        let xMovement = -((center.x - rect.left) / factor) /( (center.x - rect.left) / (mouseX - center.x) )
        let yMovement = -((center.y - rect.top) / factor) / ( (center.y - rect.top) / (mouseY - center.y))

        // console.log(xMovement, yMovement)
        // setPosition({ x: xMovement, y: yMovement });
        movingLogosRef.current.style.transform = `translate(${xMovement}px, ${yMovement}px)`
    };

    useEffect(() => {

        movingLogosRef.current.addEventListener('mousemove', handleMouseMove);

        fixedLogosRef.current.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            movingLogosRef.current.removeEventListener('mousemove', handleMouseMove);
            fixedLogosRef.current.removeEventListener('mouseleave', handleMouseLeave)
        };
    }, []);


    return (
        <div className={`skills-container ${instructions}`} ref={skillsContainerRef}>
            <div className="skills-title">
                <div>SKILLS</div>
                {/* <div>{downButton}</div> */}
            </div>
            <Popup isOpen={selected!=null} onClose={()=>setSelected(null)}>
                <div>
                    <h1>{selected?.name}</h1>
                </div>
            </Popup>
            <div id="logo-grid-container" ref={fixedLogosRef}>
                <div className="fade bottom"></div>
                <div className="fade top"></div>
                <div className="fade left"></div>
                <div className="fade right"></div>
                <div ref={movingLogosRef} id="logo-grid" className="logo-grid">
                    {logos_details.map((logo, index) => (
                        <div key={index} onClick={() =>setSelected(logo)}>
                            <img src={logo.logo} className='logo-icon' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}