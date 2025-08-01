import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [intern, setIntern] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5001/api/intern')
      .then(res => setIntern(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!intern) return <p>Loading...</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Welcome, {intern.name}</h2>
      <p>Referral Code: <strong>{intern.referralCode}</strong></p>
      <p>Total Donations Raised: ₹{intern.donations}</p>

      <h3>🏱 Rewards</h3>
      <ul>
        <li>🔓 Basic Certificate</li>
        <li>🔓 T-shirt (Unlocked at ₹5,000)</li>
        <li>🔒 Amazon Voucher (Unlocked at ₹10,000)</li>
      </ul>

      <Link to="/leaderboard">View Leaderboard</Link>
    </div>
  );
}

export default Dashboard;