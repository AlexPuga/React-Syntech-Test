
const validate = values => {
    const errors = {}

    // if (!values.password) {
    //     errors.password = 'Password is required'
    // } else if (values.password.length < 6) {
    //     errors.password = 'Passwords must be at least 6 characters'
    // }
    //
    // if (!values.rpassword) {
    //     errors.rpassword = 'Confirm password is required'
    // } else if (values.rpassword !== values.password) {
    //     errors.rpassword = 'Passwords do not match'
    // }
    //
    // if (!values.email) {
    //     errors.email = 'Email is required'
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address'
    // }


    if (!values.birth_day && !values.birth_month && !values.birth_year) errors.birth_day = 'Date is required'

    if (parseInt(values.birth_day) < 1) errors.birth_month = 'Invalid date format'
    if (parseInt(values.birth_day) > 31) errors.birth_month = 'Invalid date format'

    if (!values.birth_month) errors.birth_month = 'Birth month is required'
    if (parseInt(values.birth_month) < 1) errors.birth_month = 'Invalid date format'
    if (parseInt(values.birth_month) > 12) errors.birth_month = 'Invalid date format'

    if (parseInt(values.birth_month) === 2 && parseInt(values.birth_day) > 29) errors.birth_month = 'Invalid date format'

    if (!values.birth_year) errors.birth_year = 'Birth year is required'
    if (parseInt(values.birth_year) < 1900) errors.birth_month = 'Invalid date format'

    if (new Date().setFullYear(new Date().getFullYear() - 18) - new Date().setFullYear(parseInt(values.birth_year), parseInt(values.birth_month) - 1, parseInt(values.birth_day)) < 0) errors.birth_month = 'You must be 18 years old or more to register'

    // const mydate = new Date()
    // const currdate = new Date()
    // mydate.setFullYear(parseInt(values.birth_year), parseInt(values.birth_month) - 1, parseInt(values.birth_day))
    // currdate.setFullYear(currdate.getFullYear() - 18)
    // console.log('-----', new Date().setFullYear(new Date().getFullYear() - 18) - new Date().setFullYear(parseInt(values.birth_year), parseInt(values.birth_month) - 1, parseInt(values.birth_day)))
    
    return errors
}

export default validate