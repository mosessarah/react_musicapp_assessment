import React from 'react'
import './Track.css';

function Track({track, onAddTrack, remove, onRemoveTrack}) {

  // TODO: renderAction function (27)
  
  function handleAddTrack() {
    onAddTrack(track);
  }

  function handleRemoveTrack() {
    onRemoveTrack(track);
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>
          {/* <!-- track name will go here --> */}
          {track.name}
        </h3>
        <p>
          {/* <!-- track artist will go here--> */} {/* <!-- track album will go here --> */}
          {track.artist} | {track.album}
        </p>
      </div>
      {(!remove) && <button onClick={handleAddTrack} className="Track-action">+</button>}
      {(remove) && <button onClick={handleRemoveTrack} className="Track-action">-</button>}
    </div>
  )
}

export default Track