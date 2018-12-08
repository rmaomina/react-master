import React, { Component } from 'react';

class IterationSampleT1 extends Component {
    state = {
        idx: 0,
        elems: ['react', 'javascript', 'scss', 'html', 'php' ],
        elem: '',
        // TODO[날짜 추가하기]
    }

    handleChange = (e) => {
        this.setState({
            elem: e.target.value
        });
        // console.log(this.state.elem);
    }

    handleInsert = () => {
        this.setState({
            elems: this.state.elems.concat(this.state.elem)
        });
    }

    handleRemove = (idx) => {
        const {elems} = this.state;

        this.setState({
            elems: [
                ...elems.slice(0, idx),
                ...elems.slice(idx + 1, idx.length)
            ]
        });
    }

    render() {
        const studyList = this.state.elems.map(
            (name, idx) => (
                <li 
                    key={idx} 
                    onClick={() => this.handleRemove(idx)}
                >
                    {(idx + 1)+ " : " + name}
                </li>)
        );

        return (
            <div>
                <input
                    type = "text"
                    onChange = {this.handleChange}
                    placeholder = "공부 목록을 추가하세요"
                />
                <input 
                    type = "button" 
                    value = "추가하기"
                    onClick = {this.handleInsert}
                />
                <ul>
                    {studyList}
                </ul>
            </div>
        );
    }
}

export default IterationSampleT1;