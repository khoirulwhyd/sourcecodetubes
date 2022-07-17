import React, { Component } from 'react'
import background from '../images/background.jpg'
export default class Homepage extends Component {
    render() {
        return (
            <div className="hero">
                <div class="card bg-dark text-white">
                    <img src={background} class="card-img" alt="background" height="550px"></img>
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                </div>
            </div>
        );
    };
};