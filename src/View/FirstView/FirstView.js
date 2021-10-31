import React from 'react';

import { Container } from 'semantic-ui-react';

import Header from '../../components/Header/Header';
import HomePage from '../../components/HomePage/HomePage';

export default class FirstView extends React.Component {


    render() {
        return (
            <div
                style={{
                    minHeight: '100vh',
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
