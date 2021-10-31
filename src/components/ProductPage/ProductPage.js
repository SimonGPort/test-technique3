import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

import { Container, GridContainer, LeftGridItem, RightGridItem, ReturnButton, Image, BeerTitle, Ul, Li, Section } from "./style"

class ProductPage extends React.Component {
    constructor() {
        super();
        this.state = {
            productSelected: null
        };
    }

    componentDidMount() {
        this.connectStoreToLocalState()
    }

    componentDidUpdate() {
        this.connectStoreToLocalState()
    }

    connectStoreToLocalState = () => {
        if (this.state.productSelected === null && this.props.products.length>0) {
            const productSelected = this.props.products.find((elem) => { return elem.id === Number(this.props.match.params.productId) })
            this.setState({ productSelected })
        }
    }

    foodPairing = () => {
        let value = ""
        this.state.productSelected.food_pairing.forEach((food, idx) => {
            if (this.state.productSelected.food_pairing.length > 1 && idx!==0) {
                value = value + ", " + food
            }
            else {
                value = food
            }
        })
        return value
    }

    toogleReturn = () => {
        this.props.history.push("/")
    }

    render() {
        if (!this.state.productSelected) {
            return (<div>loading...</div>)
        }

        return (<Container >
            <GridContainer container spacing={0} >
                <LeftGridItem item xs={12} sm={6} style={{ position: "relative", minHeight: "250px" }}>
                    <ReturnButton onClick={() => { this.toogleReturn() }}>Our beers</ReturnButton>
                    <Image src={this.state.productSelected.image_url} alt="beer" />
                </LeftGridItem>
                <RightGridItem item xs={12} sm={6} style={{ backgroundColor: "#fafafa", padding: "10px" }}>

                    <BeerTitle >
                        {this.state.productSelected.name}
                    </BeerTitle>
                    <Ul>
                        <Li>
                            IBU
                        </Li>
                        <Section>
                            {this.state.productSelected.ibu}
                        </Section>
                        <Li>
                            Alcool
                        </Li>
                        <Section>
                            {this.state.productSelected.abv}%
                        </Section>
                        <Li>
                            Description
                        </Li>
                        <Section>
                            {this.state.productSelected.description}
                        </Section>

                        <Li>
                            Food pairing
                        </Li>
                        <Section>
                            {this.foodPairing()}
                        </Section>
                    </Ul>
                </RightGridItem>

            </GridContainer>
        </Container>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        products: state.products,
    }
};

export default withRouter(connect(mapStateToProps)(ProductPage))
