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
        'description': 'My passion for css has grown, and you can see my skills in this portfolio website'
    },
    { 
        rating: 2,
        'name': 'Django',
        'logo': Django,
        'description': 'This is the first web framework I learned. The most heavily I used it was at my internship at Cisco, and we used Django-REST to setup endpoints and DAOs to connect to our postgres tables'
    },
    {
        rating: 2,
        'name': 'Docker',
        'logo': Docker,
        'description': 'First used Docker at my Cisco Internship. First I hated it. But then I learned of its power when I realized how many problems it solved. So I even used it in a person project, for Rooster, because we wanted the code to work on mac, windows, and linux'
    },
    {
        rating: 2,
        'name': 'Firebase',
        'logo': Firebase,
        'description': 'When I first started learning how to make full stack web projects at a quick pace, my goto is firebase. Super easy and fast to setup. At scale I have learned its limitations however'
    },
    {
        rating: 6,
        name: 'Github',
        'logo': Github,
        'description': "I always thought it was really dumb that they don't teach us to use Github at school. But I've been using Github for years now, and am pretty familar with the ins and outs, including commits, pull requests, issues, projects, Github actions, various integrations"
    },
    {
        rating: 1,
        'name': 'Google Maps API',
        'logo': Google_maps,
        'description': 'Yes, I know how to use google maps. haha, not just the app. I included this because I used the api to setup a mapping application at my internship at cisco, so I got pretty familiar with it, and would be comfortable doing another project in it'
    },
    {
        rating: 7,
        'name': 'HTML',
        'logo': Html,
        'description': "My very first exposure to coding was when my uncle asked me if I wanted to learn some coding. He opened up our computer, pulled up notepad, and made a simple webpage with html. While no expert now, I get do or look up docs on how to do everything. "
    },
    {
        rating: 2,
        'name': 'Java',
        'logo': Java,
        'description': "I've taken a couple courses at BYU using Java. Used it to build a full stack android application."
    },
    {
        rating: 4,
        'name': 'JavaScript',
        'logo': Javascript,
        'description': "I have mostly learned JavaScript while learning React, which I have been using very regularly for a couple of years now. I have built a couple websites which I used vanilla JavaScript."
    },
    {
        rating: 1,
        'name': 'Kotlin',
        'logo': Kotlin,
        "description": "In a class at BYU, we were building an android application, and we were given the choice of developing in Java or Kotlin. All the textbook and course materials were in Java, so if we did Kotlin we had to learn it ourselves. I wanted to challenge myself, so I went with Kotlin. I spent a lot of hours in the library reading a textbook to be able to use Kotlin for our project."
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
        'description': "I've been programming in python for many years, wince abou 2015 when I was in high school. Used for so many different projects. This was my langauge I learned how to program in, and have done dozens of projects with it. Very proficient. Used in Jobs as well."
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
        'description': "I'm not a regular Swift developer. But one time I did a project (lonomo - look in the projects tab) and I was pretty proud of it. Learned Swift from scratch on my cousin's macbook air."
    },
    {
        rating: 3,
        'name': 'TypeScript',
        'logo': Typescript,
        'description': 'First learned TypeScript at my internship at Cisco, then I rebelled and used JavaScript for a few years. But then as I got better at Software Development, I realized that TypeScript makes developing a better exprience, especially with full stack applicaitons. Now Its my go to',
    },
    {
        rating: 3,
        'name': 'React',
        'logo': ReactIcon,
        'description': "I love developing in React. Such a powerful tool. 1st learned at my Cisco internship. Since used in many personal projects. I can develop applications super quickly in react, and have a lot of fun with it."
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