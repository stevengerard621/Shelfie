import React, { Component } from 'react';
// import axios from 'axios';

export default class Form extends Component {
    constructor(){
        super();

        this.state = {
            name: '',
            price: 0,
            img_url: ''
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

    handleSubmit() {

    }

    cancelInputs() {
        this.setState({
            name: '',
            price: 0,
            imgurl: ''
        })
    }

    render(){
        return(
            <div className='Form'>
                <h1>Form</h1>
                <p>Image URL:</p>
                <input type="text" name="" id=""/>
                <br/>
                <p>Product Name:</p>
                <input type="text" onChange={this.handleNameInput}/>
                <br/>
                <p>Price:</p>
                <input type="text" onChange={this.handlePriceInput}/>
                <br/>
                <button onCLick={this.cancelInputs}>Cancel</button>
                <button onClick={this.handleSubmit}>Add to Inventory</button>
            </div>
        )
    }
}