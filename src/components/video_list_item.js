import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
	// const video = props.video; ES6 ({video}) 와 같음
	// 요소의 첫번째 객체가 비디오 프로퍼티로 나타나게 되고,
	// 비디오를 가져와 새로운 video 나 새로운 변수를 생성하라는 의미
	const imageUrl = video.snippet.thumbnails.default.url;
	return (
		<li onClick={() => onVideoSelect(video)} className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} />
				</div>
				<div className="media-body">
					<div className="media-heading">{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
};

export default VideoListItem;