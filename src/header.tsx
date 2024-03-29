import "./Header.css"

export function Header({ selectedTab, setSelectedTab }){
    return (
        <div className="header">
            <span className={`page-button ${selectedTab==0 && "selected"}`}
                onClick={()=>setSelectedTab(0)}>Skills</span>
            <span className={`page-button ${selectedTab==1 && "selected"}`}
                onClick={()=>setSelectedTab(1)}>Work Experience</span>
            <span className="header-name"
                onClick={()=>setSelectedTab(2)}>Anton Alley</span>
            <span className={`page-button ${selectedTab==3 && "selected"}`}
                onClick={()=>setSelectedTab(3)}>Projects</span>
            <span className={`page-button ${selectedTab==4 && "selected"}`}
                onClick={()=>setSelectedTab(4)}>Personal</span>
        </div>
    )
}