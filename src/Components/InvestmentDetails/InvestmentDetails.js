import React, { useEffect } from "react";
import { Input, SelectMenu, SelectMenuWithImg } from "../BasicComponents";
const InvestmentDetails = ({ handleSelect, register, selectOption, getValues, selectedMenu }) => {
    const details = [
        {
            title: 'Account Type',
            name: 'accType',
            type: 'select',
            selected: '0',
            options: [
                {
                    title: 'Personal',
                    value: 'personal'
                },
                {
                    title: 'Savings',
                    value: 'savings'
                },
            ]
        },
        {
            title: 'Portfolio/Strategy Name',
            name: 'portfolio',
            type: 'select',
            selected: '0',
            options: [
                {
                    title: 'Gold Strategy',
                    value: 'gold'
                },
                {
                    title: 'Silver Strategy',
                    value: 'silver'
                },
                {
                    title: 'Systematic Transfer Plan',
                    value: 'systematic'
                },
            ]
        },
        {
            title: 'Fund Fees Category',
            name: 'fundFees',
            type: 'select',
            selected: '0',
            dependent: 'portfolio',
            options: {
                'gold': [
                    {
                        value: 'cheapGold',
                        title: 'Rs 123'
                    },
                    {
                        value: 'premiumGold',
                        title: 'Rs 1000'
                    },
                ],
                'silver': [
                    {
                        value: 'cheapSilver',
                        title: 'Rs 1203'
                    },
                    {
                        value: 'premiumSilver',
                        title: 'Rs 1100'
                    },
                ],
                'systematic': [
                    {
                        value: 'cheapSystematic',
                        title: 'Rs 103'
                    },
                    {
                        value: 'premiumSystematic',
                        title: 'Rs 1234'
                    },
                ],
            },
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
            subType: 'img',
            selected: 'india',
            options: [
                {
                    title: 'India',
                    img: 'https://img.icons8.com/?size=512&id=32584&format=png',
                    value: 'india'
                },
                {
                    title: 'United States of America',
                    img: 'https://img.icons8.com/?size=512&id=15532&format=png',
                    value: 'usa'
                },
            ]
        },
        {
            title: 'No. of Account Holders',
            name: 'accHolders',
            type: 'select',
            selected: '0',
            options: [
                {
                    title: '1',
                    value: '1'
                },
                {
                    title: '2',
                    value: '2'
                },
                {
                    title: '3',
                    value: '3'
                },
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
            selected: '0',
            options: [
                {
                    title: 'Abc',
                    value: 'abc'
                }
            ]
        },
    ]
    useEffect(() => {
        details.forEach((item) => {
            if (item.type === 'select' && item.selected !== '0') {
                selectOption(item.name, item.selected)
            }
        })
    }, [])

    return (
        <div className="section investment">
            <div className="section-header">
                Investment Details
            </div>
            <div className="form">

                {details.map((item) => (
                    item.type === 'select' ?
                        item.subType === 'img' ?
                            <SelectMenuWithImg selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} dependent={item.dependent} options={item.options} key={item.name} title={item.title} name={item.name} selected={item.selected} note={item.note} preview={item.preview} />
                            :
                            <SelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} dependent={item.dependent} options={item.options} key={item.name} title={item.title} name={item.name} selected={item.selected} note={item.note} preview={item.preview} />
                        :
                        <Input type={item.type} placeholder={item.placeholder} key={item.name} register={register} title={item.title} name={item.name} note={item.note} preview={item.preview} />
                ))}
            </div>
        </div>
    );
}

export { InvestmentDetails };