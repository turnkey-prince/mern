import React from "react";
import { SingleSelectMenu } from "../BasicComponents";
const ApplicantDetails = ({ handleSelect, register, getValues, selectedMenu, getFileName, selectOption }) => {
    const sendOTP = (e) => {
        e.preventDefault()
    }
    const resendOTP = (e) => {
        e.preventDefault()
    }
    const verifyOTP = (e) => {
        e.preventDefault()
    }
    const uploadFile = (e) => {
        e.preventDefault()
    }
    const applicants = [];
    for (let i = 1; i < parseInt(getValues('accHolders')); i++) {
        applicants.push(
            <div className="form" key={`acc${i + 1}`}>
                <div className="form-group righty">
                    <div className="sub-header right-portion">
                        {i + 1}{i + 1 === 2 ? 'nd' : 'rd'} Account Holder Details
                    </div>
                </div>
                <div className="form-group righty">
                    <input required type='text' {...register(`applicant${i + 1}Name`)} className="input-box input-item" placeholder='Applicant Name' />
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input required type='number' {...register(`applicant${i + 1}Mobile`)} className="input-box input-item" placeholder='Contact No.' />
                        <button className="light-btn" onClick={sendOTP}>Send OTP</button>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input required type='number' {...register(`applicant${i + 1}MobileOtp`)} className="input-box input-item" placeholder='Enter OTP' />
                        <div className="btn-grp">
                            <button className="dark-btn" onClick={verifyOTP}>Verify</button>
                            <button className="invisible-btn" onClick={resendOTP}>Re-send OTP</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input required type='email' {...register(`applicant${i + 1}Email`)} className="input-box input-item" placeholder='Email Id' />
                        <button className="light-btn" onClick={sendOTP}>Send OTP</button>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input required type='number' {...register(`applicant${i + 1}EmailOtp`)} className="input-box input-item" placeholder='Enter OTP' />
                        <div className="btn-grp">
                            <button className="dark-btn" onClick={verifyOTP}>Verify</button>
                            <button className="invisible-btn" onClick={resendOTP}>Re-send OTP</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <input required type='text' {...register(`applicant${i + 1}Pan`)} className="input-box input-item" placeholder='PAN No.' />
                </div>
                <div className="form-group righty">
                    <div className="dob-group">
                        <div className="input-text">
                            Date Of Birth
                        </div>
                        <div className="form-group">
                            <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: '1', value: '1' }, { title: '2', value: '2' }, { title: '3', value: '3' },]} name={`applicant${i + 1}DOBDay`} selected={'Day'} extraClass={'w-150'} />
                            <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: 'January', value: 'jan' }, { title: 'February', value: 'feb' }, { title: 'March', value: 'mar' },]} name={`applicant${i + 1}DOBMonth`} selected={'Month'} extraClass={'w-200'} />
                            <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: '1999', value: '1999' }, { title: '2000', value: '2000' }, { title: '2001', value: '2001' },]} name={`applicant${i + 1}DOBYear`} selected={'Year'} extraClass={'w-150'} />
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <div className="input-text">Upload scanned copy of PAN Card</div>
                        <div className="btn-grp">
                            <input hidden type="file" {...register(`applicant${i + 1}PanCard`)} id={`applicant${i + 1}PanCard`} />
                            <label className="light-btn" htmlFor={`applicant${i + 1}PanCard`}>{getValues(`applicant${i + 1}PanCard`)?.length ? getFileName(`applicant${i + 1}PanCard`) : 'Choose File'}</label>
                            <button className="dark-btn" onClick={uploadFile}>Upload</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <div className="input-text">Upload scanned copy of Aadhar Card</div>
                        <div className="btn-grp">
                            <input hidden type="file" {...register(`applicant${i + 1}AadharCard`)} id={`applicant${i + 1}AadharCard`} />
                            <label className="light-btn" htmlFor={`applicant${i + 1}AadharCard`}>{getValues(`applicant${i + 1}AadharCard`)?.length ? getFileName(`applicant${i + 1}AadharCard`) : 'Choose File'}</label>
                            <button className="dark-btn" onClick={uploadFile}>Upload</button>
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
                    <input required type='text' {...register('applicantName')} className="input-box input-item" placeholder='Applicant Name' />
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input required type='number' {...register('applicantMobile')} className="input-box input-item" placeholder='Contact No.' />
                        <button className="light-btn" onClick={sendOTP}>Send OTP</button>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input required type='number' {...register('applicantMobileOtp')} className="input-box input-item" placeholder='Enter OTP' />
                        <div className="btn-grp">
                            <button className="dark-btn" onClick={verifyOTP}>Verify</button>
                            <button className="invisible-btn" onClick={resendOTP}>Re-send OTP</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input required type='email' {...register('applicantEmail')} className="input-box input-item" placeholder='Email Id' />
                        <button className="light-btn" onClick={sendOTP}>Send OTP</button>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <input required type='number' {...register('applicantEmailOtp')} className="input-box input-item" placeholder='Enter OTP' />
                        <div className="btn-grp">
                            <button className="dark-btn" onClick={verifyOTP}>Verify</button>
                            <button className="invisible-btn" onClick={resendOTP}>Re-send OTP</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <input required type='text' {...register('applicantPan')} className="input-box input-item" placeholder='PAN No.' />
                </div>
                <div className="form-group righty">
                    <div className="dob-group">
                        <div className="input-text">
                            Date Of Birth
                        </div>
                        <div className="form-group">
                            <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: '1', value: '1' }, { title: '2', value: '2' }, { title: '3', value: '3' },]} name={`applicantDOBDay`} selected={'Day'} extraClass={'w-150'} />
                            <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: 'January', value: 'jan' }, { title: 'February', value: 'feb' }, { title: 'March', value: 'mar' },]} name={`applicantDOBMonth`} selected={'Month'} extraClass={'w-200'} />
                            <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: '1999', value: '1999' }, { title: '2000', value: '2000' }, { title: '2001', value: '2001' },]} name={`applicantDOBYear`} selected={'Year'} extraClass={'w-150'} />

                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <div className="input-text">Upload scanned copy of PAN Card</div>
                        <div className="btn-grp">
                            <input hidden type="file" {...register('applicantPanCard')} id="applicantPanCard" />
                            <label className="light-btn" htmlFor="applicantPanCard">{getValues('applicantPanCard')?.length ? getFileName('applicantPanCard') : 'Choose File'}</label>
                            <button className="dark-btn" onClick={uploadFile}>Upload</button>
                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <div className="right-group">
                        <div className="input-text">Upload scanned copy of Aadhar Card</div>
                        <div className="btn-grp">
                            <input hidden type="file" {...register('applicantAadharCard')} id="applicantAadharCard" />
                            <label className="light-btn" htmlFor="applicantAadharCard">{getValues('applicantAadharCard')?.length ? getFileName('applicantAadharCard') : 'Choose File'}</label>
                            <button className="dark-btn" onClick={uploadFile}>Upload</button>
                        </div>
                    </div>
                </div>
            </div>
            {applicants}
        </div>
    );
}

export { ApplicantDetails };