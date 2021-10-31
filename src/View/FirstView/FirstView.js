import React from 'react';

import { Container } from 'semantic-ui-react';

import Header from '../../components/Header/Header';
import HomePage from '../../components/HomePage/HomePage';

export default class App extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: '#E5E5E5',
                    minHeight: '100vh',
                    paddingTop: '100px',
                }}
            >
                <Container>
                    <Header />
                    <HomePage />
                </Container>
            </div>
        );
    }
}
