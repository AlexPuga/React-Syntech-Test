import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step1'

class SignupForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired
    }

    state = {
        page: 1
    }

    render() {
        const {page} = this.state

        return (
            <div className="page">
                <header className="header">
                    <h2 className="header__text">Signup</h2>
                    <div className="progress">
                        <div style={{width: this.progressBarStep()}} className="progress__fill"></div>
                    </div>
                </header>
                <main className="main">
                    {page === 1 && <Step1 onSubmit={this.nextPage}/>}
                    {page === 2 && <Step2 previousPage={this.previousPage} onSubmit={this.nextPage}/>}
                    {page === 3 && <Step3/>}
                </main>
            </div>
        )
    }

    nextPage = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    previousPage = () => {
        this.setState({
            page: this.state.page - 1
        })
    }

    progressBarStep = () => {
        const {steps} = this.props
        return `${(100 / steps) * this.state.page}vw`
    }

}

export default SignupForm