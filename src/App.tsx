import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Skills } from './Skills';
import { Header } from './header';

function App() {
  const [selectedTab, setSelectedTab] = useState("Skills")

  return (
    <div className="App">
      <div className="main-body">
        <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
        {selectedTab==="Skills" ?
          <Skills />
        : <div style={{marginTop: "5em", color:'black'}}>Anton's porfolio is being developed, this page isn't finished</div>}
      </div>
    </div>
  );
}

export default App;
