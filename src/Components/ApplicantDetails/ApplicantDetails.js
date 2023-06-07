import React from "react";
const ApplicantDetails = ({ handleSelect, register, getValues }) => {
    const applicants = [];
    for (let i = 1; i < parseInt(getValues('accHolders')); i++) {
        applicants.push(
            <div className="form">
                <div className="form-group righty">
                    <div className="sub-header right-portion">
                        {i + 1}{i + 1 === 2 ? 'nd' : 'rd'} Account Holder Details
                    </div>
                </div>
                <div className="form-group righty">
                    <input type='text' {...register(`applicant${i + 1}Name`)} className="input-box input-item" placeholder='Applicant Name' />
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input type='text' {...register(`applicant${i + 1}Mobile`)} className="input-box input-item" placeholder='Contact No.' />
                        <button className="light-btn">Send OTP</button>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input type='text' {...register(`applicant${i + 1}MobileOtp`)} className="input-box input-item" placeholder='Enter OTP' />
                        <div className="btn-grp">
                            <button className="dark-btn">Verify</button>
                            <button className="invisible-btn">Re-send OTP</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input type='text' {...register(`applicant${i + 1}Email`)} className="input-box input-item" placeholder='Email Id' />
                        <button className="light-btn">Send OTP</button>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input type='text' {...register(`applicant${i + 1}EmailOtp`)} className="input-box input-item" placeholder='Enter OTP' />
                        <div className="btn-grp">
                            <button className="dark-btn">Verify</button>
                            <button className="invisible-btn">Re-send OTP</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <input type='text' {...register(`applicant${i + 1}Pan`)} className="input-box input-item" placeholder='PAN No.' />
                </div>
                <div className="form-group righty">
                    <div className="dob-group">
                        <div className="input-text">
                            Date Of Birth
                        </div>
                        <div className="form-group">
                            <div className="custom-select w-150">
                                <div className="selected">
                                    <input {...register(`applicant${i + 1}DOBDay`)} defaultValue={'Day'} type="text" readOnly className="select-input" onClick={handleSelect} />
                                    <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                                </div>
                                <div className="list-wrapper">
                                    <ul className="select-list">
                                        <li className="select-options">1</li>
                                        <li className="select-options">2</li>
                                        <li className="select-options">3</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="custom-select w-200">
                                <div className="selected">
                                    <input {...register(`applicant${i + 1}DOBMonth`)} defaultValue={'Month'} type="text" readOnly className="select-input" onClick={handleSelect} />
                                    <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                                </div>
                                <div className="list-wrapper">
                                    <ul className="select-list">
                                        <li className="select-options">January</li>
                                        <li className="select-options">Febuary</li>
                                        <li className="select-options">March</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="custom-select w-150">
                                <div className="selected">
                                    <input {...register(`applicant${i + 1}DOBYear`)} defaultValue={'Year'} type="text" readOnly className="select-input" onClick={handleSelect} />
                                    <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                                </div>
                                <div className="list-wrapper">
                                    <ul className="select-list">
                                        <li className="select-options">1999</li>
                                        <li className="select-options">2000</li>
                                        <li className="select-options">2001</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <div className="input-text">Upload scanned copy of PAN Card</div>
                        <div className="btn-grp">
                            <button className="light-btn">Choose File</button>
                            <button className="dark-btn">Upload</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <div className="input-text">Upload scanned copy of Aadhar Card</div>
                        <div className="btn-grp">
                            <button className="light-btn">Choose File</button>
                            <button className="dark-btn">Upload</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    return (
        <div className="section applicant">
            <div className="two-parts">
                <div className="section-header left-portion">
                    Applicant Details
                </div>
                <div className="section-header right-portion">
                    1st Account Holder Details
                </div>
            </div>
            <div className="form">
                <div className="form-group righty">
                    <input type='text' {...register('applicantName')} className="input-box input-item" placeholder='Applicant Name' />
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input type='text' {...register('mobile')} className="input-box input-item" placeholder='Contact No.' />
                        <button className="light-btn">Send OTP</button>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input type='text' {...register('mobileOtp')} className="input-box input-item" placeholder='Enter OTP' />
                        <div className="btn-grp">
                            <button className="dark-btn">Verify</button>
                            <button className="invisible-btn">Re-send OTP</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input type='text' {...register('email')} className="input-box input-item" placeholder='Email Id' />
                        <button className="light-btn">Send OTP</button>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input type='text' {...register('emailOtp')} className="input-box input-item" placeholder='Enter OTP' />
                        <div className="btn-grp">
                            <button className="dark-btn">Verify</button>
                            <button className="invisible-btn">Re-send OTP</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <input type='text' {...register('pan')} className="input-box input-item" placeholder='PAN No.' />
                </div>
                <div className="form-group righty">
                    <div className="dob-group">
                        <div className="input-text">
                            Date Of Birth
                        </div>
                        <div className="form-group">
                            <div className="custom-select w-150">
                                <div className="selected">
                                    <input {...register('applicantDOBDay')} defaultValue={'Day'} type="text" readOnly className="select-input" onClick={handleSelect} />
                                    <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                                </div>
                                <div className="list-wrapper">
                                    <ul className="select-list">
                                        <li className="select-options">1</li>
                                        <li className="select-options">2</li>
                                        <li className="select-options">3</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="custom-select w-200">
                                <div className="selected">
                                    <input {...register('applicantDOBMonth')} defaultValue={'Month'} type="text" readOnly className="select-input" onClick={handleSelect} />
                                    <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                                </div>
                                <div className="list-wrapper">
                                    <ul className="select-list">
                                        <li className="select-options">January</li>
                                        <li className="select-options">Febuary</li>
                                        <li className="select-options">March</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="custom-select w-150">
                                <div className="selected">
                                    <input defaultValue={'Year'} type="text" readOnly className="select-input" onClick={handleSelect} />
                                    <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                                </div>
                                <div className="list-wrapper">
                                    <ul className="select-list">
                                        <li className="select-options">1999</li>
                                        <li className="select-options">2000</li>
                                        <li className="select-options">2001</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <div className="input-text">Upload scanned copy of PAN Card</div>
                        <div className="btn-grp">
                            <button className="light-btn">Choose File</button>
                            <button className="dark-btn">Upload</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <div className="input-text">Upload scanned copy of Aadhar Card</div>
                        <div className="btn-grp">
                            <button className="light-btn">Choose File</button>
                            <button className="dark-btn">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
            {applicants}
        </div>
    );
}

export { ApplicantDetails };