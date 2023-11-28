import "./work.css"
import Cisco from "./icons/cisco.svg"
import BYU from "./icons/BYU.svg"
import Sandbox from "./icons/sandbox.png"
import Provo from "./icons/provo.png"
import { useState } from "react"



const experience = [
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

export function Work(){
    const [revelant, setRevelant] = useState(true);
    const [other, setOther] = useState(false);
    const [personal, setPersonal] = useState(false);
    return (
        <div className="work-container">
            
            <div className="experience-list-container">
            <div className="toggles">
                <div className={`toggle-option ${revelant && "selected"}`} onClick={() => setRevelant(c=>!c)}>Relevant Experience</div>
                <div className={`toggle-option ${other && "selected"}`} onClick={() => setOther(c=>!c)}>Other Work Experience</div>
                <div className={`toggle-option ${personal && "selected"}`} onClick={()=>setPersonal(c=>!c)}>Personal Accomplishments</div>
            </div>
            <div className="experience-list">
                {experience.map(job => (
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