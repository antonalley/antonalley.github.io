import { useEffect, useLayoutEffect, useState } from "react"
import "./Header.css"

export function Header({ selectedTab, setSelectedTab }){
    return (
        <div className="header">
            <span className={`page-button ${selectedTab=="Skills" && "selected"}`}
                onClick={()=>setSelectedTab("Skills")}>Skills</span>
            <span className={`page-button ${selectedTab=="Work Experience" && "selected"}`}
                onClick={()=>setSelectedTab("Work Experience")}>Work Experience</span>
            <span className="header-name">Anton Alley</span>
            <span className={`page-button ${selectedTab=="Projects" && "selected"}`}
                onClick={()=>setSelectedTab("Projects")}>Projects</span>
            <span className={`page-button ${selectedTab=="Personal" && "selected"}`}
                onClick={()=>setSelectedTab("Personal")}>Personal</span>
        </div>
    )
}