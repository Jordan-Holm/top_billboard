import BillboardShow from './BillboardShow';

const BillboardList = ({ billboards, updateBillboard, deleteBillboard }) => (
    <>
        { billboards.map( b => 
            <BillboardShow 
                key={b.id}
                {...b}
                updateBillboard={updateBillboard}
                deleteBillboard={deleteBillboard}
            />
        )}
    </>
)

export default BillboardList;