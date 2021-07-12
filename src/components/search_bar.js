// JSX를 JS로 변환할때마다 React.createElement와 같은 형태로 변환됨
// 따라서 JSX를 쓰는 모든 컴포넌트에 임포트 해야함
import React, { Component } from 'react';

// 함수형 컴포넌트 - 상태관리 못하고 다른 컴포넌트와 소통하지 못한다
// const SearchBar = () => {
// 	return <input />;
// };

// 클래스 컴포넌트 - 내부에 어떤 정보를 저장할 때...?
// React.Component 클래스에게 받은 기능을 제공한다~
class SearchBar extends Component{
	render() {
		return <input onChange={this.onInputChange} />;
	}
	// 인풋이 변화될때마다 실행하는 함수
	onInputChange(event) {
		console.log(event.target.value);
	}
}


export default SearchBar;