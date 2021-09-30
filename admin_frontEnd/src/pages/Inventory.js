import './Author.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {url} from '../common/constants'
import Inventoryrow from '../components/Inventoryrow'

const Inventories = () => {

const[inventories,setlocations]=useState([])


useEffect(() => {
    console.log(`Location component got loaded`)
    getLocations()
  }, [])

const getLocations = () => {
    axios.get(url + '/inventory/all').then((response) => {
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
<Link to="/Homeadmin" type="button" class="btn btn-success" >Back
<button type="button" class="btn btn-success"></button>
</Link>
<h1>Inventory </h1>




<table className="table table-striped">
<thead>
<tr>
<th>  Book id </th>
<th>   Quantity </th>
<th>   Available Status  </th>

</tr>
    </thead>

<tbody>

{inventories.map((inventory) => {
            return <Inventoryrow inventory={inventory} />
          })}

</tbody>


</table>

</div>
)
    
}
export default Inventories