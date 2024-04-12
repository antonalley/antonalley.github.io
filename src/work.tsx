import "./work.css"
import Cisco from "./icons/cisco.svg"
import BYU from "./icons/BYU.svg"
import Sandbox from "./icons/sandbox.png"
import Provo from "./icons/provo.png"
import Church from "./icons/churchlogo.png"
import Eagle from "./icons/eaglescout.png"
import { useState } from "react"


type tWork = {
    "time":  string,
    "title":  string,
    "short_description":  string,
    "long_description": string,
    "skills": Array<string>,
    "logo": string
}

const revelant: Array<tWork> = [
    {
        "time": "JUNE 2023 – PRESENT",
        "title": "GIS Software Intern / Provo City Public Works",
        "short_description": "Coding and scheduling python scripts to maintain GIS databases of the city. Creating a website with React to host internally for the city to view the projects and updates of the GIS department.",
        "long_description":"",
        "skills": [
            "GIS",
            "Python",
            "PostgreSQL",
            "SQL",
            "node.js",
            "React"
        ],
        "logo": Provo,
    },
    {
        "time": "MAY 2022 – PRESENT",
        "title": "Co-Founder, Software Developer / BYU Sandbox Program",
        "short_description": "Got accepted into a year-long startup incubator program at BYU, and currently a part of it. Works with a chosen team on creating a SaaS Business. Builds product from scratch. Sells to people. Pitches to Investors",
        "long_description":"",
        "skills": [
            "React",
            "AWS",
            "Firebase",
            "s3",
            "css",

        ],
        "logo": Sandbox
    },
    {
        "time": "MAY 2022 – APRIL 2023",
        "title": "Consulting Software Engineer Intern / Cisco Systems, Inc.",
        "short_description": "Developed a full-stack web application with React and Django-Rest. Creating API endpoints. Working with a team in an agile-like environment to meet the needs of various customers.",
        "long_description":"",
        "skills": [
            "React.js",
            "Django-REST",
            "Docker",
            "CSS",
            "Google Maps"
        ],
        "logo": Cisco
    },
    {
        "time": "JANUARY 2022 – MAY 2022",
        "title": "Computer Vision Research Assistant / BYU",
        "short_description": "Implemented computer vision tactics for digitizing hundreds of thousands of genealogy records. Used BYU’s supercomputer to process big data.",
        "long_description":"",
        "skills": [
            "Python",
            "Detectron 2",
            "Linux",
            "Batch Files"
        ],
        "logo": BYU
    },
    // {
    //     "time": "",
    //     "title": "",
    //     "short_description": "",
    //     "long_description":"",
    //     "skills": []
    // }
    
]

const other: Array<tWork> = [
    {
        "time": "Jan-May 2019, Aug 2021 - Jan 2022",
        "title": "BYU Commissary Receiver",
        "short_description": "Internally Hauling, receiving, and delivering more than $10k worth of foodservice product daily",
        "long_description":"",
        "skills": [
            "communication",
            "proactive",
            "Requisitions",
            "Purchase Orders"
        ],
        "logo": BYU
    },
    {
        "time": "Jun-Aug 2021",
        "title": "Painter",
        "short_description": "Painted the Interior of Apartments for a couple of months. Supervisor only knew Spanish, so had to communicate in different ways. Good exposure to the Contracting world",
        "long_description":"",
        "skills": [
            "communication",
            "hard-work",
            "painting",
        ],
        "logo": ""
    },
    {
        "time": "May-Aug 2018",
        "title": "General Contractor Apprentice",
        "short_description": "An apprentice for a General Contractor working on Rental Properties",
        "long_description":"",
        "skills": [
            "long-hours",
            "hard-work",
            "tenant-interaction"
        ],
        "logo": ""
    }

]

const personal: Array<tWork> = [
    {
        "time": "2019-2021",
        "title": "Missionary for The Church of Jesus Christ of Latter-Day Saints",
        "short_description": "In the span of two years, I spent time away from my education and family, and went to volunteer abroad in Montreal, Canada area to serve a mission and preach the gospel. It started out with a 6 week intensive program to start to learn French, and learn how to teach people the materials we had. Then for the rest of the two years I was talking to as many people as I could in every way possible, including door knocking, talking to people on the streets, and online. We found people to teach. I worked closely with an assigned companion at all times, so I had to learn how to co-operate and work really well with other people. I served in several leadership positions, including financial secretary of the mission where I had to manage all the money spent in the mission, the budget, and paying landlords, etc.",
        "long_description":"",
        "skills": [
            "collaboration",
            "planning",
            "teaching",
            "leads generation",
            "communication",
            "sales",
            "leading meetings",
            "accounting basics",
            "brand identity",
            "calls"
        ],
        "logo": Church
    },
    {
        "time": "2014-2018",
        "title": "Eagle Scout",
        "long_description": "",
        "short_description":"I participated in scouts as a young man, and went on a lot of adventures and had a lot of fun, but also learned a lot of skills. I learned how to learn when I sought merit badges. I learned leadership skills when I was in leadership positions in scouts where I directed meetings, led planning outings, and discussed needs of members of the troop. To get the Eagle Scout Award, I had to complete a service project that I planned and organized. We build some turtle shelters for the local nature preserve. I learned how to get funds, purchase the appropriate materials, and delegate people to do certain tasks.",
        "skills": [
            "planning",
            "coordinating",
            "calls"
        ],
        "logo": Eagle
    },
    {
        "time": "2014-2018",
        "title": "Cross Country and Track in High School",
        "short_description": "In high school, I was very involved in the cross-country and track teams. I learned how to work hard and perservere through difficulty to accomplish something great",
        "long_description":"",
        "skills": [
            "hard work",
            "endurance",
            "determination"
        ],
        "logo": ""
    }

]

export function Work({instructions}){
    const [typeSelected, setType] = useState<"revelant" | "other" | "personal">("revelant")

    function getWork(): Array<tWork>{
        if (typeSelected=="revelant"){ return revelant}
        else if (typeSelected=="other"){return other}
        else {
            return personal
        }
    }
    return (
        <div className={`work-container ${instructions}`}>
            
            <div className="experience-list-container">
                <div className="toggles">
                    <div className={`toggle-option ${typeSelected==="revelant" && "selected"}`} onClick={() => setType("revelant")}>Relevant Experience</div>
                    <div className={`toggle-option ${typeSelected==="other" && "selected"}`} onClick={() => setType("other")}>Other Work Experience</div>
                    <div className={`toggle-option ${typeSelected==="personal" && "selected"}`} onClick={()=>setType("personal")}>Personal Accomplishments</div>
                </div>
                <div className="experience-list">
                    {getWork().map(job => (
                        <div className="job">
                            <div className="job-icon">
                                <img src={job.logo} />
                            </div>
                            <div className="job-words">
                                <div className="time">{job.time}</div>
                                <div className="job-title">{job.title}</div>
                                <div className="short-description">{job.short_description}</div>
                                <div className="skills-display">
                                    {job.skills.map(skill => (
                                        <div className="skill-icon">
                                            {skill}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="job" style={{height:'50vh'}}>

                    </div>
                </div>
            </div>
        </div>
    )
}