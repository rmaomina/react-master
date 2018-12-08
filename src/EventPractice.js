import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        comment:''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.username + '님의 ' + this.state.comment + '글이 등록됨');       

        this.setState({
            username: '',
            comment: ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            console.log('onKeyPress');
            this.handleClick();
        }
    }
    
    render() {
        return (
            <div>
                <input
                    type='text'
                    name='username'
                    placeholder='Your name'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type='text'
                    name='comment'
                    placeholder='write your comment'
                    value={this.state.comment}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <input
                    type='button'
                    name='submit'
                    value='comment'
                    onClick={this.handleClick}
                />
            </div>

        );
    }
}

export default EventPractice;