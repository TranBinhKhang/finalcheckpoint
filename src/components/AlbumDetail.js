
import {
  useParams,
} from "react-router-dom";
import Otheralbums from "./Otheralbums";

const AlbumDetail = ({ albums }) => {
  let { albumId } = useParams();

  let AlbumDetail = albums.find(s => s.id === albumId);
  let otheralbums = albums.filter(s => s.author === AlbumDetail.author && s.id !== AlbumDetail.id)

  return <div>
    <h3>Title: {AlbumDetail.title}</h3>
    <h3>Author:{AlbumDetail.author} </h3>
    <h3>Published at: {AlbumDetail.publishedDate}</h3>
    <p>Short lyric:</p>
    <p>
    {albums.map(album => <img src={album.link}></img> )}</p>
    <p className="lyrics">{AlbumDetail.lyric} </p>
    { }
    <div>Other available albums of <b>{AlbumDetail.author}</b>:</div>
    <Otheralbums albums={otheralbums} author={AlbumDetail.author} />
  </div>;
}

export default AlbumDetail