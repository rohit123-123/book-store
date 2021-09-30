
import axios from 'axios'
import {url} from '../common/constants'

const Customerrow = ({ customer}) => {
  const deleteCustomers = () => {
    axios.delete(url + `/customer/delete/${customer.Customer_id} `).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        window.location.reload()
     

      } else {
        alert('error while loading list of product')
      }
    })
  }
  return (
    <tr>
      <td>{customer.Customer_id}</td>
      <td>{customer.Cust_Name}</td>
      <td>{customer.Street_Name}</td>
      <td>{customer.PinCode}</td>
      <td>{customer.Phone_no}</td>
      <td>{customer.Email}</td>
      <td>{customer.Cart_id}</td>
      <td>  <button type="button" class="btn btn-danger " onClick={deleteCustomers}>Delete</button> </td>
    
    
    </tr>
  )
}

export default Customerrow