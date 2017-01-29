import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

//Guardando os items de videos na constante para poder exibir no Video List
const videoItems = props.videos.map((video) => {
    //Add Key para lista de video
    return <VideoListItem key={video.etag} video = {video} />
});

    //Exibindo os videos um ha um na tela   {videoItems}
    return(
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;