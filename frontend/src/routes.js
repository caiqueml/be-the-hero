import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
 
import Logon from './components/Logon'
import Register from './components/Register'
import Profile from './components/Profile'
import NewIncident from './components/NewIncident'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Logon}></Route>
                <Route path='/register' component={Register}></Route>
                <Route path='/profile' component={Profile}></Route>
                <Route path='/incidents/new' component={NewIncident}></Route>
            </Switch>
        </BrowserRouter>
    )
}