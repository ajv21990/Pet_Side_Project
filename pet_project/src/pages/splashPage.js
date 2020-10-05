import React from 'react';
import SplashHeader from '../components/splashComponents/splashHeader'
import PupOTD from '../components/splashComponents/pupOTD'
import PupNews from '../components/splashComponents/pupNews'

export default class splashPage extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //     }
    // }
    render() {
        return (
            <div>
                <SplashHeader />
                <div className="d-flex col-md-12" >
                    <div className="col-md-4">
                        <h1>Filler Till I figure this out</h1>

                    </div>
                    <div className="col-md-4 text-center">
                        <PupOTD />
                    </div>
                    <div className="col-md-4 text-center">
                        <PupNews />
                    </div>
                </div>
            </div>
        )
    }
}