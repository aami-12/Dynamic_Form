import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Input = ({ id, label, placeholder, value }) => {
    const { handleChange } = useContext(FormContext)
    return (
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">{label}</label>
            <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                placeholder={placeholder ? placeholder : ''}
                value={value}
                onChange={event => handleChange(id, event)} disabled
            />
            <div id="emailHelp" className="form-text">We'll never share your {label} with anyone else.</div>
        </div>
    )
}

export default Input
