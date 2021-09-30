import { url } from '../common/constants'

import axios from 'axios'
const Authorrow = ({ author }) => {

  const deleteCustomers = () => {
    axios.delete(url + `/author/delete/${author.Author_id} `).then((response) => {
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
      
      <td>{author.author_id}</td>
      
     
      <td>
        {author.author_name} 
      </td>
     
      <td>
        <img
          src={url + '/' + author.author_thumb}
          alt="image"
          className="thumbnail-sm" />
      </td>

      <td>   <button type="button" class="btn btn-danger " onClick={deleteCustomers}>Delete</button> </td>
    
    </tr>
  )
}

export default Authorrow