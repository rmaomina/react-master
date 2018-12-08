import React, { Component } from 'react';


class IterationSample extends Component {
    state = {
        elems: ['설거지', '청소기', '걸레질', '화장실 청소', '분리수거'],
        elem: ''
    }

    handleChange = (e) => {
        this.setState({
            elem: e.target.value
        });
    }

    handleInsert = (e) => {
        //elems배열에 값을 추가하고, elem 값을 초기화합니다.
        this.setState({
           elems: this.state.elems.concat(this.state.elem),
           elem: '' 
        });
    }

    handleRemove = (index) => {
        const {elems} = this.state;

        //slice를 사용하여 작성
        this.setState({
            elems: [
                ...elems.slice(0, index),
                ...elems.slice(index + 1, elems.length)
                // 배열을 자르는 내장 함수 slice와 전개 연산자(...)를 사용해 
                // index번째 값을 제외한 값들을 배열에 넣어준다.
            ]
        });

        //filter를 사용하여 작성
        // this.setState({
        //     elems: elems.filter((item, i) => i !== index)
        // });
    }

    render() {
        const doList = this.state.elems.map(
            (elem, index) => (
                <li 
                    key={index}
                    onClick={() => this.handleRemove(index)}
                >{elem}</li>)
        );
        

        return (
            <div>
                <input
                    onChange = {this.handleChange}
                    value = {this.state.elem}
                />
                <button
                    onClick = {this.handleInsert}
                >리스트 추가하기</button>
                <ul>
                    {doList}
                </ul>
            </div>
        );
    }
}

export default IterationSample;