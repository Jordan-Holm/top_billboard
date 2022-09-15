import { useEffect, useState } from "react";

const ArtistForm = ({addArtist, id, name, listeners, description, setEdit, updateArtist}) => {
    const [artist, setArtists] = useState({ name: '', listeners: 0, description: ''})

    useEffect( () => {
        if (id) {
            setArtists({ name, listeners, description})
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updateArtist(id, artist)
            setArtists(false)
        } else {
            addArtist(artist)
        }
        setArtists({ name: '', listeners: 0, description: '' })
    }

    return (
        <>
            <h2>{id ? 'Edit' : 'Create'}</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    name="name"
                    value={artist.name}
                    onChange={(e) => setArtists({...artist, name: e.target.value})}
                    required
                    placeholder="Artist Name"
                />
                <input 
                    type='integer'
                    name="listeners"
                    value={artist.listeners}
                    onChange={(e) => setArtists({...artist, listeners: e.target.value})}
                    required
                />
                <input 
                    name="description"
                    value={artist.description}
                    onChange={(e) => setArtists({...artist, description: e.target.value})}
                    required
                    placeholder="Description"
                />
            </form>
        </>
    )

}

export default ArtistForm;