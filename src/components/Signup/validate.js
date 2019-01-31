
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

    return errors
}

export default validate