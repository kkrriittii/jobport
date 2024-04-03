import React, { useState } from 'react';

import './signup.css';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [role, setRole] = useState('seeker');
  const [showPopup, setShowPopup] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Role: ${role}, Username: ${username}`);
    // TODO: Implement login logic
  }

  const handleSwitchChange = (e) => {
    setRole(e.target.value);
    setShowPopup(true);
    setRegistrationSuccess(true);
    setTimeout(() => {
      setRegistrationSuccess(false);
  }, 3000);
  }

  const navigate = useNavigate();


  return (
    <div>
      {
    <div className="sign-up-container">
    <h1 className="sign-up-title">Welcome To JobGenie</h1>
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">

      <label className="form-label" htmlFor="username">Username</label>
      <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required className="form-input" />

     <label className="form-label" htmlFor="phone-number">Phone Number</label>
     <input type="text" id="phone-number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required className="form-input"/>

        <label className="form-label" htmlFor="email">Email</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-input" />

        <label className="form-label" htmlFor="password">Password</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-input" />

        <div className="role-container">
          <div className="switch-item">
            <input type="checkbox" id="switch-seeker" onChange={handleSwitchChange} value="seeker" checked={role === 'seeker'} className="switch-input" />
            <label htmlFor="switch-seeker" className="switch-label">Job Seeker</label>
          </div>
          <div className="switch-item">
            <input type="checkbox" id="switch-recruiter" onChange={handleSwitchChange} value="recruiter" checked={role === 'recruiter'} className="switch-input" />
            <label htmlFor="switch-recruiter" className="switch-label">Recruiter</label>
          </div>
        </div>
        <div>
            <form onSubmit={handleSubmit}><button type="submit" className="sign-up-button">Sign-Up</button>
            </form>
            </div>

  
        

      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-container">
            <h2 className="popup-title">Don't have an account?</h2>
            <p className="popup-content">
              {role === 'seeker' ? 'Sign Up as a Job Seeker to search for jobs, create job alerts, and get career advice.' : 'Sign Up as a Recruiter to post jobs, view resumes, and manage your company account.'}
            </p>
            <button className="popup-button" onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
      


      
    </div>
  </div>
}
  </div>
  )
}
