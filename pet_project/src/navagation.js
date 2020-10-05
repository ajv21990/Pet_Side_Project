import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";
import splashPage from './pages/splashPage'

export default class navagation extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={splashPage} />
                </div>
            </Router>

        )
    }
}