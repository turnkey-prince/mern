import React from "react";
const BankingPreference = ({ register }) => {
    return (
        <div className="section pbottom-40">
            <div className="two-parts">
                <div className="section-header left-portion">
                    Banking Preferences
                </div>
                <div className="header-choices">
                    <div className="radio-option">
                        <input type="radio" id="cancel" />
                        <label htmlFor="cancel">Cancelled Cheque</label>
                    </div>
                    <div className="radio-option selected-radio-option">
                        <input type="radio" id="bank" />
                        <label htmlFor="bank">Bank Details</label>
                    </div>
                </div>
            </div>
            <div className="form">

                <div className="form-group righty">
                    <input type='text' {...register('bankName')} className="input-box input-item" placeholder='Bank Name' />
                </div>
                <div className="form-group righty">
                    <input type='text' {...register('accountNumber')} className="input-box input-item" placeholder='Account No.' />
                </div>
                <div className="form-group righty">
                    <input type='text' {...register('accountTitle')} className="input-box input-item" placeholder='Account Title' />
                </div>
                <div className="form-group righty">
                    <input type='text' {...register('bankIFSC')} className="input-box input-item" placeholder='Bank IFSC Code' />
                </div>
            </div>
        </div>
    );
}

export { BankingPreference };