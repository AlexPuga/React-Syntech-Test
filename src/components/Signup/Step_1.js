import React, {Component, Fragment} from 'react'
import {Field, reduxForm} from 'redux-form'
import validate from './validate'
import textField from './textField'

const Step_1 = ({handleSubmit}) => {

    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form__body">
                <Field
                    name="email"
                    type="email"
                    component={textField}
                    label="Email"
                />
                <Field
                    name="password"
                    type="password"
                    component={textField}
                    label="Password"
                />
                <Field
                    name="rpassword"
                    type="password"
                    component={textField}
                    label="Confirm Password"
                />
            </div>
            <div className="form__footer">
                <button type="submit" className="button button__prev button__hidden">Back</button>
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
})(Step_1)