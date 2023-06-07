import React from "react"
import { InvestmentDetails } from "../Components/InvestmentDetails/InvestmentDetails"
import { ApplicantDetails } from "../Components/ApplicantDetails/ApplicantDetails"
import { BankingPreference } from "../Components/BankingPreference/BankingPreference"
import { NomineeDetails } from "../Components/NomineeDetails/NomineeDetails"
import { InvestmentRisk } from "../Components/InvestmentRisk/InvestmentRisk"
export const Home = () => {
    const handleSelect = (e) => {
        const clsList = e.target.parentNode.parentNode.classList
        if (clsList.contains('openSelect'))
            clsList.remove('openSelect');
        else
            clsList.add('openSelect');
    }
    return (
        <>
            <div className="top-header heading mbottom-0">
                <div>Welcome Invester,</div>
                <div className="imp-text semi-bold">"To a World of Sustainable Wealth Creation"</div>
                <div className="mtop-20">A Financial Journey filled with capitalization of enormous wealth opportunity in an economic transition.</div>
            </div>
            <InvestmentDetails handleSelect={handleSelect} /><ApplicantDetails handleSelect={handleSelect} /><BankingPreference /><NomineeDetails handleSelect={handleSelect} /><InvestmentRisk /></>
    )
}