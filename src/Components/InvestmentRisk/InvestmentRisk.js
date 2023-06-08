import React from "react";
import { SingleSelectMenu } from "../BasicComponents";
const InvestmentRisk = ({ register, handleSelect, selectedMenu, selectOption, getValues }) => {
    return (
        <div className="section">
            <div className="section-header">
                Investment Risk Profiler
            </div>
            <div className="form">
                <div className="heading">
                    <div className="top-heading">Welcome to <span className="imp-text medium">Risk Profiler</span></div>
                    <div className="other-heading">Your Investment is utmost as important as understandind your emotional risk appetite</div>
                </div>
                <div className="form-group">
                    <div className="input-label big-left-portion">
                        Investment Experience:
                    </div>

                    <div className="header-choices small-right-portion">
                        <div className="radio-opt">
                            <input type="radio"  {...register('investmentExperience')} id="03" checked />
                            <label htmlFor="03">0-3 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio"  {...register('investmentExperience')} id="35" />
                            <label htmlFor="35">3-5 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio"  {...register('investmentExperience')} id="57" />
                            <label htmlFor="57">5-7 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio"  {...register('investmentExperience')} id="7" />
                            <label htmlFor="7"> {'>'}7 yr</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-label big-left-portion">
                        Investment Style:
                    </div>
                    <div className="header-choices small-right-portion">
                        <div className="radio-opt">
                            <input type="radio"  {...register('investmentStyle')} id="active" checked />
                            <label htmlFor="active">Active</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio"  {...register('investmentStyle')} id="passive" />
                            <label htmlFor="passive">Passive</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-label big-left-portion">
                        How would you react if well diversified portfolio fells below 10%:
                    </div>
                    <div className="header-choices small-right-portion">
                        <div className="radio-opt">
                            <input type="radio"  {...register('investmentDiversify')} id="accumulate" checked />
                            <label htmlFor="accumulate">Accumulate</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio"  {...register('investmentDiversify')} id="hold" />
                            <label htmlFor="hold">Hold</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio"  {...register('investmentDiversify')} id="reduce" />
                            <label htmlFor="reduce">Reduce</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio"  {...register('investmentDiversify')} id="exit" />
                            <label htmlFor="exit">Exit</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-label big-left-portion">
                        Investment Objective
                    </div>
                    <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: '1', value: '1' }, { title: '2', value: '2' }, { title: '3', value: '3' },]} name={`investmentObjective`} selected={'0'} extraClass={'small-right-portion '} />
                </div>
                <div className="form-group">
                    <div className="input-label big-left-portion">
                        Risk Tolerance
                    </div>
                    <SingleSelectMenu selectedMenu={selectedMenu} handleSelect={handleSelect} selectOption={selectOption} getValues={getValues} options={[{ title: '1', value: '1' }, { title: '2', value: '2' }, { title: '3', value: '3' },]} name={`riskTolerance`} selected={'0'} extraClass={'small-right-portion '} />

                </div>
                <div className="form-group">
                    <div className="input-label big-left-portion">
                        Investment Horizon:
                    </div>
                    <div className="header-choices small-right-portion">
                        <div className="radio-opt">
                            <input type="radio"  {...register('invesmentHorizon')} id="03h" checked />
                            <label htmlFor="03h">{'<'}3 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio"  {...register('invesmentHorizon')} id="35h" />
                            <label htmlFor="35h">3-5 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio"  {...register('invesmentHorizon')} id="57h" />
                            <label htmlFor="57h">5-7 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio"  {...register('invesmentHorizon')} id="10h" />
                            <label htmlFor="10h"> {'>'}10 yr</label>
                        </div>
                    </div>
                </div>

                <div className="footer">
                    I / We understand, the above informatio provided is correct to the best of my knowledge / belief, and understand the adversities / risk tolerance arising from mis - placement of information / data in any manner
                </div>
                <div className="captcha-area">
                    <div className="captcha-box">Captcha code</div>

                    <div className="captcha-group">
                        <div className="input-text">
                            Enter Captcha
                        </div>
                        <div className="form-group">
                            <input required type='text' {...register('captcha')} className="input-box input-item" />
                        </div>
                    </div>
                    <button type="submit" className="dark-btn">Submit</button>
                </div>
            </div>
        </div>
    );
}

export { InvestmentRisk };