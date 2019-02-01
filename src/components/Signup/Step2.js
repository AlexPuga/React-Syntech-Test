import React from 'react'
import {Fields, reduxForm} from 'redux-form'
import validate from './validate'
import dateField from './dateField'
// import genderField from './genderField'
// import selectField from './selectField'


const Step2 = ({ handleSubmit, previousPage }) => {

    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__body">
                <Fields
                    names={[
                        'birth_day',
                        'birth_month',
                        'birth_year'
                    ]}
                    type="text"
                    component={dateField}
                    label="Date of birth"
                />
            </div>
            <div className="form__footer">
                <button type="submit" className="button button__prev" onClick={previousPage}>Back</button>
                <button type="submit" className="button button__next">Next
                    <span className="arrow arrow__right fa fa-arrow-right"></span>
                </button>
            </div>
        </form>
    )

}

export default reduxForm({
    form: 'signup',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(Step2)