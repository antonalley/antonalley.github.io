import { useState } from "react";
import bp1 from "./images/byepolar-choose-side-4-4-23.png"
import bp2 from "./images/byepolar-home-4-4-23.png"
import l1 from "./images/lonomo_event.png"
import l2 from "./images/lonomo_home.png"
import l3 from "./images/lonomo_login.png"
import nf1 from "./images/Needs-first-home.png"
import nf2 from "./images/Needs-first-buy.png"
import snakes1 from "./images/fitness5000smalltall.png"
import "./Projects.css"

type tProject = {
    title: string,
    short_description: string,
    description: string,
    skills: Array<any>,
    videos: Array<any>,
    photos: Array<any>,
    github: Array<any>,
}

const chevron = <svg className="chevron" xmlns="http://www.w3.org/2000/svg" height="1.6em" width="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>


const projects_list: Array<tProject> = [
    {
        title: "My Portfolio Website",
        short_description: "",
        description: "",
        skills: [
            "React",
            "CSS",

        ],
        videos: [],
        photos: [],
        github: [],
    },
    {
        title: "Byepolar.tv: React.js and Firebase App",
        short_description: "",
        description: "Byepolar.tv is a web app that I am currently developing with Devin Jernigan as the Product Manager. It is a place for people to come together and discuss typically contreversial topics in a way that they can see all sides of the argument and gain trust and respect for other people. It is the first time that I have used firebase, and it has proved to be very useful, as I am using the realtime database, authentication, and hosting from it. I also learned how to use github actions to automatically deploy updates to the production site as I pull request them into the Production Branch, which has been really cool to use. The hardest part about this project is video call, because we are trying to get people to discuss online through video call, and it is difficult to do this when we want to do it in a very customized way, and on a tight budget(zero).",
        skills: [
            "Figma",
            "React",
            "Firebase",
            "WebRTC",
            "Peer to Peer Video Call",
            "CI/CD"
        ],
        videos: [],
        photos: [bp1, bp2],
        github: ["https://github.com/antonalley/byepolar_react"],
    },
    {
        title: "Lonomo: Swift iOS mobile development",
        short_description: "",
        description: "Lonomo was project I was working on for a few months fall 2022. I wanted to create a social event app to help people make more friends doing hobbies they love to do. I learned swift from scratch for this project, and learned how to connect it to the backend, which I created using the Django-rest framework in python, complete with authentication and api endpoints. I was also in a user experience course while I was designing this app, so I spent extra care on the design, and fully designed it in Figma before implementing it in code. I did user testing with the user experience as well, had about a dozen people test it",
        skills: [
            "Figma",
            "Swift",
            "iOS",
            "Python",
            "Django-REST",
        ],
        videos: ["https://youtu.be/IA7Hyt8vpjU?list=TLGG0K7V4eArQ3syODExMjAyMw"],
        photos: [l1,l2,l3],
        github: ["https://github.com/antonalley/lonomo_ios", "https://github.com/antonalley/lonomo_api"],
    },
    {
        title: "Needs First: Hackathon Full-stack application",
        short_description: "",
        description: "Along with a product manager, Devin Jernigan, and a designer, Cedric Lancy, and I as the engineer, we created this application under 8 hours for a competition to get into the Sandbox program at BYU. The idea behind it was a marketplace to rent out medical equipment, so I created a live linux server running react on the front end, and Django-rest on the backend to create this interactive website.",
        skills: [
            "Python",
            "JavaScript",
            "React",
            "Django-REST",
            "Linux Server",
        ],
        videos: ["https://youtu.be/p1EzpTzQTmU?si=KfNawTb8x2x8KARF"],
        photos: [nf1, nf2],
        github: ["https://github.com/antonalley/NeedsFirst"],
    },
    {
        title: "Snakes AI: Genetic Algorithm Machine Learning",
        short_description: "",
        description: "I did this project when I first learned about machine learning. I got really excited about neural networks, and I wanted to figure everything out about them that I could. Being a novice programmer, I wanted to do it all without any external machine learning libraries, so I did it from scratch. I had to use linear algebra for the neural network, but the backpropigation techiniques were over my head at this point, so that's why I looked into genetic algorithms. It is definetly not the most effective, as you can see in the video it doesn't get super far. But at the same time it was really cool because I didn't program any stragegy or rules into it, all it took into account was the state of the board, and the neural network trained simply by a random genetic algorithm thousands of time overnight on my old janky laptop, and it learned as much as it did. Even though not super impressive, this project got me really excited about machine learning and its possibilities. The graph shows an example of the fitness over epochs of training.",
        skills: [
            "Python",
            "Machine Learning",
        ],
        videos: ["https://youtu.be/CZDHCbbDORQ?si=1J7-4bLcM-gDKLTI"],
        photos: [snakes1],
        github: ["https://github.com/antonalley/SNAKES-AI"],
    }
]

export function Projects(){
    const [selected, setSelected] = useState<tProject>(null);

    return (
        <div className="projects">
            <div className="projects-list">
                {projects_list.map(project => (
                    <div className="project-container" onClick={()=>setSelected(project)}>
                        <div className="project-title">
                            {project.title}
                        </div>
                        <div className="project-skills">
                            {project.skills.map((skill) => (
                                <div className="skill">{skill}</div>
                            ))}
                        </div>
                        {chevron}
                    </div>
                ))}
                <div className="project-container" style={{width:'40vh'}}></div>
            </div>
            <div className={`project-detail ${selected!==null ? 'open' : ''}`}>
                <div className="closer" onClick={()=>setSelected(null)}>CLOSE</div>
                <div className="pdisplay-title">{selected?.title}</div>
                <div className="pdisplay-github"><a href={selected?.github[0]} target="_blank">Github Repository</a></div>
                <div className="pdisplay-description">{selected?.description}</div>
            </div>
        </div>
    )
}