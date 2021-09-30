
import axios from 'axios'
import {url} from '../common/constants'

const Publisherrow = ({ publisher }) => {

  const deleteCustomers = () => {
    axios.delete(url + `/publisher/delete/${publisher.Publisher_id} `).then((response) => {
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
      <td>{publisher.publisher_id}</td>
      <td>{publisher.publication}</td>
      <td>{publisher.publication_email}</td>
      <td>     <button type="button" class="btn btn-danger " onClick={deleteCustomers}>Delete</button>  </td>
      
    
 
        
    </tr>
  )
}

export default Publisherrow