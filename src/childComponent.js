import React, { Component } from 'react';

export default class Child extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    shouldComponentUpdate() {
        console.log('s c u child is called...');
        return false;
    }

    componentWillReceiveProps(nextProps) {
        console.log('comp will receive...');
        console.log('new Props', nextProps);
        console.log('old Props', this.props);
    }

    render() {
        return (
            <div style={{ marginLeft: 100 }}>
                <div>Children: {this.props.counter}</div>
            </div>
        );
    }

}