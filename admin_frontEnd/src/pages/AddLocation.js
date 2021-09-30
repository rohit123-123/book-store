import axios from 'axios'
import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'


const Addlocation = ({location}) => {
        
        const [ Pincode, setPincode] = useState('')
        const [ City, setCity] = useState('')
        const [ District, setDistrict] = useState('')
        const [ Country, setCountry] = useState('')
        const [ State, setState] = useState('')
      
        // get the history object
        const history = useHistory()
      
        // gets called when user selects an image
       
      
        const addLocationToDB = () => {
          if ( Pincode.length === 0) {
            alert('select Pincode')
          } else if (City.length=== 0) {
            alert('select City')
          } else if (District.length=== 0) {
            alert('select District')
          } else if (State.length=== 0) {
            alert('select State')
          } else if (Country.length=== 0) {
            alert('select Country')
          } 
          else {
            // when a file needs to be uploaded use FormData
            const data= new FormData()
      
            // add the data
            data.append('Pincode',Pincode)
            data.append('City',City)
            data.append('District',District)
            data.append('State',State)
            data.append('Country',Country)           
    
            // send the data to the API
            axios.post(url + '/location/insert', {
              'Pincode':Pincode,
              'City':City,
              'District':District,
              'State':State,
              'Country':Country
            }).then((response) => {
              const result = response.data
              if (result.status === 'success') {
               
              alert('successfully added the location')
      
                // go to the list of artists
                history.push('/location/insert',{location:location})
              } else {
                console.log(result.error)
                alert('error while adding location')
              }
            })
          }
        }
      
        return (
          <div>
            <h1 className="page-title">Add Location</h1>
      
            <div className="mb-3">
              <label htmlFor=""> Pincode</label>
              <input
                onChange={(e) => {
                  setPincode(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
      
            <div className="mb-3">
              <label htmlFor=""> City</label>
              <input
                onChange={(e) => {
                  setCity(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor=""> District</label>
              <input
                onChange={(e) => {
                  setDistrict(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
            <div className="mb-3">
              <label htmlFor=""> State</label>
              <input
                onChange={(e) => {
                  setState(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor=""> Country</label>
              <input
                onChange={(e) => {
                  setCountry(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
      
            <div className="mb-3">
              <button onClick={addLocationToDB} className="btn btn-success">
                Add
              </button>
      
              <Link to="/Location">
                <a className="btn btn-warning">Back</a>
              </Link>
            </div>
          </div>
        )
      }
export default Addlocation