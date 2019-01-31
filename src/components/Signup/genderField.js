import React from 'react'

const textField = ({ input, label, type, meta: { touched, error } }) => (
    <div className="field">
        {touched && error? <span className="field__error">{error}</span> : <label className="field__label">{label}</label>}
        <input className="field__input" {...input} type={type} />
    </div>
)

export default textField