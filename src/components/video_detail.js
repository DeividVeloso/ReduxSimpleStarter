import React from 'react';

const VideoDetail = (props) => {

  //Verificar se é undefined,false ou null
  //Se for mostra o Loading...
  //Usamos o ! para verificar se o objeto é undefined,false ou null
  if(!props.video){
      return <div>
          Loading...
      </div>
  }
    //Pego o Id do video que retorunou da api
    const videoId = props.video.id.videoId;

    //Pega a url do youtube e passa o Id que retorunou da api para carregar o video.
    const url = `https://www.youtube.com/embed/${videoId}`;
    return (
    <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
            <iframe className="emdeb-responsive-item" src={url}></iframe>
        </div>
        <div className="details">
            <div>
                {props.video.snippet.title}
            </div>
            <div>
                {props.video.snippet.descrition}
            </div>
        </div>
    </div>
    )
}
export default VideoDetail;
