import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'


const Searchlocations = ({author}) => {
        
        const [ Author_id, setAuthor_id] = useState('')
      
      
      
        
      
        const addArtistToDB = () => {
          if ( Author_id.length === 0) {
            alert('select pincode')
            
          }else {
            // when a file needs to be uploaded use FormData
            const data= new FormData()
      
          
           
           
      
            // send the data to the API
            axios.post(url + '/location/search', data).then((response) => {
              const result = response.data
              if (result.status === 'success') {
               
              alert('successfully added an author')
      
               
              } else {
                console.log(result.error)
                alert('error while loading list of albums, please try again..')
              }
            })
          }
        }
      
        return (
          <div>
            <h1 className="page-title">Search location</h1>
      
            <div className="mb-3">
              <label htmlFor=""> Pincode</label>
              <input
                onChange={(e) => {
                  setAuthor_id(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
      
           
      
            <div className="mb-3">
              <button onClick={addArtistToDB} className="btn btn-success">
                Search
              </button>
      
              <Link to="/location">
                <a className="btn btn-warning">Back</a>
              </Link>
            </div>
          </div>
        )
      }
export default Searchlocations