import React from 'react';
import FirstView from './View/FirstView/FirstView'
import SecondView from './View/SecondView/SecondView'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux'
import fetchBrew from './services/initService';
import { fetchBrewAction } from './redux/actions/fetchActions';

class App extends React.Component {

    //The api is fetch here and then send to the redux store
    componentDidMount(){
        fetchBrew().then(res => {
           this.props.fetchBrewAction(res)
        })
    }

    render = () => {
        return (
            <React.StrictMode>
                <Router>
                    <Route exact={true} path="/" component={FirstView} />
                    <Route exact={true} path="/product/:productId" component={SecondView} />
                </Router>
            </React.StrictMode>
        )
    }
}

//Connection to the store
const mapDispatchToProps=(dispatch)=>{
    return{
        fetchBrewAction:(products)=>{dispatch(fetchBrewAction(products))}
    }
}

export default connect(undefined,mapDispatchToProps)(App)
