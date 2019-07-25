import React, { useState } from 'react';



export default function TeamMemberForm(props) {

  const [teamMember, setTeamMember] = useState({ name: '', email: '', role: '' });

  function handleChange(event) {
    const addTeamMember = { ...teamMember, [event.target.name]: event.target.value };
    setTeamMember(addTeamMember);
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.setTeamMembers(teamMembers => [...teamMembers, teamMember])
    setTeamMember({ name: '', email: '', role: '' })
  }


  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>New Team Member</legend>
        <div className='form-row'>
          <label for='name'>
            Name
            <div className='form-col'>
              <input
                type='text'
                className='control'
                name='name'
                placeholder='Enter Team Member Name'
                value={teamMember.name}
                onChange={handleChange}
              />
            </div>
          </label>
        </div>
        <div className='form-item'>
          <label for='inputEmail'>Email address</label>
          <input
            type='email'
            className="control"
            name='email'
            placeholder='Enter email'
            value={teamMember.email}
            onChange={handleChange}
          />
        </div>
        <div className='form-item'>
          <label for='inputRole'>Role</label>
          <input
            type='text'
            className='control'
            name='role'
            placeholder='Role'
            value={teamMember.role}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </fieldset>
    </form>
  )

}