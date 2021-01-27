import { Link } from "react-router-dom";
import AlbumRow from "./AlbumRow";
import '../App.css';


export default function AlbumList(props) {
  return (
    <div>
      <h2>All trending albums</h2>

      {props.albums.map(album =>
      <div>
        <Link key={album.id} to={`album/${album.id}`}><AlbumRow album={album}></AlbumRow></Link>
        <div className="piccontainer">{props.albums.map(album => <img src={album.link}></img> )}</div>
        </div>

      )}
      <h3>Please select a album to navigate to the album detail page.</h3>
    </div>
  )
}
