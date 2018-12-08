import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    hadnleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.refName.focus();
    }

    render() {
        return (
            <div>
               <input
                type = "password"
                value = {this.state.password}
                ref = {(ref) => {this.refName = ref}} //레퍼런스 추가
                onChange = {this.hadnleChange}
                className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
               /> 
               <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;