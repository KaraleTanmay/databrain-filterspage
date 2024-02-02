import React from 'react'

export default function Card(props) {
    const add = Math.floor(props.num / 2) % 2
    return (
        <div className={`w-full rounded-lg px-2 py-6 ${add == 0 ? "bg-dark text-platinum" : "text-dark bg-platinum"} flex flex-col justify-center items-center gap-y-4 font-boxy `}>

            <img src={props.pet.profile} alt={"pet " + props.num} className={`w-[80%] h-[250px] rounded-lg  ${add != 0 ? "border-dark border-[3px]" : "border-white border-[2px]"}`} />

            <div className='w-[80%] flex flex-col justify-center items-start'>
                <div>Name : {props.pet.name}</div>
                <div>Species : {props.pet.species}</div>
                <div>Breed : {props.pet.breed}</div>
                <div>Life Stage : {props.pet.lifeStage}</div>
                <div>Gender : {props.pet.gender}</div>
                <div>Adoption Fee : {props.pet.adoptionFee}</div>
            </div>

            <button className={`py-1 px-2 ${add == 0 ? "text-dark bg-platinum" : "text-platinum bg-dark"} rounded-lg`}>See More</button>

        </div>
    )
}