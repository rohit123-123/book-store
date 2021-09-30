const Orderrow = ({ order_table}) => {
    return (
      <tr>
        <td>{order_table.Order_id}</td>
        <td>{order_table.Customer_id}</td>
        <td>{order_table.Created_On}</td>
        <td>{order_table.Total_amount}</td>
        <td>{order_table.Status}</td>
        <td>{order_table.TAX}</td>
      </tr>
    )
  }
  
  export default Orderrow