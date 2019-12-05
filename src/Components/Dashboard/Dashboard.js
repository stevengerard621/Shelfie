import React, { Component } from 'react';
import Product from '../Product/Product'

export default class Dashboard extends Component {
    render(){
        return(
            <div>
                {this.props.products.map((e) => {
                return <Product key={e.id} item={e} />
                })}
            </div>
        )
    }
}