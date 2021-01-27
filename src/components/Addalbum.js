import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function Addalbum({ onAddalbum }) {
    const [albumName, setalbumName] = useState("");
    const [singerName, setSingerName] = useState("");
    const [lyric, setLyric] = useState("");
    const [link, setLink] = useState("");
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        if (albumName && singerName && lyric && link) {
            const newId = uuidv4()
            onAddalbum({
                id: newId,
                author: singerName,
                title: albumName,
                lyric: lyric,
                link: link,
                publishedAt: new Date().toISOString()
            })
            history.push(`/album/${newId}`)
        } else {
            alert('Please input all the fields!')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Hello! You are adding the album Name: `<b>{albumName}</b>` of photographer: `<b>{singerName}</b>` </h1>
                <p>Enter the album name:</p>
                <input
                    type='text'
                    name='albumName'
                    onChange={e => setalbumName(e.target.value)}
                />
                <p>Enter the photographer name:</p>
                <input
                    type='text'
                    name='singerName'
                    onChange={e => setSingerName(e.target.value)}
                />
                <p>Enter the short description:</p>
                <input
                    type='text'
                    name='lyric'
                    onChange={e => setLyric(e.target.value)}
                />
                <p>Enter the link:</p>
                <input
                    type='text'
                    name='link'
                    onChange={e => setLink(e.target.value)}
                />
                <div><input type='submit' disabled={!albumName || !singerName || !lyric || !link} /></div>
            </form>
        </div>
    )
}


function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        // eslint-disable-next-line 
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}