import { useState } from "react";
import BillboardForm from "./BillboardForm";
import { Link } from "react-router-dom";

const BillboardShow = ({ id, name, genre, description, updateBillboard, deleteBillboard }) => {
    const [editing, setEdit] = useState(false)

    return (
        <>
            { editing ?
                <>
                    <BillboardForm 
                        updateBillboard={updateBillboard}
                        id={id}
                        name={name}
                        genre={genre}
                        description={description}
                        setEdit={setEdit}
                    />
                    <button onClick={() => setEdit(false)}>
                        Cancel
                    </button>
                </>
                :
                <div>
                    <h1>{name}</h1>
                    <h3>{genre}</h3>
                    <p>{description}</p>
                    <button onClick={() => setEdit(true)}>
                        Edit
                    </button>
                    <button onClick={() => deleteBillboard(id)}>
                        Delete
                    </button>
                    <Link to={`/${id}/artists`}>
                        <button>Artists</button>
                    </Link>
                </div>
            }
            
        </>
    )
}

export default BillboardShow;