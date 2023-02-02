import React from "react";
import facebook from '../../images/facebook-logo.svg'
import linkedin from '../../images/linkedin-logo.svg'
import whatsapp from '../../images/whatsapp-logo.svg'
import instagram from '../../images/instagram-logo.svg'
import twitter from '../../images/twitter-logo.svg'

function Connect(){
    return(
        <div>
            <section className="">
                <div className="flex justify-center ">
                    <span className="services-border | relative font-medium text-2xl my-4 text-black ">CONNECT WITH US</span> 
                </div>
                <div className="flex justify-center items-center gap-2 mb-4">
                    <a href="#"><img className="hover:bg-[#4267B2] rounded md:w-[50px] md:rounded-md" src={facebook} alt="" /></a> 
                    <a href="#"><img className="hover:bg-[#1DA1F2] rounded md:w-[50px] md:rounded-md" src={twitter} alt="" /></a>
                    <a href="#"><img className="hover:bg-[#E4405F] rounded md:w-[50px] md:rounded-md" src={instagram} alt="" /></a>
                    <a href="#"><img className="hover:bg-[#0A66C2] rounded md:w-[50px] md:rounded-md" src={linkedin} alt="" /></a>
                    <a href="#"><img className="hover:bg-[#25D366] rounded md:w-[50px] md:rounded-md" src={whatsapp} alt="" /></a>
                </div>
            </section>
        </div>
    )
}

export default Connect;