import React from "react";
import { SingleSelectMenu } from "../BasicComponents";
const NomineeDetails = ({ handleSelect, register, selectedMenu, selectOption, getValues }) => {
    const nominees = [];
    for (let i = 0; i < parseInt(getValues('numberOfNominees')); i++) {
        nominees.push(
            <div className="form" key={`nominee${i + 1}`}>
                <div className="form-group righty">
                    <div className="sub-header right-portion">
                        {i + 1}{i + 1 === 1 ? 'st' : i + 1 === 2 ? 'nd' : 'rd'} Nominee Details
                    </div>
                </div>
                <div className="form-group righty">
                    <input type='text' {...register(`nominee${i + 1}Name`)} className="input-box input-item" placeholder='Nominee Name' />
                </div>
                <div className="form-group righty">
                    <input type='text' {...register(`nominee${i + 1}Pan`)} className="input-box input-item" placeholder='Nominee PAN' />
                </div>
                <div className="form-group righty">
                    <input type='email' {...register(`nominee${i + 1}Email`)} className="input-box input-item" placeholder='Nominee Email Id.' />
                </div>
                <div className="form-group righty">
                    <input type='number' {...register(`nominee${i + 1}Mob`)} className="input-box input-item" placeholder='Nominee Contact No.' />
                </div>
                <div className="form-group righty">
                    <div className="dob-group">
                        <div className="input-text">
                            Date Of Birth
                        </div>
                        <div className="form-group">
                            <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: '1', value: '1' }, { title: '2', value: '2' }, { title: '3', value: '3' },]} name={`nominee${i + 1}DOBDay`} selected={'Day'} extraClass={'w-150'} />
                            <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: 'January', value: 'jan' }, { title: 'February', value: 'feb' }, { title: 'March', value: 'mar' },]} name={`nominee${i + 1}DOBMonth`} selected={'Month'} extraClass={'w-200'} />
                            <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: '1999', value: '1999' }, { title: '2000', value: '2000' }, { title: '2001', value: '2001' },]} name={`nominee${i + 1}DOBYear`} selected={'Year'} extraClass={'w-150'} />

                        </div>
                    </div>
                </div>
                <div className="form-group righty">
                    <input type='text' {...register(`nominee${i + 1}Relation`)} className="input-box input-item" placeholder='Nominee Relationship with 1st Applicant' />
                </div>
                <div className="form-group righty">
                    <input type='number' {...register(`nominee${i + 1}Percentage`)} className="input-box input-item" placeholder='Nominee (%)' />
                </div>
            </div>
        )
    }
    return (
        <div className="section">
            <div className="two-parts">
                <div className="section-header left-portion">
                    Nominee Details
                </div>
                <div className="right-portion">
                    <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: '1', value: '1' }, { title: '2', value: '2' }, { title: '3', value: '3' },]} name={`numberOfNominees`} selected={'Select Number of Nominees'} />
                </div>
            </div>
            {nominees}
        </div>
    );
}

export { NomineeDetails };