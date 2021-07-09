// import 하기: 리액트를 우리가 설치한 node_module 에서 가져와라~
import React from 'react'; // React 컴포넌트를 생성하고 관리하는 라이브러리 JSX 사용
import ReactDOM from 'react-dom'; // React DOM 실제로 DOM에 렌더링하는 기능을 가진 라이브러리  

// create new component
const App = () => {
  return <div>Hi!</div>;
}

// 첫번 째 인자(캼포넌트)를 취해서 두번째 인자(DOM 노드)에 뿌려라
ReactDOM.render(<App />, document.querySelector('.container'));