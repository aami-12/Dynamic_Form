import React, { useContext } from 'react'
import { FormContext } from '../../FormContext';

const Date = ({ key, label, placeholder, value }) => {
    const { handleChange } = useContext(FormContext)
   
    return (
        <div className="mb-3">
            <label htmlFor="exampleDate1" className="form-label">{label}</label>
            <input type="number" className="form-control" key="exampleDate1" aria-describedby="dateHelp"
                placeholder={placeholder ? placeholder : ''}
                value={value}
                onChange={event => handleChange(key, event)} required
            />
        </div>
    )
}

export default Date
