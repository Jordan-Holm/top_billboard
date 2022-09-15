import ArtistShow from "./ArtistShow";

const ArtistList = ({ artists, updateArtist, deleteArtist }) => {
    <>
        { 
            artists.map( a =>
                <ArtistShow 
                    key={a.id}
                    {...a}
                    updateArtist={updateArtist}
                    deleteArtist={deleteArtist}
                />
            )
        }
    </>
}

export default ArtistList;