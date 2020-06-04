import React from 'react';
import {Component} from 'react';
import PropTypes from 'prop-types';
import Star from './Star'

class StarRating extends Component{
    constructor(props){
        super(props);

        this.displayName = 'StarRating';
        this.state = {
            starsSelected: this.props.starsSelected || 0,
        }
        this.change = this.change.bind(this);
    }

    resetStars(){
        this.setState({
            starsSelected: 0,
        });
    }

    change(changeStar){
        this.setState({
            starsSelected: changeStar,
        });
    }

    // componentDidMount(){
    //     if(this.props.starsSelected){
    //         this.setState({
    //             starsSelected: this.props.starsSelected,
    //         })
    //     };
    // }

    render(){
        return(
            <div>
                { [...Array(this.props.totalStars)].map((n,i) =>
                    <Star key={i}
                        selected={i < this.state.starsSelected}
                        onClick={() => this.change(i+1)}
                    />
                )}
                <p>{this.state.starsSelected} of {this.props.totalStars} stars</p>
            </div>
        );
    }
}

StarRating.propTypes = {
    totalStars: PropTypes.number,
    
}

StarRating.defaultProps = {
    totalStars: 5,
    
}

export default StarRating;
