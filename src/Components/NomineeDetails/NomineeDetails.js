import React, { useState } from "react";
// import './NomineeDetails.css'
import { useForm } from "react-hook-form";
import { Input, SelectMenu } from "../BasicComponents";
const NomineeDetails = ({ handleSelect }) => {
    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    return (
        <div className="section">
            <div className="two-parts">
                <div className="section-header left-portion">
                    Nominee Details
                </div>
                <div className="header-choices">
                    <select {...register('noOfNominee')} className="select-menu input-item" value={'0'}>
                        <option value={'0'}>Select Number of Nominees</option>
                        <option value={'1'}>1</option>
                        <option value={'2'}>2</option>

                    </select>
                </div>
            </div>
            <form onSubmit={handleSubmit((data) => setData())} className="form">
                <div className="form-group righty">
                    <div className="sub-header right-portion">
                        1st Nominee Details
                    </div>
                </div>
                <div className="form-group righty">
                    <input type='text' {...register('nomineeName')} className="input-box input-item" placeholder='Nominee Name' />
                </div>
                <div className="form-group righty">
                    <input type='text' {...register('nomineePan')} className="input-box input-item" placeholder='Nominee PAN' />
                </div>
                <div className="form-group righty">
                    <input type='text' {...register('nomineeEmail')} className="input-box input-item" placeholder='Nominee Email Id.' />
                </div>
                <div className="form-group righty">
                    <input type='text' {...register('nomineeMob')} className="input-box input-item" placeholder='Nominee Contact No.' />
                </div>
                <div className="form-group righty">
                    <div className="dob-group">
                        <div className="input-text">
                            Date Of Birth
                        </div>
                        <div className="form-group">
                            <div className="custom-select w-150">
                                <div className="selected">
                                    <input value={'Day'} type="text" readOnly className="select-input" onClick={handleSelect} />
                                    <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                                </div>
                                <ul className="select-list">
                                    <li className="select-options">1</li>
                                    <li className="select-options">2</li>
                                    <li className="select-options">3</li>
                                </ul>
                            </div>
                            <div className="custom-select w-200">
                                <div className="selected">
                                    <input value={'Month'} type="text" readOnly className="select-input" onClick={handleSelect} />
                                    <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                                </div>
                                <ul className="select-list">
                                    <li className="select-options">January</li>
                                    <li className="select-options">Febuary</li>
                                    <li className="select-options">March</li>
                                </ul>
                            </div>
                            <div className="custom-select w-150">
                                <div className="selected">
                                    <input value={'Year'} type="text" readOnly className="select-input" onClick={handleSelect} />
                                    <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                                </div>
                                <ul className="select-list">
                                    <li className="select-options">1999</li>
                                    <li className="select-options">2000</li>
                                    <li className="select-options">2001</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <input type='text' {...register('pan')} className="input-box input-item" placeholder='Nominee Relationship with 1st Applicant' />
                </div>
                <div className="form-group righty">
                    <input type='text' {...register('pan')} className="input-box input-item" placeholder='Nominee (%)' />
                </div>
            </form>
        </div>
    );
}

export { NomineeDetails };