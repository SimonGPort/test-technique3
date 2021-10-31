import React from 'react';
import { CardContainer, Wrapper, CardText } from './style'

class Card extends React.Component {

    render() {
        return (
            <CardContainer onClick={()=>{this.props.toogleSelection(this.props.product) }}>
                 <Wrapper >
                     <img src={this.props.product.image_url} alt="beer" style={{ height: "180px" }}
                     />
                     <CardText >{this.props.product.name}</CardText>
                 </Wrapper> 
             </CardContainer>
        )
    }
};

export default Card