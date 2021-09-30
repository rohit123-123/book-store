import axios from 'axios'
 import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { url } from '../common/constants'


const Admin = () => {
        
        const [ Email, setEmail] = useState('')
       const [Password, setPassword] = useState('')
      
       const history=useHistory()

        const login= () => {
          if ( Email.length === 0) {
            alert('select  Email')
          } else if (Password.length===0) {
            alert('select Password')
          } else {
            // when a file needs to be uploaded use FormData
            const data={
            Email:Email,
              Password:Password
              }
              console.log(data)
              const value=JSON.stringify(data);

            // send the data to the API
            axios.post(url +'/admin/login',data).then((response) => {
              const result = response.data
              if (result.status === 'success') {
               
              alert(' login successfull ')
             
              history.push({
                pathname:"/Homeadmin"
             });

                // go to the list of artists
               
              } else {
                console.log(result.error)
                alert('Incorrect Email or passowrd')
              }
            })
          }
        }
      
        return (
          <div>
            <h1 className="page-title">Admin</h1>
      
            <div className="mb-3">
              <label htmlFor=""> Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
            <div className="mb-3">
              <label htmlFor=""> Password</label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="text"
                className="form-control"
              />
            </div>
           
      
            <div className="mb-3">
              <button onClick={login} className="btn btn-success">
            Login
              </button>
      
              
            </div>
          </div>
        )
      }
export default Admin