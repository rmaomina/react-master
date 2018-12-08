import React, { Component } from 'react';

class ScrollBox extends Component {
    
    scrollToBottom = () => {  
        const {scrollHeight, clientHeight} = this.box; //this.refName.method
        this.box.scrollTop = scrollHeight - clientHeight;
    }
    // 비구조화 할당 문법 (위와 동일한 문법)
    // const scrollHeight = this.box.scrollHeight;
    // const clientHeight = this.box.clientHeight;

    render() {
        const parentBox = {
            position: 'relative',
            overflow: 'auto',
            width: '100%',
            height: '200px',
            boxSizing: 'border-box',
            padding: '30px',
            border: '3px solid lightcoral'
        }

        const childBox = {
            width: '100%',
            height: '600px',
            boxSizing: 'border-box',
            margin: '0 auto',
            border: '6px dashed blue',
            backgroundImage: 'linear-gradient(yellow, lightgreen)'

        }
        return (
            <div>
                <div
                    style = {parentBox}
                    ref = {(ref) => this.box = ref}
                >
                    <div style = {childBox}></div>
                </div>
            </div>
        );
    }
}

export default ScrollBox;