
import axios from 'axios'
import {url} from '../common/constants'


const Locationrow = ({ location}) => {
  const deleteCustomers = () => {
    axios.delete(url + `/location/delete/${location.Pincode} `).then((response) => {
      const result = response.data
      if (result.status === 'success') {
        window.location.reload()
     

      } else {
        alert('error while loading location')
      }
    })
  }

    return (
      <tr>
        <td>{location.Pincode}</td>
        <td>{location.City}</td>
        <td>{location.District}</td>
        <td>{location.State}</td>
        <td>{location.Country}</td>
        <td> <button type="button" class="btn btn-danger " onClick={deleteCustomers}>Delete</button> </td>
      </tr>
    )
  }
  
  export default Locationrow