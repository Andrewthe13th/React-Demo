import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';

class Star extends Component{
    constructor(props){
        super(props);
        
    }

    

    render(){
        return(
            <div className={(this.props.selected) ? "star selected" : "star"} onClick={this.props.onClick}>
                
            </div>
        );
    }
}

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func,
}

Star.defaultProps = {
    selected: false,
    onClick: f=>f,
}

export default Star;