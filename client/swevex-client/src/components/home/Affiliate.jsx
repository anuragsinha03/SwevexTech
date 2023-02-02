import React from "react";
import amazon from '../../images/amazon-logo.svg'
import moneytap from '../../images/moneytap-logo.svg'
import alibaba from '../../images/alibaba-logo.svg'
import thekabadi from '../../images/thekabadi-logo.svg'


function Affiliate(){
    return(
        <div className="max-width-container">
            <div className="flex justify-center ">
                <span className="services-border | relative font-medium text-2xl mt-8">AFFILIATE PARTNER</span> 
            </div>
            <div className="affiliate-div | grid place-items-center grid-cols-2 mb-4 md:grid-cols-4 md:mb-8">
                <img className="affiliate-img" src={amazon} alt="" />
                <img className="affiliate-img" src={moneytap} alt="" />
                <img className="affiliate-img" src={alibaba} alt="" />
                <img className="affiliate-img" src={thekabadi} alt="" />
            </div>
        </div>
    )
}

export default Affiliate;