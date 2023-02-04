import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function handleLogout(Navaigate) {
  localStorage.clear();
  Navaigate("/admin-login");
}
function Dashboard() {
  const Navaigate = useNavigate();
  return (
    <div>
      <button onClick = {() => handleLogout(Navaigate)}> Logout</button> 
    </div>
  )
}

export default Dashboard
