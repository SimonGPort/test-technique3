import React from 'react';

import { Container } from 'semantic-ui-react';

import Header from '../../components/Header/Header';
import ProductPage from '../../components/ProductPage/ProductPage';

export default class SecondView extends React.Component {


    render() {
        return (
            <div
                style={{
                    minHeight: '100vh',
                }}
            >
                <Container>
                    <Header />
                    <ProductPage />
                </Container>
            </div>
        );
    }
}
