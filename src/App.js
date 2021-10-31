import React from 'react';
import FirstView from './View/FirstView/FirstView'
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {

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

export default App