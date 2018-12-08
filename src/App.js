import React, { Component } from 'react';
import MyComponent from './MyComponent';
import EventPractice from './EventPractice';
import './App.css';
import MyFormApply from './MyFormApply';
// import ValidationSample from './ValidationSample';
// import ScrollBox from './ScrollBox';
// import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ValidationSampleT1 from './ValidationSampleT1';
import ScrollBoxT1 from './ScrollBoxT1';
import IterationSampleT1 from './IterationSampleT1';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: '#000000'
  }
  
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

  render() { 
    const book = '"리액트를 다루는~"';
    const song = '"뮤지컬 렌트 OST"';
    const movie = '"월터의 상상은 현실이 된다"';
    const car = '"카렌스2"';

    const isWarning = true;

    const h1Style = {
      backgroundColor: '#eee',
      fontSize: '26px',
      textAlign: 'center'
    }

    const caution = {
      textAlign: 'center',
      fontSize: '24px',
      color: 'red'
    }

    return (
      <div className='wrap'>

        {/* JSX */}
        <h1 style={h1Style}>[JSX] 오늘의 할일은?</h1>
        <ul>
          <li>{book} 책 공부하기</li>
          <li>{song} 듣기</li>
          <li>{movie} 감상</li>
          <li>{car} 세차하기</li>
        </ul>

        <h1 style={h1Style}>[JSX] 날씨경보?</h1>
        <p style={caution}>오늘 날씨는
          {isWarning ? ' 미세먼지 많아요':' 맑아요'}
        </p>

        {/* Component */}
        <h1 style={h1Style}>[Component] 좋아요</h1>
        <MyComponent name="React" age={3}/>

        {/* EventPractice */}
        <h1 style={h1Style}>[EventHandling] 코멘트</h1>
        <EventPractice/>

        {/* MyFormApply */}
        <h1 style={h1Style}>[EventHandling] 프로필</h1>
        <MyFormApply/>

        {/* Validation1 */}
        <h1 style={h1Style}>[ref] 간단한 검증 구현</h1>
        {/* <p>숫자 0000 외 에는 무효함.</p> */}
        {/* <ValidationSample/> */}
        <p>숫자 1234 외 에는 무효함.</p>
        <ValidationSampleT1/>

        {/* Validation2 */}
        <h1 style={h1Style}>[ref] 스크롤 박스</h1>
        {/* <ScrollBox
          ref = {(ref) => this.scrollBox = ref}
        />
        <button 
          onClick={() => this.scrollBox.scrollToBottom()}
          // this.scrollBox.scrollToBottom이 아닌 () => 처럼 
          // 새로운 함수를 만들어 주는 이유는 컴포넌트가 처음 렌더링 될 때
          // 이 값은 undefined 이므로 오류를 발생시키기 때문.
        >맨 밑으로</button> */}
        <ScrollBoxT1 ref={(ref) => this.scrollBox = ref}/>
        <button
          onClick={() => this.scrollBox.scrollToBottom()}
        >컴포넌트 스크롤을 맨 아래로</button>

        {/* Iteration */}
        <h1 style={h1Style}>[arr.map] TO-DO LIST</h1>
        <p>필드를 입력하여 추가하고, 클릭하여 삭제합니다.</p>
        {/* <IterationSample/> */}
        <IterationSampleT1/>

        {/* LifeCycle */}
        {/* getRandomColor함수를 참조하고 있음 */}
        <h1 style={h1Style}>[LifeCycle] 랜덤 컬러값</h1>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color}/>
        
        
      </div>
    );
  }
}

export default App;