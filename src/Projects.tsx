import { useState } from "react";
import bp1 from "./images/byepolar-choose-side-4-4-23.png"
import bp2 from "./images/byepolar-home-4-4-23.png"
import l1 from "./images/lonomo_event.png"
import l2 from "./images/lonomo_home.png"
import l3 from "./images/lonomo_login.png"
import nf1 from "./images/Needs-first-home.png"
import nf2 from "./images/Needs-first-buy.png"
import sl1 from "./images/service-leap-cal.png"
import sl2 from "./images/service-leap-calc.png"
import sl3 from "./images/service-leap-home.png"
import sl4 from "./images/service-leap-join.png"
import sl5 from "./images/service-leap-login.png"
import sl6 from "./images/service-leap-set.png"
import sl7 from "./images/service-leap-timeline.png"
import sl8 from "./images/service-leap-top.png"
import tw1 from "./images/tweeter1.png"
import tw2 from "./images/tweeter2.png"
import tw3 from "./images/tweeter3.png"
import tw4 from "./images/tweeter4.png"
import tw5 from "./images/tweeter5.png"
import tw6 from "./images/tweeter6.png"
import snakes1 from "./images/fitness5000smalltall.png"
import githublogo from "./images/GitHub_Logo.png"
import "./Projects.css"

type tProject = {
    title: string,
    short_description: string,
    description: string,
    tech?: string,
    skills: Array<any>,
    links?: Array<string>,
    media: Array<string>,
    github: Array<any>,
    embedding?: string,
}

const right_chevron = <svg className="chevron" xmlns="http://www.w3.org/2000/svg" height="1.6em" width="1em" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
const close_icon = <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" fill="var(--slate)" viewBox="0 0 16 16">
    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
    </svg>

