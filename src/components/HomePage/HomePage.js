import React from 'react';
import Card from '../Card/Card';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
    Container,
    TopSectionTitle,
    TopSection,
    SearchSection,
    SearchGrid,
    SearchTitle,
    SubSearchTitle,
    SearchInput,
    WrapperSlider,
} from './style';
import { Grid, Box, Slider } from '@material-ui/core';

class HomePage extends React.Component {
    constructor() {
        super();
        this.state = {
            productsDisplayed: [],
            filter: {
                name: '',
                ibu: [0, 100],
                abv: [0, 12],
            },
        };
    }

    //Copy of the store for the local state
    componentDidMount() {
        this.connectStoreToLocalState();
    }

    componentDidUpdate() {
        this.connectStoreToLocalState();
    }

    connectStoreToLocalState = () => {
        if (this.props.products.length > 0 && this.state.productsDisplayed.length === 0) {
            this.setState({ productsDisplayed: this.props.products });
        }
    };
    //filter function for the local state
    filterProducts = () => {
        let value = [];

        value = this.props.products.filter((product) =>
            product.name.toLowerCase().includes(this.state.filter.name.toLowerCase()),
        );
        value = value.filter((product) => {
            return (
                product.ibu >= this.state.filter.ibu[0] && product.ibu <= this.state.filter.ibu[1]
            );
        });
        value = value.filter((product) => {
            return (
                product.abv >= this.state.filter.abv[0] && product.abv <= this.state.filter.abv[1]
            );
        });

        this.setState({ productsDisplayed: value });
    };
    //dynamic filter function
    FilterAction = (action, value) => {
        this.setState({ filter: { ...this.state.filter, [action]: value } }, this.filterProducts);
    };

    toogleSelection = (id) => {
        this.props.history.push(`/product/${id}`);
    };

    //render the cards section
    renderCards = () => {
        const value = this.state.productsDisplayed.map((product, idx) => {
            return (
                <Grid
                    item
                    key={idx}
                    xs={12}
                    sm={6}
                    md={4}
                    lg={3}
                    style={{ display: 'flex', justifyContent: 'center', marginBottom: '25px' }}
                >
                    <Card product={product} toogleSelection={this.toogleSelection} />
                </Grid>
            );
        });
        return value;
    };

    render() {
        return (
            <Container>
                <TopSection>
                    <TopSectionTitle>Products</TopSectionTitle>
                    <SearchSection>
                        <SearchTitle>Search</SearchTitle>
                        <SearchGrid>
                            <SubSearchTitle>Name</SubSearchTitle>
                            <SearchInput
                                value={this.state.filter.name}
                                onChange={(ev) => {
                                    this.FilterAction('name', ev.target.value);
                                }}
                            />
                            <SubSearchTitle>IBU</SubSearchTitle>
                            <WrapperSlider>
                                <Box sx={{ width: '90%' }}>
                                    <Slider
                                        value={this.state.filter.ibu}
                                        onChange={(ev, newValue) => {
                                            this.FilterAction('ibu', newValue);
                                        }}
                                        valueLabelDisplay="auto"
                                    />
                                </Box>
                            </WrapperSlider>
                            <SubSearchTitle>%Alcool</SubSearchTitle>
                            <WrapperSlider>
                                <Box sx={{ width: '90%' }}>
                                    <Slider
                                        value={this.state.filter.abv}
                                        onChange={(ev, newValue) => {
                                            this.FilterAction('abv', newValue);
                                        }}
                                        valueLabelDisplay="auto"
                                        max={12}
                                    />
                                </Box>
                            </WrapperSlider>
                        </SearchGrid>
                    </SearchSection>
                </TopSection>

                <Grid container spacing={0}>
                    {this.renderCards()}
                </Grid>
            </Container>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};

export default withRouter(connect(mapStateToProps)(HomePage));
