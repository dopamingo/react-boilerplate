// JSX를 JS로 변환할때마다 React.createElement와 같은 형태로 변환됨
// 따라서 JSX를 쓰는 모든 컴포넌트에 임포트 해야함
import React, { Component } from 'react';

// 클래스 컴포넌트 - 내부에 어떤 정보를 저장할 때...?
// React.Component 클래스에게 받은 기능을 제공한다~
class SearchBar extends Component{
	constructor(props) { // 변수나 상태값을 초기화 하는데 주로 이용
		super(props);

		this.state = { term: ''}; // 첫번째 프로퍼티
	}
	render() {
		return (
			// setState 함으로써 컴포넌트 리렌터링
			<div> 
				<input
					value={this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}
	onInputChange(term) {
		this.setState({term}); // setState
		this.props.onSearchTermChange(term); // 콜백함수 호출
	}
}


export default SearchBar;