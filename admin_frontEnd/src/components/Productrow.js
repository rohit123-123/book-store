import { url } from '../common/constants'

import axios from 'axios'

const Productrow = ({ product_table }) => {
  const deleteCustomers = () => {
    axios.delete(url + `/product/delete/${product_table.Book_id} `).then((response) => {
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
      <td>{product_table.book_id}</td>
      <td>{product_table.book_name}</td>
      <td>{product_table.isbn}</td>
      <td>{product_table.price}</td>
      <td>{product_table.author_id}</td>
      <td>
        <img
          src={url + '/' + product_table.thumbnail}
          alt="image"
          className="thumbnail-sm"
        />
      </td>
    
      <td>{product_table.language}</td>
      <td>{product_table.description}</td>
      <td>{product_table.edition}</td>
      <td>{product_table.publisher_id}</td>
      <td>{product_table.genre}</td>
      <td>   <button type="button" class="btn btn-danger " onClick={deleteCustomers}>Delete</button> </td>
    </tr>
  )
}

export default Productrow