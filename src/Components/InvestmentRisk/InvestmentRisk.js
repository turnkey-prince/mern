import React from "react";
const InvestmentRisk = ({ register, handleSelect }) => {
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
                            <input type="radio" id="03" />
                            <label htmlFor="03">0-3 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio" id="35" />
                            <label htmlFor="35">3-5 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio" id="57" />
                            <label htmlFor="57">5-7 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio" id="7" />
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
                            <input type="radio" id="active" />
                            <label htmlFor="active">Active</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio" id="passive" />
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
                            <input type="radio" id="accumulate" />
                            <label htmlFor="accumulate">Accumulate</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio" id="hold" />
                            <label htmlFor="hold">Hold</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio" id="reduce" />
                            <label htmlFor="reduce">Reduce</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio" id="exit" />
                            <label htmlFor="exit">Exit</label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-label big-left-portion">
                        Investment Objective
                    </div>
                    <div className="custom-select input-item small-right-portion ">
                        <div className="selected">
                            <input value={'Select'} type="text" readOnly className="select-input" onClick={handleSelect} />
                            <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                        </div>
                        <ul className="select-list">
                            <li className="select-options">1</li>
                            <li className="select-options">2</li>
                            <li className="select-options">3</li>
                        </ul>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-label big-left-portion">
                        Risk Tolerance
                    </div>
                    <div className="custom-select input-item small-right-portion ">
                        <div className="selected">
                            <input value={'Select'} type="text" readOnly className="select-input" onClick={handleSelect} />
                            <img src={require('../../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                        </div>
                        <ul className="select-list">
                            <li className="select-options">1</li>
                            <li className="select-options">2</li>
                            <li className="select-options">3</li>
                        </ul>
                    </div>
                </div>
                <div className="form-group">
                    <div className="input-label big-left-portion">
                        Investment Horizon:
                    </div>
                    <div className="header-choices small-right-portion">
                        <div className="radio-opt">
                            <input type="radio" id="03" />
                            <label htmlFor="03">{'<'}3 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio" id="35" />
                            <label htmlFor="35">3-5 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio" id="57" />
                            <label htmlFor="57">5-7 yr</label>
                        </div>
                        <div className="radio-opt">
                            <input type="radio" id="7" />
                            <label htmlFor="10"> {'>'}10 yr</label>
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
                            <input type='text' {...register('accountNumber')} className="input-box input-item" />
                        </div>
                    </div>
                    <button className="dark-btn">Submit</button>
                </div>
            </div>
        </div>
    );
}

export { InvestmentRisk };