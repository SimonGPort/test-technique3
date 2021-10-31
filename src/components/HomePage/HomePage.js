import React from 'react';
import {connect} from 'react-redux'

class HomePage extends React.Component {
    render() {
        return (
            <div>
                <h2>Here are a list of beers/breweries...</h2>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
   return{
       products:state.products
   }
  };

export default connect(mapStateToProps)(HomePage)