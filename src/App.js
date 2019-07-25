import React, { useState } from 'react';
import './App.scss';
import TeamMemberForm from './Form.js'


function App() {
  const [teamMembers, setTeamMembers] = useState([{}])
  return (
    <div className="App">
      <TeamMemberForm setTeamMembers={setTeamMembers} />

      {JSON.stringify(teamMembers)}

    </div>
  );
}

export default App;
