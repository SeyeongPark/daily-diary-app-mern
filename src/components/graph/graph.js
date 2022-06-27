import React, { Component } from 'react';
import { renderMatches } from 'react-router-dom';
import './graph.css'


export default class Graph extends Component {

    // Add squares
    async componentDidMount() {
        const squares = document.querySelector('.squares');
            for (var i = 1; i < 365; i++) {
                const level = Math.floor(Math.random() * 3);  
                squares.insertAdjacentHTML('beforeend', `<li data-level="${level}"></li>`);
            }

    }

    render() {
        return (
            <div>
                <div class="graph">
                    <ul class="days">
                    {/* <li>S</li>
                    <li>M</li>
                    <li>T</li>
                    <li>W</li>
                    <li>T</li>
                    <li>F</li>
                    <li>S</li> */}
                    </ul>
                    <ul class="months">
                    <li>Jan</li>
                    <li>Feb</li>
                    <li>Mar</li>
                    <li>Apr</li>
                    <li>May</li>
                    <li>Jun</li>
                    <li>Jul</li>
                    <li>Aug</li>
                    <li>Sep</li>
                    <li>Oct</li>
                    <li>Nov</li>
                    <li>Dec</li>
                    </ul>
                    <ul class="squares">
                    </ul>
                </div>
            </div>
        );
    }
}