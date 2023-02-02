import React from "react";
import ServiceCard from "./ServiceCard";
import '../../css/home-css/services.css'

function Services(){
    return(
        <div>
            <div className="flex justify-center ">
                <span className="services-border | relative font-medium text-2xl mt-4">OUR SERVICES</span> 
            </div>
            <ServiceCard />
        </div>
    )
}

export default Services;