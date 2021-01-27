import React from 'react'

export default function AlbumRow({ album }) {
  return <div className="album-row">{album.title} - {album.author} </div>
}
