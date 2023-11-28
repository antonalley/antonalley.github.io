import { useEffect, useState } from 'react';
import './App.css';
import { Skills } from './Skills';
import { Header } from './header';
import { Work } from './work';
import LoadingComponent from './LoadingComponent';
import { Intro } from './Intro';
import { Projects } from './Projects';

function App() {
  const [selectedTab, setSelectedTab] = useState<String>(null)
  const [pageLoading, setPageLoading] = useState<Boolean>(true);

  useEffect(()=> {
    if (!pageLoading){
          // Step 4: Set a timer
      const timer = setTimeout(() => {
        setSelectedTab("Intro"); // Update the state after 2 seconds
      }, 2000);

      // Step 5: Cleanup the timer
      return () => clearTimeout(timer);
    }
  }, [pageLoading])

  if (pageLoading){
    return (
      <LoadingComponent onLoaded={() => setPageLoading(false)} />
    )
  }

  

  return (
    <div className="App">
      <div className="main-body">
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        {selectedTab==="Skills" ?
          <Skills />
        : selectedTab=="Work Experience" ? 
        <Work /> 
        : selectedTab=="Intro" ?
        <Intro />
        : selectedTab=="Projects" ?
        <Projects />
        :<></>}
      </div>
    </div>
  );
}

export default App;
