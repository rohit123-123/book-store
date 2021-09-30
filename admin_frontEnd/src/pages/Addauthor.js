import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'


const Addauthor = ({author}) => {
        
        const [ Author_Name, setName] = useState('')
        const [Author_thumb, setThumbnail] = useState(undefined)
      
        // get the history object
        const history = useHistory()
      
        // gets called when user selects an image
        const onFileSelect = (event) => {
          setThumbnail(event.target.files[0])
        }
      
        const addArtistToDB = () => {
          if ( Author_Name.length === 0) {
            alert('select  name')
          } else if (!Author_thumb) {
            alert('select thumbnail')
          } else {
            // when a file needs to be uploaded use FormData
            const data= new FormData()
      
            // add the data
            data.append('Author_Name', Author_Name)
           
            data.append('Author_thumb', Author_thumb)
      
            // send the data to the API
            axios.post(url + '/author/insert', data).then((response) => {
              const result = response.data
              if (result.status === 'success') {
               
              alert('successfully added an author')
      
                // go to the list of artists
                history.push('/author/insert',{author:author})
              } else {
                console.log(result.error)
                alert('error while loading list of albums, please try again..')
              }
            })
          }
        }
      
        return (
          <div>
            <h1 className="page-title">Add Author</h1>
      
            <div className="mb-3">
              <label htmlFor=""> Name</label>
              <input
                onChange={(e) => {
                  setName(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
      
            <div className="mb-3">
              <label htmlFor="">Thumbnail</label>
              <input
                accept="image/*"
                onChange={onFileSelect}
                type="file"
                className="form-control"
              />
            </div>
      
            <div className="mb-3">
              <button onClick={addArtistToDB} className="btn btn-success">
                Add
              </button>
      
              <Link to="/author">
                <a className="btn btn-warning">Back</a>
              </Link>
            </div>
          </div>
        )
      }
export default Addauthor