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
import ReactIcon from "./icons/react.svg"
import Stripe from "./icons/stripe.svg"
import Swift from "./icons/swift.svg"
import Typescript from "./icons/typescript.svg"
import Popup from './components/Popup';

const logos_details = [
    {
        rating: 1,
        'name': 'AWS',
        'logo': Aws,
        'description': 'Knowledge of how to use and implement S3, EC2, Amplify, Lambda, API Gateway, DynamoDB, IAM'
    },
    {
        rating: 3,
        'name': 'CSS',
        'logo': Css,
        'description': "I've always has a pasion for making websites look great. I have slowly developed my skills in css to be where they are now. I aimed to use this website as an opportunity to showcase my skills in CSS."
    },
    { 
        rating: 2,
        'name': 'Django',
        'logo': Django,
        'description': 'I have applicable experience with Django. It was used heavily during my internship at Cisco to setup endpoints and DAOs to connect to our Postgres tables'
    },
    {
        rating: 2,
        'name': 'Docker',
        'logo': Docker,
        'description': 'I first used Docker at my Cisco Internship. I quickly learned of its power and problem solving capability. I used it in a personal project, Rooster, in order for the code to work on Mac, Windows, and Linux'
    },
    {
        rating: 2,
        'name': 'Firebase',
        'logo': Firebase,
        'description': 'Though I am aware of its limitations at scale, I have learned how to quickly develop full-stack web applications with Firebase.'
    },
    {
        rating: 6,
        name: 'Github',
        'logo': Github,
        'description': "During my programming courses at BYU I recognized a gap in my education concerning Github. I took it upon myself to learn the ins and outs of the application, including commits, pull requests, issues, projects, Github actions, various integrations"
    },
    {
        rating: 1,
        'name': 'Google Maps API',
        'logo': Google_maps,
        'description': 'I used this API to setup a mapping application at my internship at Cisco. I am familiar with it, and would be comfortable completing another project with it.'
    },
    {
        rating: 7,
        'name': 'HTML',
        'logo': Html,
        'description': "HTML was my very first exposure to coding. I feel comfortable coding in plain HTML, but apply it more when I am coding in React with JSX."
    },
    {
        rating: 2,
        'name': 'Java',
        'logo': Java,
        'description': "I've completed multiple courses at BYU using Java. In one of the courses, we built a full stack Android application."
    },
    {
        rating: 4,
        'name': 'JavaScript',
        'logo': Javascript,
        'description': "My proficiency in JavaScript has been primarily developed through regular engagement with React over the past few years."
    },
    {
        rating: 1,
        'name': 'Kotlin',
        'logo': Kotlin,
        "description": "In a class at BYU, we were building an android application, and were given the choice of developing in Java or Kotlin. The course materials were all in Java, so if we chose Kotlin, we had to learn it ourselves. I wanted to challenge myself, so I went with Kotlin. I spent a lot of hours in the library reading a textbook to be able to use Kotlin for our project."
    },
    {
        rating: 7,
        'name': 'Linux',
        'logo': Linux,
        "description": "My first exposure to Linux was in High School. We had chromebooks, and I had a friend that figured out how to dual boot the chromebook so it could run Ubuntu on it. So I had him show me how to do that too. My next exposure was creating little side projects on a Raspberry Pi in High School as well. Since then I've used it for web servers, supercomputer computations, and virtual machines."
    },
    {
        rating: 3,
        'name':'Node',
        'logo': Node,
        'description': "I've setup various node.js projects over the years. Most notable was at my Provo City job, I setup two node.js servers to send data from a database to an api consumed by a web app to analyze python scripts that were running on our system.",
    },
    {
        rating: 8,
        'name': 'Python',
        'logo': Python,
        'description': "I've been programming in python for many years, since about 2015 when I was in high school. Used for many different projects. This was my langauge I learned how to program in, and have done dozens of projects with it. Very proficient. Used in Jobs as well."
    },
    {
        rating: 3,
        'name': 'Raspberry pi',
        'logo': Raspberry_pi,
        'description': "I've had a lot of fun with raspberry pi's over the years. When I was a teenager I bought one, installed the OS, and tried several projects with it, including hooking it up to a camera, and run on batter power on top of an RC car to stream video so that I could remote control the car from another room and see footage. I've also used it as a web server. I've also used it to hook up to ip cameras to run facial recognition software on (Rooster)",
    },
    {
        rating: 1,
        'name': 'Stripe API',
        'logo': Stripe,
        'description': 'I still have a lot to learn about it, but I was developing an app that was to be used by door to door salesman making transactions. I had this whole plan to use stripe with our business partners, so I started coding a web app and a mobile app with stripe payments.'
    },
    {
        rating: 1,
        'name': 'Swift',
        'logo': Swift,
        'description': "I've always wanted to learn how to do iOS development, so I learned Swift for a project I was working on (Lonomo on the projects tab"
    },
    {
        rating: 3,
        'name': 'TypeScript',
        'logo': Typescript,
        'description': "First learned TypeScript at my internship at Cisco, then I backtracked and used JavaScript for a few years since it was simpler. But then as I got better at Software Development, I realized that TypeScript makes developing a better exprience, especially with full stack applicaitons. Now it's my go to langauge",
    },
    {
        rating: 3,
        'name': 'React',
        'logo': ReactIcon,
        'description': "My use of React began during an internship at Cisco, where I first encountered this robust framework. Since then, it has become a regular part of my development toolkit, extensively used in personal projects. My proficiency allows for rapid application development."
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
                <div className='popup-info'>
                    <h1>{selected?.name}</h1>
                    <p>Appx. Years of Experience: {selected?.rating}</p>
                    <p>{selected?.description}</p>
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