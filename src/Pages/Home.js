import React, { useEffect, useState } from "react"
import { InvestmentDetails } from "../Components/InvestmentDetails/InvestmentDetails"
import { ApplicantDetails } from "../Components/ApplicantDetails/ApplicantDetails"
import { BankingPreference } from "../Components/BankingPreference/BankingPreference"
import { NomineeDetails } from "../Components/NomineeDetails/NomineeDetails"
import { InvestmentRisk } from "../Components/InvestmentRisk/InvestmentRisk"
import { useForm } from "react-hook-form"
export const Home = () => {
    const { register, handleSubmit, setValue, watch, getValues, formState: { errors } } = useForm()
    const [data, setData] = useState()
    const [selectedMenu, setSelectedMenu] = useState()
    const handleSelect = (id) => {
        if (selectedMenu === id)
            setSelectedMenu('')
        else
            setSelectedMenu(id)
    }
    const selectOption = (field, value) => {
        setValue(field, value)
        setSelectedMenu('')
    }
    const fetchValue = field => watch(field)
    const onSubmit = (formData) => {
        setData(JSON.stringify(formData))
    }
    const getFileName = (field) => {
        const fname = getValues(field)['0']?.name || '';
        return fname.length > 9 ? (String(fname.substring(0, 9)).concat('...')) : fname
    }
    useEffect(() => {
        const handleOutSideClick = (event) => {
            const activeMenu = document.querySelector('.openSelect')
            if (!activeMenu?.contains(event.target))
                setSelectedMenu('')
        }
        document.addEventListener('click', handleOutSideClick)

        return () => {
            document.removeEventListener('click', handleOutSideClick)
        }
    }, [])
    return (
        <>
            <div className="top-header heading mbottom-0">
                <div>Welcome Invester,</div>
                <div className="imp-text semi-bold">"To a World of Sustainable Wealth Creation"</div>
                <div className="mtop-20">A Financial Journey filled with capitalization of enormous wealth opportunity in an economic transition.</div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <InvestmentDetails handleSelect={handleSelect} getValues={fetchValue} register={register} selectOption={selectOption} selectedMenu={selectedMenu} /><ApplicantDetails selectOption={selectOption} getFileName={getFileName} handleSelect={handleSelect} selectedMenu={selectedMenu} getValues={fetchValue} register={register} /><BankingPreference register={register} /><NomineeDetails handleSelect={handleSelect} getValues={fetchValue} register={register} selectOption={selectOption} selectedMenu={selectedMenu} /><InvestmentRisk register={register} handleSelect={handleSelect} getValues={fetchValue} selectOption={selectOption} selectedMenu={selectedMenu} />
            </form>
        </>
    )
}