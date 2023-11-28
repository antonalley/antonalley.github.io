import { useEffect, useRef, useState } from 'react';
import './Skills.css'; // Import the CSS file
import {ReactComponent as Aws} from "./icons/aws.svg"
import {ReactComponent as Css} from "./icons/css.svg"
import {ReactComponent as Django} from "./icons/django.svg"
import {ReactComponent as Docker} from "./icons/docker.svg"
import {ReactComponent as Firebase} from "./icons/firebase.svg"
import {ReactComponent as Github} from "./icons/github.svg"
import {ReactComponent as Google_maps} from "./icons/google_maps.svg"
import {ReactComponent as Html} from "./icons/html.svg"
import {ReactComponent as Java} from "./icons/java.svg"
import {ReactComponent as Javascript} from "./icons/javascript.svg"
import {ReactComponent as Kotlin} from "./icons/kotlin.svg"
import {ReactComponent as Linux} from "./icons/linux.svg"
import {ReactComponent as Node} from "./icons/node.svg"
import {ReactComponent as Python} from "./icons/python.svg"
import {ReactComponent as Raspberry_pi} from "./icons/raspberry_pi.svg"
// import {ReactComponent as React} from "./icons/react.svg"
import {ReactComponent as Stripe} from "./icons/stripe.svg"
import {ReactComponent as Swift} from "./icons/swift.svg"
import {ReactComponent as Typescript} from "./icons/typescript.svg"

const logos = [
    <Aws width="5vh" height="5vh"/>,
    <Css width="5vh" height="5vh"/>,
    <Django width="5vh" height="5vh"/>,
    <Docker width="5vh" height="5vh"/>,
    <Firebase width="5vh" height="5vh"/>,
    <Github width="5vh" height="5vh"/>,
    <Google_maps width="5vh" height="5vh"/>,
    <Html width="5vh" height="5vh"/>,
    <Java width="5vh" height="5vh"/>,
    <Javascript width="5vh" height="5vh"/>,
    <Kotlin width="5vh" height="5vh"/>,
    <Linux width="5vh" height="5vh"/>,
    <Node width="5vh" height="5vh"/>,
    <Python width="5vh" height="5vh"/>,
    <Raspberry_pi width="5vh" height="5vh"/>,
    // <React width="5vh" height="5vh"/>,
    <Stripe width="5vh" height="5vh"/>,
    <Swift width="5vh" height="5vh"/>,
    <Typescript width="5vh" height="5vh"/>,
]


const downButton = <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" className="bi bi-arrow-down-square" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 2.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z"/>
    </svg>

export function Skills() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const canvasRef = useRef(null);

    // const handleMouseMove = (e) => {
    //     const canvas = canvasRef.current;
    //     if (!canvas) return;

    //     // Get mouse position relative to the canvas
    //     const rect = canvas.getBoundingClientRect();
    //     const xMovement = (rect.width / 2 - (e.clientX - rect.left)) / 1.2;
    //     const yMovement = (rect.height / 2 - (e.clientY - rect.top)) / 1.2;

    //     setPosition({ x: xMovement, y: yMovement });
    // };

    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     if (!canvas) return;

    //     canvas.addEventListener('mousemove', handleMouseMove);
    //     return () => canvas.removeEventListener('mousemove', handleMouseMove);
    // }, []);

    // useEffect(() => {
    //     console.log(position)
    // }, [position])


    return (
        <div className="skills-container">
            <div className="skills-title">
                <div>SKILLS</div>
                {/* <div>{downButton}</div> */}
            </div>
        <div ref={canvasRef} className="logo-grid" style={{ transform: `translate(${position.x}px, ${position.y}px)` }}>
            {/* {logos.map((logo, index) => (
                logo
            ))} */}
            {logos}
        </div>
        </div>
    );
}