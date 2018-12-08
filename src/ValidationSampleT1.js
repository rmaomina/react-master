import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSampleT1 extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '1234'
        });
        this.refInput.focus();
    }

    render() {
        return (
            <div>
                <input 
                    type = "text"
                    value = {this.state.password}
                    onChange = {this.handleChange}
                    ref = {(ref) => {this.refInput = ref}}
                    className = {this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <input type="button" onClick={this.handleButtonClick} value="검증하기"/>
            </div>
        );
    }
}

export default ValidationSampleT1;