// import 하기: 리액트를 우리가 설치한 node_module 에서 가져와라~
import React from 'react'; // React 컴포넌트를 생성하고 관리하는 라이브러리 JSX 사용
import ReactDOM from 'react-dom'; // React DOM 실제로 DOM에 렌더링하는 기능을 가진 라이브러리  
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // 설치된 라이브러리가 아니라면 참조경로를 제공해야함

//npm install --save youtube-api-search
const API_KEY = 'AIzaSyDYwzrLhbcsfs6oo7WxLkMrnRMod3dc0Ik';

YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// create new component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
// 첫번 째 인자(캼포넌트)를 취해서 두번째 인자(DOM 노드)에 뿌려라
ReactDOM.render(<App />, document.querySelector('.container'));