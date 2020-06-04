import {Component} from 'react';
import React from 'react';
import PropTypes from 'prop-types';

class AddColorForm extends Component{
    constructor(props){
        super(props);
        this._title = React.createRef();
        this._color = React.createRef();

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e){
        e.preventDefault();
        //console.log(this._title.current.value);
        //alert(`New Color: ${_title.value} ${_color.value}`);
        this.props.onNewColor(this._title.current,this._color.current);
        this._title.current.value = "";
        this._color.current.value = "#000000"
        this._title.current.focus();
    }

    render(){
        return(
            <form onSubmit={ this.onSubmit } >
                <input 
                    type="text" 
                    placeholder="color title..." 
                    ref={this._title}
                    required/>
                <input 
                    type="color"
                    ref={this._color} 
                    required/>
                <button>ADD</button>
            </form>
        );
    }
}

AddColorForm.propTypes = {
    onNewColor: PropTypes.func,
}

AddColorForm.defaultProps = {
    onNewColor: f => f,
}

export default AddColorForm;