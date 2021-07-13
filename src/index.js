import React, { Component } from 'react'; // React 컴포넌트를 생성하고 관리하는 라이브러리 JSX 사용
import ReactDOM from 'react-dom'; // React DOM 실제로 DOM에 렌더링하는 기능을 가진 라이브러리  
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // 설치된 라이브러리가 아니라면 참조경로를 제공해야함
const API_KEY = 'AIzaSyDYwzrLhbcsfs6oo7WxLkMrnRMod3dc0Ik';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] }; // 스테이트에 비디오를 빈 배열로 세팅
    
    // 컴포넌트가 렌더링 되면서 검색을 실행하고, 검색이 완료되면 비디오에 값들을 업데이트
    YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
      this.setState({ videos: data }); 
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}
// 첫번 째 인자(캼포넌트)를 취해서 두번째 인자(DOM 노드)에 뿌려라
ReactDOM.render(<App />, document.querySelector('.container'));