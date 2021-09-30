import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'


const AddPublisher = ({publisher}) => {
       
        const [ Publication, setPublication] = useState('')
        const [ Publication_Email, setPublication_Email] = useState('')
      
        // get the history object
        const history = useHistory()
      
        // gets called when user selects an image
      
      
        const addArtistToDB = () => {
          if ( Publication.length === 0) {
            alert('select  name')
          } else if (Publication_Email.length === 0) {
            alert('select Email')
          } else {
            // when a file needs to be uploaded use FormData
            const data = new FormData()
      
            // add the data
            data.append('Publication',  Publication)
           
            data.append('Publication_Email', Publication_Email)
     
            // send the data to the API
            axios.post(url + '/publisher/insert', {
              'Publication':Publication,
              'Publication_Email':Publication_Email
            }).then((response) => {
              const result = response.data
              if (result.status === 'success') {
               
                alert('successfully added a publication')
      
                // go to the list of artists
                history.push('/publisher/insert',{publisher:publisher})
              } else {
                alert('error while adding publisher')
              }
            })
          }
        }
      
        return (
          <div>
            <h1 className="page-title">Add Publisher</h1>
      
            <div className="mb-3">
              <label htmlFor=""> Publication</label>
              <input
                onChange={(e) => {
                  setPublication(e.target.value)
                }}
                name="Publication"
                type="text"
                className="form-control"
              />
            </div>
           
      
            <div className="mb-3">
              <label htmlFor=""> Publication Email</label>
              <input
                onChange={(e) => {
                  setPublication_Email(e.target.value)
                }}
                name="Publication_Email"
                type="text"
                className="form-control"
              />
            </div> 
      
            <div className="mb-3">
              <button onClick={addArtistToDB} className="btn btn-success">
                Add
              </button>
      
              <Link to="/publisher">
                <a className="btn btn-warning">Back</a>
              </Link>
            </div>
          </div>
        )
      }
export default AddPublisher