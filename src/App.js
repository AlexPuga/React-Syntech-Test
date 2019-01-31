import React, {Component} from 'react';
import {Provider} from "react-redux"
import store from "./store"
import SignupForm from './components/Signup/SignupForm'
import submit from './components/Signup/submit'

import './App.sass'

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <SignupForm steps={3} onSubmit={submit}/>
            </Provider>
        )
    }
}

export default App
