import React from 'react'
import DashboardNavbar from './DashboardNavbar'

function ContactDetails() {
    return (
        <div>
            <div className='dasboard-container | h-[100vh] max-width-container'>
                <DashboardNavbar />
                <div className='main-content border-2  h-[85%]'>
                    <div className="table-container | grid grid-flow-col mt-4 border-2">
                        <div className="name border-2 border-black text-center">name</div>
                        <div className="email border-2 border-black text-center">Email</div>
                        <div className="phone-no border-2 border-black text-center">Phone Number</div>
                        <div className="subject border-2 border-black text-center">Subject</div>
                        <div className="message border-2 border-black text-center">Message</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactDetails
