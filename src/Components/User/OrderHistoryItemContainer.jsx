/* eslint-disable react/prop-types */
import OrderHistory from './OrderHistory'

const OrderHistoryItemContainer = ({orderitems}) => {
  return (
    <div className="row" style={{ height: "300px",overflow:"auto"}}>
  <div className="col-md-12">
    <div className="card">
      <div className="card-header" style={{ backgroundColor: '#6050DC', color: 'white' }}>
        <h5 style={{overflow:"hidden"}}>Order History</h5>
      </div>
      {orderitems.map(item=><OrderHistory key={item.id}  item={item}/> )}
      
      
    </div>
  </div>
</div>

  )
}

export default OrderHistoryItemContainer