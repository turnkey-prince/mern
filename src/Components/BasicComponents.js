import React from "react"
export const SelectMenu = ({ handleSelect, getValues, selectOption, dependent, register, preview, title, note = '', options, name, selected }) => {
    // console.log(dependent)
    return (
        <div className="form-group">
            <div className="input-label">
                {title}
                {note ? <span className="sub-label">{note}</span> : <></>}
                {preview ? <span className="preview">{preview}</span> : <></>}
            </div>
            <div className="custom-select input-item">
                <div className="selected">
                    <div className="select-input" onClick={handleSelect} >
                        {getValues(name) ? (dependent ? (getValues(dependent) &&
                            options[getValues(dependent)].filter(opt => opt.value === getValues(name))[0]?.title) : options.filter(opt => opt.value === getValues(name))[0].title) : 'Select'}</div>
                    <img src={require('../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                </div>
                <div className="list-wrapper">
                    <ul className="select-list">
                        {dependent ?
                            getValues(dependent) &&
                            options[getValues(dependent)].map((item) => (
                                item.img ?
                                    <li key={item.value} className="select-options img-option" onClick={(e) => { selectOption(name, item.value); e.target.parentNode.parentNode.parentNode.classList.remove('openSelect') }}><img src={item.img} alt={item.title} className="select-img" />{item.title}</li>
                                    :
                                    <li key={item.value} className="select-options" onClick={(e) => { selectOption(name, item.value); e.target.parentNode.parentNode.parentNode.classList.remove('openSelect') }}>{item.title}</li>
                            ))
                            :
                            options.map((item) => (
                                item.img ?
                                    <li key={item.value} className="select-options img-option" onClick={(e) => { selectOption(name, item.value); e.target.parentNode.parentNode.parentNode.classList.remove('openSelect') }}><img src={item.img} alt={item.title} className="select-img" />{item.title}</li>
                                    :
                                    <li key={item.value} className="select-options" onClick={(e) => { selectOption(name, item.value); e.target.parentNode.parentNode.parentNode.classList.remove('openSelect') }}>{item.title}</li>
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
            <input type={type} {...register(name)} className="input-box input-item" placeholder={placeholder} />
        </div>
    )
}
