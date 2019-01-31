import React from 'react'

const dateField = (fields) => (
    <div className="field fields-group">
        {console.log(fields)}
        {fields.birth_day.meta.touched && error? <span className="field__error">{error}</span> : <label className="field__label">{label}</label>}
        <div className="fields-group__item">
            <input className="fields-group__input" {...fields.birth_day.input} size="2" type="number" placeholder="DD"/>
            {fields.birth_day.meta.touched && fields.birth_day.meta.error &&
            <span className="error">{fields.birth_day.meta.error}</span>}
        </div>
        <div className="fields-group__item">
            <input className="fields-group__input" {...fields.birth_month.input} size="2" type="number" placeholder="DD"/>
            {fields.birth_month.meta.touched && fields.birth_month.meta.error &&
            <span className="error">{fields.birth_month.meta.error}</span>}
        </div>
        <div className="fields-group__item">
            <input className="fields-group__input" {...fields.birth_year.input} size="2" type="number" placeholder="DD"/>
            {fields.birth_year.meta.touched && fields.birth_year.meta.error &&
            <span className="error">{fields.birth_year.meta.error}</span>}
        </div>
    </div>
)

export default dateField