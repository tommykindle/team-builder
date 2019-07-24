import React from 'react';

export default function TeamMemberForm() {

  return (
    <form>
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

          />
        </div>
        <div className='form-item'>
          <label for='inputRole'>Role</label>
          <input
            type='text'
            className='control'
            name='role'
            placeholder='Role'

          />
        </div>
        <button type='submit' className='submit-btn'>
          Submit
        </button>
      </fieldset>
    </form>
  )

}