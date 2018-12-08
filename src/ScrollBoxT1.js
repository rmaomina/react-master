import React, { Component } from 'react';

class ScrollBoxT1 extends Component {
    
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box1;
        this.box1.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const box1 = {
            width:'200px',
            height: '200px',
            backgroundColor: 'yellow',
            overflow: 'hidden'
        }

        const box2 = {
            width: '100px',
            height: '1000px',
            backgroundColor: 'red',
            border: '3px solid black'
        }

        return (
            <div>
                <div 
                    style={box1}
                    ref={(ref) => this.box1 = ref}
                >
                    <div style={box2}></div>
                </div>
            </div>
        );
    }
}

export default ScrollBoxT1;