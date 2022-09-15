import { useState, useEffect } from "react";

const BillboardForm = ({addBillboard, id, name, genre, description, updateBillboard, setEdit}) => {
    const [billboard, setBillboard] = useState({ name: '', genre: '', description: ''})
    
    useEffect ( () => {
        if (id) {
            setBillboard({ name, genre, description })
        }
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (id) {
            updateBillboard(id, billboard)
            setEdit(false)
        } else {
            addBillboard(billboard)
        }
        setBillboard({ name: '', genre: '', description: '' })
    }

    return (
        <>
            <h1>{ id ? 'Edit': 'Create'}</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    name="name"
                    value={billboard.name}
                    onChange={(e) => setBillboard({...billboard, name: e.target.value})}
                    required
                    placeholder="Billboard Name"
                />
                <input 
                    name="genre"
                    value={billboard.genre}
                    onChange={(e) => setBillboard({...billboard, genre: e.target.value})}
                    required
                    placeholder="Genre"
                />
                <textarea
                    name="description"
                    value={billboard.description}
                    onChange={(e) => setBillboard({...billboard, description: e.target.value})}
                    required
                    placeholder="Description"
                ></textarea>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default BillboardForm