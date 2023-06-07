import React from "react"
export const SelectMenu = ({ handleSelect, register, preview, title, note = '', options, name, selected }) => {
    return (
        <div className="form-group">
            <div className="input-label">
                {title}
                {note ? <span className="sub-label">{note}</span> : <></>}
                {preview ? <span className="preview">{preview}</span> : <></>}
            </div>
            <div className="custom-select input-item">
                <div className="selected">
                    <input value={selected} type="text" readOnly className="select-input" onClick={handleSelect} />
                    <img src={require('../assets/chevron.svg').default} alt='' onClick={handleSelect} />
                </div>
                {/* <li className="select-options">1</li>
                    <li className="select-options">2</li>
                    <li className="select-options">3</li> */}
                {/* <select {...register(name)} className="select-menu" value={selected}> */}
                {/* <option value={'0'}>Select</option> */}
                <ul className="select-list">
                    {options.map((item) => (
                        item.img ?
                            // <option value={item.value} className="img-option"><img src={item.img} alt={item.title} className="select-img" /> {item.title}</option>
                            <li className="select-options" value={item.value}>{item.title}</li>
                            :
                            <li className="select-options" value={item.value}>{item.title}</li>
                    ))}
                </ul>
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
