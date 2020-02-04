import React, { Component } from 'react';
import Child from './childComponent';

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    componentWillMount() {
        console.log('component will mount is called...');
        // we need 
    }

    componentDidMount() {
        console.log('component did mount is called...');
        // this.setState({ counter: 10 });
    }

    shouldComponentUpdate() {
        console.log('s c u is called...');
        return true;
    }

    componentWillUpdate() {
        console.log('comp will update is called...');
    }

    componentDidUpdate() {
        console.log('comp did update is called...');
    }

    render() {
        console.log('render is called...');
        return (
            <div style={{ marginLeft: 100 }}>
                <div>Parent: {this.state.counter}</div>
                <button onClick={this.onIncrement}>Increment</button>
                <Child counter={this.state.counter}></Child>
            </div>
        );
    }

    onIncrement = () => {
        this.setState({ counter: this.state.counter + 1 });
    }

}