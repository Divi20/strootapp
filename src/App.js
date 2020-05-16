import React from 'react';
import './App.css';
import FirstPage from './components/FirstPage';
import Introduction from './components/Introduction'
import CostandEstimates from './components/CostandEstimate'
import FBPlan from './components/FBPlan'
function App() {
  return (
    <div className="App">
    <FirstPage></FirstPage>
    <Introduction></Introduction>
    <CostandEstimates></CostandEstimates>
    <FBPlan></FBPlan>
    </div>
  );
}

export default App;
