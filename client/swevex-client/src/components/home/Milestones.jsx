import React from "react";

function Milestones(){
    return(
        <div className="">
            <div className="flex justify-center ">
                <span className="services-border | relative font-medium text-2xl mt-8">MILESTONES ACHIEVED</span> 
            </div>
            <div className="flex justify-center items-center my-4 gap-8">
                <div>
                    <div className="font-medium text-[30px] md:text-[60px]">100+</div>
                    <p className="font-extralight text-[18px] md:text-[36px]">Clients</p>
                </div>
                <div className='border-l-[1px] pl-8 border-black'>
                    <div className="font-medium text-[30px] md:text-[60px]">50+</div>
                    <p className="font-extralight text-[18px] md:text-[36px]">Projects</p>                  
                </div>
            </div>
        </div>
    )
}

export default Milestones;