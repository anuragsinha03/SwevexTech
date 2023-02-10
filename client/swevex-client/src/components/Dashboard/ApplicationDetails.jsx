import React, { useEffect, useState } from 'react'
import { deleteCarrierApplyDetails, getCarrierApplyDetails } from '../../api/endpointApi';
import DashboardNavbar from './DashboardNavbar'


function ApplicationDetails() {
    const [carrierApplyDetails, setCarrierApplyDetails] = useState([]);
    useEffect(() => {
        getCarrierApplyDetails().then((response) => {
            setCarrierApplyDetails(response.data.Details.reverse());
        });
    }, []);

    const handleDelete = (id) => {
        deleteCarrierApplyDetails(id).then((response) => {
            setCarrierApplyDetails(carrierApplyDetails.filter((val) => {
                return val._id != id;
            }))
        }).catch((err) => {
            console.log(err);
        })

    }
    return (
        <div>
            <div>
                <div className='dasboard-container | h-[100vh] max-width-container'>
                    <DashboardNavbar />
                    <div className='main-content h-[85%]'>
                        <table className="table-fixed w-full">
                            <thead>
                                <tr className="bg-[#c9c9c9] text-[10px] md:text-[16px]">
                                    <th class="border border-slate-600  ">NAME</th>
                                    <th class="border border-slate-600 ">EMAIL</th>
                                    <th class="border border-slate-600 ">PHONE</th>
                                    <th class="border border-slate-600 ">JOB ROLE</th>
                                    <th class="border border-slate-600 ">RESUME</th>
                                    <th class="border border-slate-600 ">DELETE</th>
                                </tr>
                            </thead>
                        </table>
                        <div className="table-contents | h-full overflow-y-auto border-[1px] border-black ">
                            {carrierApplyDetails.map((value) => {
                                const { _id, name, email, phone, jobRole, resume } = value

                                var base64String = btoa(
                                    new Uint8Array(resume.data.data)
                                        .reduce((data, byte) => data + String.fromCharCode(byte), '')
                                );
                                return (
                                    <table class="table-fixed border-fixed border border-slate-500 w-full">
                                        <tbody>
                                            <tr className="bg-[#ececec] text-[10px] md:text-[16px]">
                                                <td class="border border-slate-700 break-words">{name}</td>
                                                <td class="border border-slate-700 break-words">{email}</td>
                                                <td class="border border-slate-700 break-words">{phone}</td>
                                                <td class="border border-slate-700 break-words">{jobRole}</td>
                                                <td class="border border-slate-700 break-words"><a download="resume" href={`data:${resume.contentType};base64,${base64String}`} > download </a></td>
                                                <td class="border border-slate-700 break-words"><button onClick={() => handleDelete(_id)}>X</button></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}



export default ApplicationDetails
