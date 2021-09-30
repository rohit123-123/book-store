import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'


const AddProduct = ({product_table}) => {
        
        
        const [ Book_name, setBookname] = useState('')
        const [ ISBN, setISBN] = useState('')
        const [ Price, setPrice] = useState('')
        const [ Author_id, setAuthorid] = useState('')
        const [Thumbnail, setThumbnail] = useState(undefined)
        const [ Language, setLanguage] = useState('')
        const [ Description, setDescription] = useState('')
        const [Edition, setEdition] = useState('')
        const [Publisher, setPublisher] = useState('')
        const [Genre, setGenre] = useState('')
       
      
        // get the history object
        const history = useHistory()
      
        // gets called when user selects an image
        const onFileSelect = (event) => {
          setThumbnail(event.target.files[0])
        }
      
        const addArtistToDB = () => {
          if(Book_name.length===0){
            alert('select Book Name')}
          else if(ISBN.length===0){
          alert('select ISBN')}
          else if(Price.length===0){
            alert('select Price')}
            else if(Author_id.length===0){
                alert('select Author_id')}
                else if (!Thumbnail) {
                    alert('select thumbnail') }
                else if(Language.length===0){
                    alert('select Language')}
                    else if(Description.length===0){
                        alert('select Description')}
                        else if(Edition.length===0){
                            alert('select Edition')}
                            else if(Publisher.length===0){
                                alert('select Publisher')}
                                else if(Genre.length===0){
                                    alert('select Genre')}
          
          else {
            // when a file needs to be uploaded use FormData
            
            const data= new FormData()
      
            // add the data
            data.append('Book_name',Book_name)
            data.append('ISBN',ISBN)
            data.append('Price',Price)
            data.append('Author_id',Author_id)
            data.append('Thumbnail',Thumbnail)
            data.append('Language',Language)
            data.append('Description',Description)
            data.append('Edition',Edition)
            data.append('Publisher_id',Publisher)
            data.append('Genre',Genre)
      


            // send the data to the API
            axios.post(url+'/product/insert',data).then((response) => {
              const result = response.data
              if (result.status === 'success') {
               
              alert('successfully added the book')
      
                // go to the list of artists
                history.push('/product/insert',{product_table:product_table})
              } else {
                console.log(result.error)
                alert('error while adding artist')
              }
            })
          }
        }
      
        return (
          <div>
            <h1 className="page-title">Add Book</h1>
      
           
            <div className="mb-3">
              <label htmlFor=""> Book Name</label>
              <input
                onChange={(e) => {
                  setBookname(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor=""> ISBN</label>
              <input
                onChange={(e) => {
                  setISBN(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor=""> Price</label>
              <input
                onChange={(e) => {
                  setPrice(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor=""> Author Id</label>
              <input
                onChange={(e) => {
                  setAuthorid(e.target.value)
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
              <label htmlFor="">Language</label>
              <input
                onChange={(e) => {
                  setLanguage(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor=""> Description</label>
              <input
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor=""> Edition</label>
              <input
                onChange={(e) => {
                  setEdition(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor=""> Publisher Id</label>
              <input
                onChange={(e) => {
                  setPublisher(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor=""> Genre</label>
              <input
                onChange={(e) => {
                  setGenre(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
      
            <div className="mb-3">
              <button onClick={addArtistToDB} className="btn btn-success">
                Add
              </button>
      
              <Link to="/product">
                <a className="btn btn-warning">Back</a>
              </Link>
            </div>
          </div>
        )
      }
export default AddProduct