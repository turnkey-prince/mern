import React, { useState } from "react"
import { InvestmentDetails } from "../Components/InvestmentDetails/InvestmentDetails"
import { ApplicantDetails } from "../Components/ApplicantDetails/ApplicantDetails"
import { BankingPreference } from "../Components/BankingPreference/BankingPreference"
import { NomineeDetails } from "../Components/NomineeDetails/NomineeDetails"
import { InvestmentRisk } from "../Components/InvestmentRisk/InvestmentRisk"
import { useForm } from "react-hook-form"
export const Home = () => {
    const handleSelect = (e) => {
        const clsList = e.target.parentNode.parentNode.classList
        if (clsList.contains('openSelect'))
            clsList.remove('openSelect');
        else
            clsList.add('openSelect');
    }
    const { register, handleSubmit } = useForm()
    const [data, setData] = useState()
    return (
        <>
            <div className="top-header heading mbottom-0">
                <div>Welcome Invester,</div>
                <div className="imp-text semi-bold">"To a World of Sustainable Wealth Creation"</div>
                <div className="mtop-20">A Financial Journey filled with capitalization of enormous wealth opportunity in an economic transition.</div>
            </div>

            <form onSubmit={handleSubmit((data) => setData(data))}>

                <InvestmentDetails handleSelect={handleSelect} register={register} /><ApplicantDetails handleSelect={handleSelect} register={register} /><BankingPreference register={register} /><NomineeDetails handleSelect={handleSelect} register={register} /><InvestmentRisk register={register} handleSelect={handleSelect} />
            </form>
        </>
    )
}