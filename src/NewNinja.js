import React, { Component } from 'react';

class NewNinja extends Component{

    state = {
        name: null,
        age: null,
        belt: null
    }

    storeData =  (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }
    onBtnClick(e) {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addNinja(this.state);
    }

    render() {
        return(
            <form  onSubmit={ this.handleSubmit } >
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" onChange={ this.storeData } />
                <label htmlFor="age">Age</label>
                <input type="text" name="age" id="age" onChange={ this.storeData } />
                <label htmlFor="belt">Belt</label>
                <input type="text" name="belt" id="belt" onChange={ this.storeData } />
                <button>Submit</button>
            </form>
        );
    }
}

export default NewNinja;