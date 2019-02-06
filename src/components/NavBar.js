import React, { Component } from 'react';
import './NavBar.css';
import MakeUpViewer from './MakeUpViewer';
import { getAll } from '../utils/api.js';


export default class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            userInput: '',
            makeupToDisplay: [],
            search: []
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleInput(e) {
        this.setState({
            userInput: e.target.value
        })

    }

    handleClick(userInput) {
        this.setState({
            search: this.state.makeupToDisplay.filter((item) => {
                return item.brand === this.state.userInput || item.product_type === this.state.userInput
            }),
            userInput:''
        })
    }
    componentDidMount() {
        getAll().then(response => {
            this.setState({
                makeupToDisplay: response.data
            })
        })

    }


    render() {
        if (this.state.search.length === 0) {
            var listOfMakeup = this.state.makeupToDisplay.map((item, index) => {
                return (
                    <MakeUpViewer key={index} name={item.name} brand={item.brand} productType={item.product_type}
                        image={item.image_link} price={item.price} productLink={item.product_link}
                    />
                )
            })
        } else {
            var listOfMakeup = this.state.search.map((item, index) => {
                return (
                    <MakeUpViewer key={index} name={item.name} brand={item.brand} productType={item.product_type}
                        image={item.image_link} price={item.price} productLink={item.product_link}
                    />
                )
            })
        }

        return (
            <div>
                <div className='nav_bar'>
                    <div className='text'>
                        <h1>WELCOME! What are you searchig for? </h1>
                    </div>
                    <div className='input'>
                        <input onChange={(e) => this.handleInput(e)}
                            className='input_box'
                            placeholder='search by brand or product_type...'
                            type="text" />
                        <button onClick={this.handleClick} className='search_btn'>Search</button>
                    </div>
                </div>
                {listOfMakeup}
            </div>
        )
    }
}