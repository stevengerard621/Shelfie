import React, { Component } from 'react';
// import axios from 'axios';

export default class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            product_name: '',
            price: 0,
            image_url: ''
        }
    }

    handleNameInput = event => {
        this.setState({
            [event.target.name]: event.target.value});
        console.log('name hit')
    }

    handlePriceInput = event => {
        this.setState({
            [event.target.price]: event.target.value});
        console.log('price hit')
    }

    handleAdd() {
      
    }
    
    cancelInputs() {
        this.setState({
            product_name: '',
            price: 0,
            image_url: ''
        })
    }

    render(){
        return(
            <div className='Form'>
                <h1>Form</h1>
                {this.state.image_url}
                <p>Image URL:</p>
                <input type="text" name="" id=""/>
                <br/>
                <p>Product Name:</p>
                <input type="text" onChange={this.handleNameInput}/>
                <br/>
                <p>Price:</p>
                <input type="text" onChange={this.handlePriceInput}/>
                <br/>
                <br/>
                <button>Cancel</button>
                <button>Add to Inventory</button>
            </div>
        )
    }
}