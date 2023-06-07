import React from "react";
import { Input, SelectMenu } from "../BasicComponents";
const InvestmentDetails = ({ handleSelect, register }) => {
    const details = [
        {
            title: 'Account Type',
            name: 'accType',
            type: 'select',
            selected: '0',
            options: [
                {
                    title: 'Abc',
                    value: 'abc'
                }
            ]
        },
        {
            title: 'Portfolio/Strategy Name',
            name: 'portfolio',
            type: 'select',
            selected: '0',
            options: [
                {
                    title: 'Abc',
                    value: 'abc'
                }
            ]
        },
        {
            title: 'Fund Fees Category',
            name: 'fundFees',
            type: 'select',
            selected: '0',
            options: [
                {
                    title: 'Abc',
                    value: 'abc'
                }
            ],
        },
        {
            title: 'Investment Category',
            name: 'investCat',
            type: 'select',
            selected: '0',
            options: [
                {
                    title: 'Abc',
                    value: 'abc'
                }
            ],
        },
        {
            title: 'Communication Address',
            name: 'address',
            type: 'text',
            note: '(All further deliverables will be communicated on this address)'
        },
        {
            title: 'Country   of Tax Residency',
            name: 'country',
            type: 'select',
            selected: 'india',
            options: [
                {
                    title: 'India',
                    img: 'https://img.icons8.com/?size=512&id=32584&format=png',
                    value: 'india'
                }
            ]
        },
        {
            title: 'No. of Account Holders',
            name: 'accHolders',
            type: 'select',
            selected: '0',
            options: [
                {
                    title: 'Abc',
                    value: 'abc'
                }
            ]
        },
        {
            title: 'Quantum of Investment',
            name: 'quantum',
            type: 'text',
        },
        {
            title: 'Investment Mode',
            name: 'investmentMode',
            type: 'select',
            options: [
                {
                    title: 'Abc',
                    value: 'abc'
                }
            ]
        },
    ]
    return (
        <div className="section investment">
            <div className="section-header">
                Investment Details
            </div>
            <div className="form">

                {details.map((item) => (
                    item.type === 'select' ?
                        <SelectMenu handleSelect={handleSelect} options={item.options} key={item.name} register={register} title={item.title} name={item.name} selected={item.selected} note={item.note} preview={item.preview} />
                        :
                        <Input type={item.type} placeholder={item.placeholder} key={item.name} register={register} title={item.title} name={item.name} note={item.note} preview={item.preview} />
                ))}
            </div>
        </div>
    );
}

export { InvestmentDetails };