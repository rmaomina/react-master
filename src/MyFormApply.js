import React, { Component } from 'react';

class MyFormApply extends Component {
    state = {
        username: '',
        userphone: '',
        foreign: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        alert('name: '+this.state.username + '<br/>phone: ' + this.state.userphone + '<br/> foreign:' + this.state.foreign);

        this.setState({
            username: '',
            userphone: '',
            foreign: ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <span>이름 : </span>
                <input
                    type='text'
                    name='username'
                    placeholder='이름을 입력하세요'
                    value={this.state.username}
                    onChange={this.handleChange}
                /><br/>

                <span>휴대전화 : </span>
                <input
                    type='text'
                    name='userphone'
                    placeholder='전화번호를 입력하세요'
                    value={this.state.userphone}
                    onChange={this.handleChange}
                /><br/>

                <span>외국인 : </span>
                <input
                    type='text'
                    name='foreign'
                    placeholder='외국인이면 yes'
                    value={this.state.foreign}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                /><br/>

                {/* 등록완료 */}
                <input
                    type='submit'
                    name='submit'
                    value='등록'
                    onClick={this.handleClick}
                /><br/>
            </div>
        );
    }
}

export default MyFormApply;