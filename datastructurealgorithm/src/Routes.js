import React from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Homepage from './pages/Homepage';


const Routes = () => {
    return (
        <div>
            <Switch>
            <Route path='/' component= {Homepage} exact/>
            
            </Switch>
        </div>
    )
}

export default Routes
