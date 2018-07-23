import React from 'react';
import Media from './media'
import './playlist.css';
import Play  from './../../icons/components/play';
import Pause  from './../../icons/components/pause';
import FullScreen from './../../icons/components/full-screen';

function Playlist (props) {
  const playlist = props.data.categories[0].playlist
  console.log(props.data) 
  return (
    <div className="Playlist">
      <Play
        size={50}
        color="red"
      />
      <Pause
        size={50}
        color="blue"
      />
      <FullScreen
        size={50}
        color="yellow"
      />
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}

export default Playlist;