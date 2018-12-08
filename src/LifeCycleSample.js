import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log('[constructor] : 컴포넌트의 생성자 메서드로 컴포넌트를 만들 때 실행됨');
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        // 이전 state의 컬러값과 다음 State의 컬러값이 같지 않은 경우, 다음 State의 컬러값을 세팅.
        if(nextProps.color !== prevState.color) {
            return { color: nextProps.color }
        }
        return null;
    }

    componentDidMount() {
        console.log('[componentDidMount] : 첫 렌더링이 완료됨');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[shouldComponentUpdate] : 리렌더링 여부를 결정함', nextProps, nextState);
        // 숫자의 마지막 자리가 3이면 리렌더링하지 않습니다.
        return nextState.number % 10 !== 3;
    }

    componentWillUnmount() {
        console.log('[componentWillUnmount] : 컴포넌트를 DOM에서 제거함');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[getSnapshotBeforeUpdate] : render메서드를 호출한 후 DOM에 변화를 반영하기 직전에 호출함');

        // 현재 컬러값과 이전 컬러값이 다를 경우, myRef 컬러값을 반환함
        if(prevProps.color !== this.props.color) {
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[componentDidUpdate] : 리랜더링을 완료함 / 업데이트가 끝난 직후임', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트 되기 직전 색상: ' , snapshot);
        }
    }

    render() {
        console.log('[render] : 컴포넌트 모양을 정의하는 메서드 호출');
        const style = {
            color: this.props.color,
            fontSize: '30px',
            textAlign: 'center'
        }

        return (
            <div>
                <h3 style={style} ref={ref=>this.myRef=ref}>{this.state.number}</h3>
                <p>color: {this.state.color}</p>
                <button
                    onClick={this.handleClick}
                >더하기</button>
            </div>
        );
    }
}

export default LifeCycleSample;