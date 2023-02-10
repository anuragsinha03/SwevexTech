import React, { useEffect, useState } from "react";
import { getContactDetails } from "../../api/endpointApi";
import DashboardNavbar from "./DashboardNavbar";
import TableContent from "./TableContent";

function ContactDetails() {
  const [contactDetails, setContactDetails] = useState([]);
  useEffect(() => {
    getContactDetails().then((response) => {
      setContactDetails(response.data.Details.reverse());
    });
  }, []);

  return (
    <div>
      <div className="dasboard-container | h-[100vh] max-width-container">
        <DashboardNavbar />
        <div className="main-content h-[70%] ">
          <table className="table-fixed w-full">
            <thead>
              <tr className="bg-[#c9c9c9] text-[10px] md:text-[16px]">
                <th class="border border-slate-600  ">NAME</th>
                <th class="border border-slate-600 ">EMAIL</th>
                <th class="border border-slate-600 ">PHONE</th>
                <th class="border border-slate-600 ">SUBJECT</th>
                <th class="border border-slate-600 ">MESSAGE</th>
              </tr>
            </thead>

          </table>
          <div className="table-contents | h-full overflow-y-auto border-[1px] border-black ">
            {contactDetails.map((value) => {
              return <TableContent value={value} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactDetails;
