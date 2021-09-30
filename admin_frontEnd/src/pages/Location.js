import './Author.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {url} from '../common/constants'
import Locationrow from '../components/LocationRow'

const Locations = () => {

const[locations,setlocations]=useState([])


useEffect(() => {
    console.log(`Location component got loaded`)
    getLocations()
  }, [])

const getLocations = () => {
    axios.get(url + '/location/all').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setlocations(result.data)
      } else {
        alert('error while loading list of artists')
      }
    })
  }


return(

<div> 
    

<h1>Location </h1>


<Link to="/AddLocation" type="button" class="btn btn-success" >Add Location
<button type="button" class="btn btn-success"></button>
</Link>

<Link to="/Homeadmin" type="button" class="btn btn-success" >Back
<button type="button" class="btn btn-success"></button>
</Link>
<table className="table table-striped">
<thead>
<tr>
<th>  Pincode  </th>

<th>   City  </th>
<th>   District  </th>
<th>  State  </th>
<th>   Country  </th>
<th>  Delete   </th>
</tr>
    </thead>

<tbody>

{locations.map((location) => {
            return <Locationrow location={location} />
          })}

</tbody>


</table>

</div>
)

}
export default Locations