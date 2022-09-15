import { useState, useEffect } from 'react';
import axios from 'axios';
import BillboardList from './BillboardList';
import BillboardForm from './BillboardForm';

const Billboards = () => {
    const [billboards, setBillboards] = useState([])

    useEffect( () => {
        axios.get('/api/billboards')
            .then( res => setBillboards(res.data) )
            .catch( err => console.log(err))
    }, [])

    const addBillboard = (billboard) => {
        axios.post('/api/billboards', { billboard })
            .then( res => setBillboards([...billboards, res.data]))
            .catch( err => console.log(err) )
    }

    const updateBillboard = (id, billboard) => {
        axios.put(`/api/billboards/${id}`, { billboard })
            .then( res => {
                const newUpdateBillboard = billboards.map( b => {
                    if (b.id === id) {
                        return res.data
                    }
                    return b
                })
                setBillboards(newUpdateBillboard)
            })
            .catch( err => console.log(err) )
    }

    const deleteBillboard = (id) => {
        axios.delete(`/api/billboards/${id}`)
            .then( res => {
                setBillboards(billboards.filter( b => b.id !== id))
            })
            .catch( err => console.log(err) )
    }
    
    return (
        <>
            <BillboardForm addBillboard={addBillboard}/>

            <h1>Top Billboards</h1>

            <BillboardList 
                billboards={billboards}
                updateBillboard={updateBillboard}
                deleteBillboard={deleteBillboard}
            />
        </>
    )
}

export default Billboards;