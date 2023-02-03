import React from 'react'
import { useNavigate } from 'react-router-dom';



function HandleOnclickingApplyHere(CarrierPath, Navigate) {
    const URL_FOR_DIRECTION = `/careers/apply/${CarrierPath}`
    Navigate(URL_FOR_DIRECTION)

}

function CarrierContainerCard(props) {
    const Navigate = useNavigate()
    return (
        <div>
            <div className="border-2 border-black flex flex-col gap-4 justify-center items-center p-8 rounded hover:bg-[#0894DE] hover:text-white">
                <div className="flex flex-col items-center">
                    <img className="w-[100px] aspect-square" src={props.serviceImg} alt="" />
                    <p className="text-[28px] font-medium">{props.serviceTitle}</p>
                    <p className="text-center">
                        {props.serviceDescription}
                    </p>
                </div>
                <button type="button" className="w-full bg-[#0894DE] uppercase p-2 text-white " onClick={() => HandleOnclickingApplyHere(props.serviceTitle, Navigate)}>apply Here!</button>
            </div>
        </div>
    )
}

export default CarrierContainerCard

