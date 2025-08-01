import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5001/api/leaderboard')
      .then(res => setLeaders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>🏆 Leaderboard</h2>
      <ol>
        {leaders.map((item, index) => (
          <li key={index}>{item.name} - ₹{item.donations}</li>
        ))}
      </ol>
    </div>
  );
}

export default Leaderboard;