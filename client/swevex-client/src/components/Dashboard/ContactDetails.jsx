import React, { useEffect, useState } from 'react'
import { getContactDetails } from '../../api/endpointApi'
import DashboardNavbar from './DashboardNavbar'
import TableContent from './TableContent'

function ContactDetails() {
    const [contactDetails, setContactDetails] = useState()
    useEffect(() => {
        getContactDetails().then(response => console.log(response));
    })
    return (
        <div>
            <div className='dasboard-container | h-[100vh] max-width-container'>
                <DashboardNavbar />
                <div className='main-content h-[70%] '>
                    <div className="table-container | grid grid-flow-col mt-4">
                        <div className="name border-2 border-black text-center">name</div>
                        <div className="email border-2 border-black text-center">Email</div>
                        <div className="phone-no border-2 border-black text-center">Phone Number</div>
                        <div className="subject border-2 border-black text-center">Subject</div>
                        <div className="message border-2 border-black text-center">Message</div>
                        <div className="message border-2 border-black text-center">Delete</div>
                    </div>
                    <div className="table-contents | h-full overflow-y-auto border-[1px] border-black mt-4">
                        <TableContent />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactDetails
