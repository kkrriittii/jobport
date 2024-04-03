import React, { useState } from 'react';

import './SignIn.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seeker');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email: ${email}, Password: ${password}, Role: ${role}`);
    // TODO: Implement login logic
  }

  const handleSwitchChange = (e) => {
    setRole(e.target.value);
    setShowPopup(true);
  }

  const navigate = useNavigate();

  return (
    <div> {
    <div className="sign-in-container">
      <h1 className="sign-in-title">Welcome To JobGenie</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
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

          <button type="submit" className="sign-in-button">Sign In</button>
          <button type="submit" className="sign-in-button" ><Link to="/signup">Register</Link></button>
        </form>

        {showPopup && (
          <div className="popup">
            <div className="popup-container">
              <h2 className="popup-title">Don't have an account?</h2>
              <p className="popup-content">
                {role === 'seeker' ? 'Sign In as a Job Seeker to search for jobs, create job alerts, and get career advice.' : 'Sign In as a Recruiter to post jobs, view resumes, and manage your company account.'}
              </p>
              <button className="popup-button" onClick={() => setShowPopup(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
}
    </div>
  
  );
}

export default SignIn;

