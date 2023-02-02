import React from "react";
import Navbar from "../home/Navbar";
import serviceshero from '../../images/services-hero.svg'
import ServiceCard from "../home/ServiceCard";
import Footer from '../home/Footer'
function Services(){
    return(
        <div>
            <Navbar page='services' />
            <img className='w-full' src={serviceshero} alt="" />
            <div className="flex justify-center ">
                <span className="services-border | relative font-medium text-2xl mt-4">OUR SERVICES</span> 
            </div>
            <ServiceCard />
            <Footer />
        </div>

        
    )
}

export default Services