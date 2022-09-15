import { useState } from "react";
import ArtistForm from "./ArtistForm";

const ArtistShow = ({ id, name, listeners, description, updateArtist, deleteArtist }) => {
    const [editing,setEdit] = useState(false)

    return (
        <>
            <h3>{name}</h3>
            <h4>{listeners}</h4>
            <p>{description}</p>

            {editing ?
                <>
                    <ArtistForm 
                        id={id}
                        name={name}
                        listeners={listeners}
                        description={description}
                        updateArtist={updateArtist}
                        setEdit={setEdit}
                    />
                    <button onClick={() => setEdit(false)}>
                        Cancel
                    </button>
                </>
                :
                <button onClick={() => setEdit(true)}>
                    Edit
                </button>
            }
            <button onClick={() => deleteArtist(id)}>
                Delete
            </button>
            <button>Songs</button>
        </>
    )
}

export default ArtistShow;