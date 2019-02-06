import React, { Component } from 'react';
import './MakeUpViewer.css';


export default class MakeUpViewer extends Component {
    render(props) {
        return (
            <div className='product_positioning'>
                <div className='product_view'>
                    <a href={this.props.productLink} target="blank">
                        <img className='image' src={this.props.image} alt="makeup_preview" />
                    </a>
                    <ul className='product_info'>
                        <li >Brand: {this.props.brand}</li>
                        <li >Product Name: {this.props.name}</li>
                        <li >Price: ${this.props.price}</li>
                        <li >Type: {this.props.productType}</li>
                    </ul>
                </div>

            </div>
        )
    }
}
