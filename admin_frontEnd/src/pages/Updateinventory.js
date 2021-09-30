import axios from 'axios'
 import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'


const Updateinventory = () => {
        
        const [ Book_id, setBookid] = useState('')
       const [Quantity, setQuantity] = useState('')
      
        
        const updatebook= () => {
          if ( Book_id.length === 0) {
            alert('select  Book id')
          } else if (Quantity.length===0) {
            alert('select Quantity')
          } else {
            // when a file needs to be uploaded use FormData
            const data={
              book_id:Book_id,
              quantity:Quantity
              }
              console.log(data)
              const value=JSON.stringify(data);

            // send the data to the API
            axios.put(url +'/inventory/update',data).then((response) => {
              const result = response.data
              if (result.status === 'success') {
               
              alert('successfully updated inventory')
      
                // go to the list of artists
               
              } else {
                console.log(result.error)
                alert('error while loading inventory, please try again..')
              }
            })
          }
        }
      
        return (
          <div>
            <h1 className="page-title">Update inventory</h1>
      
            <div className="mb-3">
              <label htmlFor=""> id</label>
              <input
                onChange={(e) => {
                  setBookid(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
            <div className="mb-3">
              <label htmlFor=""> Quantity</label>
              <input
                onChange={(e) => {
                  setQuantity(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
      
            <div className="mb-3">
              <button onClick={updatebook} className="btn btn-success">
                Update
              </button>
      
              <Link to="/inventory">
                <a className="btn btn-warning">Back</a>
              </Link>
            </div>
          </div>
        )
      }
export default Updateinventory