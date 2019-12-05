import React from 'react';

export default function Product(props)  {
    return(
    <div>
        <h1>{props.item.product_name}</h1>
        <img src={props.item.image_url} alt=""/>
        <h1>{props.item.price}</h1>
    </div>
    )
    }