const projects_list: Array<tProject> = [
    {
        title: "Nest Savings",
        short_description: "UI Designs and start coding a financial savings app",
        description: ``,
        tech: ``,
        skills: [
            'Figma',
            'User Tests',
            'Design',
            'Supabase',
            'React Native',
            'PostgreSQL',
        ],
        links: [],
        media: [],
        github: [],
        embedding: "https://embed.figma.com/design/O7ZtHIsPF9xLJgwCSGcif2/Nest-Savings-v2?node-id=108-66&embed-host=share",
    },
    {
        title: "Twitter Clone",
        short_description: "School Project Software Design",
        description: `
            Code was given to us for the UI. In this project we heavily focused on good software design.
            Some Patterns that were used include the Model-View-Presenter, Facade, Inheritance, Delegation,
            Strategy, Dependency Inversion, and Abstract Factory. It was a great way to use best practices
            in terms of designing a whole system. We also implemented from scratch and got proficient at
            several AWS services as listed in skills.`,
        tech: `
        This was a great opportunity to learn best practices in software design, and how to make educated
        decisions when creating the design. Also got a lot of practice with some AWS services, and I feel
        confident in my skills to implement them in other projects. Another notable accomplishment was our
        use of SQS to speed up the user experience. We had to post a story to 10,000 of the user's followers
        and have it seem really fast for the author, and post in 120 seconds for the other users. This was
        great practice for a real world situation to make a project more scalable. Another notable skill
        was designing this code so that it can be testable, and writing some unit tests for it.`,
        skills: [
            "React",
            "Typescript",
            "AWS",
            "DynamoDB",
            "IAM",
            "API Gateway",
            "Lambda",
            "SQS",
            "Node.js",
            "Software Design",
            "Unit Testing"
        ],
        media: [tw1, tw2, tw3, tw4, tw5, tw6],
        github: []
    },
    {
        title: "Rooster",
        short_description: "Facial Recognition to Prevent Shoplifting",
        description: `
        I worked many hours on Rooster for several months as part of the Sandbox Program at BYU. We were really trying to start a business, and 
        although I am not on the team any more, it is still being worked on. We had a product manager, Devin, and then Spencer and I on the
        engineering side. The premise was creating a facial-recognition system to alert store managers when there is a repeat shoplifter
        walking into their store, so they can prevent them from stealing again.
        `,
        tech: `
        The majority of this project Spencer and I were working in Python and using a couple open-source libraries to try to get the facial-
        recognition working, accurate, and fast. Out of the box, the open source libraries (DeepFace) were not enough for our project. We
        did a lot of testing to choose the most accurate and fastest machine learning models. We also ran the program on a an on-premises
        Raspberry-Pi or Jetson Nano in order to save on cost. To keep track of devices, we had a logging system, and a central database 
        hosted with Supabase. My main contribution to the team was setting up the system for using DeepFace to repeatedly capture faces
        and compare them to faces in the database to see if they are on the watchlist.
        `,
        skills: [
            "Python",
            "Open-Source",
            "Linux",
            "Supabase",
            "Raspberry Pi",
            "Jetson Nano",
            "Docker",
            "Resend",
        ],
        media: [],
        github: ["https://github.com/Rooster-AI"],
    },
    {
        title: "Service Leap",
        short_description: "React-Native CRM for window washers",
        description: `
        Worked on a startup for the BYU Sandbox program. This was our business idea for a couple months before we lost traction. We wanted to 
        create a custom CRM for window washers as a mobile app.
        `,
        tech: `
        Mobile app built in React Native. Started to work on mobile payment processing tools with Stripe. Also build a landing page where
        users could sign up, and started to work on creating a Stripe Connected account so businessess could setup their own account and
        receive payments, while being connected to ours.
        `,
        skills: [
            "React-Native",
            "React",
            "Stripe"
        ],
        links: ["https://service-leap-prod.web.app/"],
        media: [sl1, sl2, sl3, sl5, sl6,sl4, sl7, sl8],
        github: ["https://github.com/antonalley/leap-landing-page/tree/main"],
    },
    {
        title: "My Portfolio Website",
        short_description: "This is what you are looking at right now.",
        description: `
        I've been interested in design for a while now, especially since I took a UI/UX Design class at BYU. A lot of my other projects have been pretty focused on functionality, so I wanted to put in extra effort to design my portfolio beautifully.
        `,
        tech:  "A React build hosted on Github Pages, 100% custom css",
        skills: [
            "React",
            "CSS",

        ],
        media: [],
        github: ["https://github.com/antonalley/antonalley.github.io"],
    },
    {
        title: "Byepolar.tv",
        short_description: "React.js and Firebase App",
        description: "Byepolar.tv is a web app that I am currently developing with Devin Jernigan as the Product Manager. It is a place for people to come together and discuss typically contreversial topics in a way that they can see all sides of the argument and gain trust and respect for other people.",
        tech: "It is the first time that I have used firebase, and it has proved to be very useful, as I am using the realtime database, authentication, and hosting from it. I also learned how to use github actions to automatically deploy updates to the production site as I pull request them into the Production Branch, which has been really cool to use. The hardest part about this project is video call, because we are trying to get people to discuss online through video call, and it is difficult to do this when we want to do it in a very customized way, and on a tight budget(zero).",
        skills: [
            "Figma",
            "React",
            "Firebase",
            "WebRTC",
            "Peer to Peer Video Call",
            "CI/CD"
        ],
        media: [bp1, bp2],
        github: ["https://github.com/antonalley/byepolar_react"],
    },
    {
        title: "Lonomo",
        short_description: "Swift iOS mobile development",
        description: "Lonomo was project I was working on for a few months fall 2022. I wanted to create a social event app to help people make more friends doing hobbies they love to do. I learned swift from scratch for this project, and learned how to connect it to the backend, which I created using the Django-rest framework in python, complete with authentication and api endpoints. I was also in a user experience course while I was designing this app, so I spent extra care on the design, and fully designed it in Figma before implementing it in code. I did user testing with the user experience as well, had about a dozen people test it",
        skills: [
            "Figma",
            "Swift",
            "iOS",
            "Python",
            "Django-REST",
        ],
        media: ["https://www.youtube.com/embed/IA7Hyt8vpjU?mute=1&autoplay=1&playlist=IA7Hyt8vpjU&loop=1", l1,l2,l3],
        github: ["https://github.com/antonalley/lonomo_ios", "https://github.com/antonalley/lonomo_api"],
        embedding: "https://embed.figma.com/design/MIEsTy6jcSp2YDGSBOzIiI/Lonomo-Mobile?node-id=0-1&embed-host=share",
    },
    {
        title: "Needs First",
        short_description: "Hackathon Full-stack application",
        description: "Along with a product manager, Devin Jernigan, and a designer, Cedric Lancy, and I as the engineer, we created this application under 8 hours for a competition to get into the Sandbox program at BYU. The idea behind it was a marketplace to rent out medical equipment, so I created a live linux server running react on the front end, and Django-rest on the backend to create this interactive website.",
        tech: "This is to be done soon",
        skills: [
            "Python",
            "JavaScript",
            "React",
            "Django-REST",
            "Linux Server",
        ],
        media: ["https://www.youtube.com/embed/p1EzpTzQTmU?mute=1&autoplay=1&playlist=p1EzpTzQTmU&loop=1", nf1, nf2],
        github: ["https://github.com/antonalley/NeedsFirst"],
    },
    {
        title: "Snakes AI",
        short_description: "Genetic Algorithm Machine Learning",
        description: "I did this project when I first learned about machine learning. I got really excited about neural networks, and I wanted to figure everything out about them that I could. Being a novice programmer, I wanted to do it all without any external machine learning libraries, so I did it from scratch. I had to use linear algebra for the neural network, but the backpropigation techiniques were over my head at this point, so that's why I looked into genetic algorithms. It is definetly not the most effective, as you can see in the video it doesn't get super far. But at the same time it was really cool because I didn't program any stragegy or rules into it, all it took into account was the state of the board, and the neural network trained simply by a random genetic algorithm thousands of time overnight on my old janky laptop, and it learned as much as it did. Even though not super impressive, this project got me really excited about machine learning and its possibilities. The graph shows an example of the fitness over epochs of training.",
        skills: [
            "Python",
            "Machine Learning",
        ],
        media: ["https://www.youtube.com/embed/CZDHCbbDORQ?mute=1&autoplay=1&playlist=CZDHCbbDORQ&loop=1", snakes1],
        github: ["https://github.com/antonalley/SNAKES-AI"],
    }
]

