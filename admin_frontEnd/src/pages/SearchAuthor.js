import axios from 'axios'
import { useState,useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'


const Searchauthor = ({author}) => {
        
        const [ Author_id, setAuthor_id] = useState('')
      
      
       
      
        const addArtistToDB = () => {
          if ( Author_id.length === 0) {
            alert('select Author id')
            
          }else {
         
          
      
          
           

           
            const getAuthors = () => {
              axios.get(url + '/author/search/:id').then((response) => {

                const result = response.data
                if (result.status === 'success') {
                  setAuthor_id(result.data)
                } else {
                  alert('error while loading  artists')
                }
              })
            }
          
      
            
            
          }
        }
      
        return (
          <div>
            <h1 className="page-title">Add Author</h1>
      
            <div className="mb-3">
              <label htmlFor=""> Author id</label>
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
      
              <Link to="/author">
                <a className="btn btn-warning">Back</a>
              </Link>
            </div>
          </div>
        )
      }
export default Searchauthor