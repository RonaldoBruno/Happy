import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './pages/Landing/index'
import OrphanagesMap from './pages/OrphanagesMap/index'
import CreateOrphanage from './pages/CreateOrphanages/index'
import DetailOrphanage from './pages/DetailOrphanages/index'

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Landing} />
                <Route path='/map' component={OrphanagesMap} />
                <Route path='/createOrphanage' component={CreateOrphanage} />
                <Route path='/orphanages/:id' component={DetailOrphanage} />
            </Switch>          
        </BrowserRouter>
    );
}

export default Routes;