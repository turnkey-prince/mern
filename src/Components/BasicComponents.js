import React from "react"
export const SelectMenu = ({ selectedMenu, handleSelect, getValues, selectOption, dependent, preview, title, note = '', options, name, selected, extraClass }) => {
    return (
        <div className="form-group">
            <div className="input-label">
                {title}
                {note ? <span className="sub-label">{note}</span> : <></>}
                {preview ? <span className="preview">{preview}</span> : <></>}
            </div>
            <div className={`custom-select input-item ${selectedMenu === name ? 'openSelect' : ''} ${extraClass}`}>
                <div className="selected" onClick={() => handleSelect(name)} >
                    <div className="select-input">
                        {getValues(name) ? (dependent ? (getValues(dependent) &&
                            options[getValues(dependent)].filter(opt => opt.value === getValues(name))[0]?.title) : options.filter(opt => opt.value === getValues(name))[0].title) : selected === '0' ? 'Select' : selected}</div>
                    <img src={require('../assets/chevron.svg').default} alt='' />
                </div>
                <div className="list-wrapper">
                    <ul className="select-list">
                        {dependent ?
                            getValues(dependent) &&
                            options[getValues(dependent)].map((item) => (
                                <li key={item.value} className="select-options" onClick={() => selectOption(name, item.value)}>{item.title}</li>
                            ))
                            :
                            options.map((item) => (
                                <li key={item.value} className="select-options" onClick={() => selectOption(name, item.value)}>{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export const SingleSelectMenu = ({ selectedMenu, handleSelect, getValues, selectOption, dependent, preview, title, note = '', options, name, selected, extraClass }) => {
    return (
        <div className={`custom-select input-item ${selectedMenu === name ? 'openSelect' : ''} ${extraClass}`}>
            <div className="selected" onClick={() => handleSelect(name)} >
                <div className="select-input">
                    {getValues(name) ? (dependent ? (getValues(dependent) &&
                        options[getValues(dependent)].filter(opt => opt.value === getValues(name))[0]?.title) : options.filter(opt => opt.value === getValues(name))[0].title) : selected === '0' ? 'Select' : selected}</div>
                <img src={require('../assets/chevron.svg').default} alt='' />
            </div>
            <div className="list-wrapper">
                <ul className="select-list">
                    {dependent ?
                        getValues(dependent) &&
                        options[getValues(dependent)].map((item) => (
                            <li key={item.value} className="select-options" onClick={() => selectOption(name, item.value)}>{item.title}</li>
                        ))
                        :
                        options.map((item) => (
                            <li key={item.value} className="select-options" onClick={() => selectOption(name, item.value)}>{item.title}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}
export const SelectMenuWithImg = ({ selectedMenu, handleSelect, getValues, selectOption, dependent, preview, title, note = '', options, name }) => {
    return (
        <div className="form-group">
            <div className="input-label">
                {title}
                {note ? <span className="sub-label">{note}</span> : <></>}
                {preview ? <span className="preview">{preview}</span> : <></>}
            </div>
            <div className={`custom-select input-item ${selectedMenu === name ? 'openSelect' : ''}`}>
                <div className="selected" onClick={() => handleSelect(name)} >
                    <div className="select-input img-option">
                        {getValues(name) ? (dependent ?
                            (getValues(dependent) &&
                                <>
                                    <img src={options[getValues(dependent)]?.filter(opt => opt.value === getValues(name))[0]?.img} alt='' className="select-img" />
                                    {options[getValues(dependent)]?.filter(opt => opt.value === getValues(name))[0]?.title}
                                </>
                            )
                            :
                            <>
                                <img src={options?.filter(opt => opt.value === getValues(name))[0]?.img} alt='' className="select-img" />
                                {options?.filter(opt => opt.value === getValues(name))[0].title}
                            </>
                        )
                            : 'Select'
                        }
                    </div>
                    <img src={require('../assets/chevron.svg').default} alt='' />
                </div>
                <div className="list-wrapper">
                    <ul className="select-list">
                        {dependent ?
                            getValues(dependent) &&
                            options[getValues(dependent)].map((item) => (
                                <li key={item.value} className="select-options img-option" onClick={(e) => selectOption(name, item.value)}><img src={item.img} alt={item.title} className="select-img" />{item.title}</li>
                            ))
                            :
                            options.map((item) => (
                                <li key={item.value} className="select-options img-option" onClick={(e) => selectOption(name, item.value)}><img src={item.img} alt={item.title} className="select-img" />{item.title}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
export const Input = ({ register, preview, title, type = 'text', note = '', placeholder = '', name }) => {
    return (
        <div className="form-group">
            <div className="input-label">
                {title}
                {note ? <span className="sub-label">{note}</span> : <></>}
                {preview ? <span className="preview">{preview}</span> : <></>}
            </div>
            <input required type={type} {...register(name)} className="input-box input-item" placeholder={placeholder} />
        </div>
    )
}
