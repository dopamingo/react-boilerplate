// JSX를 JS로 변환할때마다 React.createElement와 같은 형태로 변환됨
// 따라서 JSX를 쓰는 모든 컴포넌트에 임포트 해야함
import React from 'react';

const SearchBar = () => {
	return <input />;
};

export default SearchBar;