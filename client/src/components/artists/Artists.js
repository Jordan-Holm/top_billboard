import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import ArtistList from './ArtistList'
import ArtistForm from "./ArtistForm";

const Artists = () => {
    const [artists, setArtists] = useState([])

    const { billboardId } = useParams()

    useEffect( () => {
        axios.get(`/api/billboards/${billboardId}/artists`)
            .then( res => setArtists(res.data) )
            .catch( err => console.log(err) )
    }, [])

    const addArtist = (artist) => {
        axios.post(`/api/billboards/${billboardId}/artists`, { artist })
            .then( res => setArtists([...artists, res.data]))
            .catch( err => console.log(err) )
    }

    const updateArtist = (id, artist) => {
        axios.put(`/api/billboards/${billboardId}/artists/${id}`, { artist })
            .then( res => {
                const newUpdateArtist = artists.map( a => {
                    if ( a.id === id ) {
                        return res.data
                    }
                    return a
                })
                setArtists(newUpdateArtist)
            })
            .catch( err => console.log(err) )
    }

    const deleteArtist = (id) => {
        axios.delete(`/api/billboards/${billboardId}/artists/${id}`)
            .then( res => {
                setArtists( artists.filter( a => a.id !== id))
            })
            .catch( err => console.log(err) )
    }

    return (
        <>
            <h1>Top Artists</h1>
            <ArtistForm 
                addArtist={addArtist}
            />

            <ArtistList 
                artists={artists}
                updateArtist={updateArtist}
                deleteArtist={deleteArtist}
            />
        </>
    )
}

export default Artists;