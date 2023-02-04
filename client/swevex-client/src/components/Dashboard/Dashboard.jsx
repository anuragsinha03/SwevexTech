import React from 'react'
import DashboardNavbar from './DashboardNavbar';


function Dashboard() {
  return (
    <div>

      <div className='dasboard-container | h-[100vh] max-width-container'>
        <DashboardNavbar />
        <div className='main-content border-2 grid place-content-center h-[85%]'>
          <h1 className='Hello-Text | uppercase text-4xl'>hello, admin</h1>
        </div>

      </div>
    </div>

  )
}

export default Dashboard
