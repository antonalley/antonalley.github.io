import { useEffect, useState } from 'react';
import './App.css';
import { Skills } from './Skills';
import { Header } from './header';
import { Work } from './work';
import LoadingComponent from './LoadingComponent';
import { Intro } from './Intro';
import { Projects } from './Projects';
import Personal from './Personal';

function App() {
  const [selectedTab, setSelectedTab] = useState<number>(2)
  const [pageLoading, setPageLoading] = useState<boolean>(true);

  useEffect(()=> {
    if (!pageLoading){
          // Step 4: Set a timer
      const timer = setTimeout(() => {
        setSelectedTab(2); // Update the state after 2 seconds
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
        <div className='tab-container'>
          <Skills instructions={`tab view${100*(0-selectedTab)}`}/>
          <Work instructions={`tab view${100*(1-selectedTab)}`}/> 
          <Intro instructions={`tab view${100*(2-selectedTab)}`}/>
          <Projects instructions={`tab view${100*(3-selectedTab)}`}/>
          <Personal instructions={`tab view${100*(4-selectedTab)}`}/>
        </div>
      </div>
    </div>
  );
}

export default App;
