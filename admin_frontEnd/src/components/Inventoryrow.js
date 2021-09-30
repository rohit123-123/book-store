import { Link, useHistory } from 'react-router-dom'

const Inventoryrow = ({ inventory}) => {
    return (
      <tr>
        <td>{inventory.Book_id}</td>
        <td>{inventory.Quantity}</td>
        <td>{inventory.Available_Status}</td>

        <td>  <Link to="/Updateinventory">
                <a className="btn btn-warning">Update</a>
              </Link> </td>
      </tr>
    )
  }
  
  export default Inventoryrow