const right_media = <svg xmlns="http://www.w3.org/2000/svg" fill="var(--black)" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                    </svg>

const left_media = <svg xmlns="http://www.w3.org/2000/svg" fill="var(--black)" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                    </svg>



export function Projects({instructions}){
    const [selected, setSelected] = useState<tProject>(null);
    const [imgIndex, setImgIndex] = useState<number>(0);


    return (
        <div className={`projects ${instructions}`}>
            <div className="projects-list">
                {projects_list.map(project => (
                    <div className={`project-container ${selected?.title===project.title && 'selected'}`} onClick={()=>{setSelected(project); setImgIndex(0)}}>
                        <div className="project-title">
                            {project.title}
                        </div>
                        <div className="project-skills">
                            {project?.skills?.map((skill) => (
                                <div className="skill">{skill}</div>
                            ))}
                        </div>
                        {right_chevron}
                    </div>
                ))}
                <div className="project-container" style={{width:'40vh'}}></div>
            </div>
            <div className={`project-detail ${selected!==null ? 'open' : ''}`}>
                <div className="closer" onClick={()=>setSelected(null)}>{close_icon}</div>
                <div className="pdisplay-title-container">
                    <div className="pdisplay-title">{selected?.title}</div>
                    <div className="pdisplay-short"><em>"{selected?.short_description}"</em></div>
                </div>
                <div className="pdisplay-github">
                    {selected?.github.map(glink => (
                        <a href={glink} target="_blank"><img src={githublogo}></img></a>
                    ))}
                        
                </div>
                <div className="pdisplay-description">
                    <h3>Project Description</h3>
                    {selected?.description}
                </div>
                <div className="pdisplay-description">
                    <h3>Technology Overview</h3>
                    {selected?.tech}
                    <div className="project-skills">
                        {selected?.skills?.map(skill => (
                            <div className="skill">{skill}</div>
                        ))}
                    </div>
                </div>
                <div className="pdisplay-description">
                    <h3>Figma Designs</h3>
                    {selected?.embedding ? 

                        <iframe 
                            style={{border: '1px solid rgba(0, 0, 0, 0.1)'}} 
                            width="800" 
                            height="450" 
                            src={selected.embedding} 
                            allowFullScreen>
                            </iframe>
                    
                    
                    : <></>}
                    
                </div>
                {selected?.media.length > 0 &&
                <div className="pdisplay-media">
                    <h3>Project Media</h3>
                    <div className="pd-media-view">
                        <div className="arrow-container left" onClick={()=>setImgIndex(c=>Math.max(0,c-1))}>
                            <div className="arrow move-left">
                                {left_media}
                            </div>
                        </div>
                        <div className="arrow-container right" onClick={()=>setImgIndex(c=>Math.min(c+1, selected?.media.length - 1))}>
                            <div className="arrow move-right">
                                {right_media}
                            </div>
                        </div>
                        {selected?.media.map((photo, i) => {
                            let status: string;
                            if (Math.abs(imgIndex - i) >= 2){
                                status = "hidden"
                            } else if (Math.abs(imgIndex - i) == 0 ){
                                status = "center"
                            } else if (imgIndex-i == 1){
                                status = "left sub"
                            } else if (imgIndex-i == -1){
                                status = "right sub"
                            }
                            return (
                            <div className={`pdisplay-img ${status}`}>
                                {photo.includes("youtube") ?
                                <iframe
                                src={photo}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen                             
                                ></iframe> :
                                <img src={photo} />
                                }
                            </div>
                            
                        )})}
                    </div>
                </div>
                }
            </div>
        </div>
    )
}