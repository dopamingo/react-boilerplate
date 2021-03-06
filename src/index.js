import _ from 'lodash';
import React, { Component } from 'react'; // React 컴포넌트를 생성하고 관리하는 라이브러리 JSX 사용
import ReactDOM from 'react-dom'; // React DOM 실제로 DOM에 렌더링하는 기능을 가진 라이브러리  
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar'; // 설치된 라이브러리가 아니라면 참조경로를 제공해야함
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyDYwzrLhbcsfs6oo7WxLkMrnRMod3dc0Ik';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    }; // 스테이트에 비디오를 빈 배열로 세팅
    
    this.videoSearch('surfboards'); // 초기 검색값
  }

  // 유튜브 검색을 리팩토링하여 하나의 메소드로 만듦
  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      }); 
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300)
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
        // 비디오를 가져와서 선택한 비디오를 업데이트 그리고 이 프로퍼티를 비디오 리스트로 전달한다
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    );
  }
}
// 첫번 째 인자(캼포넌트)를 취해서 두번째 인자(DOM 노드)에 뿌려라
ReactDOM.render(<App />, document.querySelector('.container'));