
import {
    Link,
} from "react-router-dom";
import AlbumRow from "./AlbumRow";

function Otheralbums({ albums, author }) {
    if (albums && albums.length > 0) {

        return albums.map(s => <div key={s.id}><Link to={`/album/${s.id}`}><AlbumRow album={s}></AlbumRow></Link></div>)
    }
    else return <div>{author} has only one album in this system.</div>
}

export default Otheralbums