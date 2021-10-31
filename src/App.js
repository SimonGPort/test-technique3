import React from 'react';
import FirstView from './View/FirstView/FirstView'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import fetchBrew from './services/initService';
import { fetchBrewAction } from './redux/actions/fetchActions';

class App extends React.Component {

    componentDidMount(){
        fetchBrew().then(res => {
           this.props.fetchBrewAction(res)
        })
    }

    render = () => {
        return (
            <React.StrictMode>
                <Router>
                    <Route path="/" component={FirstView} />
                </Router>
            </React.StrictMode>
        )
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        fetchBrewAction:(products)=>{dispatch(fetchBrewAction(products))}
    }
}

export default connect(undefined,mapDispatchToProps)(App)
