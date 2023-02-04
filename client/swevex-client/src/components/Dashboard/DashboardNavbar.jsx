import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function handleLogout(Navaigate) {
    localStorage.clear();
    Navaigate("/admin-login");
}
function DashboardNavbar() {

    const Navaigate = useNavigate();
    return (
        <div>
            <div className='Dashboard-Navbar | flex border-2 justify-between border-black p-5 items-center'>
                <div><Link to="/admin-dashboard">Logo</Link></div>
                <div className='cta | flex gap-5 items-center'>
                    <div className='application-details'>
                        <Link to="/application-Details" className=""> Application Details</Link>
                    </div>
                    <div className='Contact-details'>
                        <Link to="/contact-Details" className=""> Cotanct Details</Link>
                    </div>
                    <div className='logout-cta'>
                        <button className="text-white px-4 py-1 bg-[#0894DE]" onClick={() => handleLogout(Navaigate)}> Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardNavbar
