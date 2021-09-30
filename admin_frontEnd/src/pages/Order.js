import './Author.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {url} from '../common/constants'
import Orderrow from '../components/Orderrow'

const Orders = () => {

const[orders,setorders]=useState([])


useEffect(() => {
    console.log(`Location component got loaded`)
    getLocations()
  }, [])

const getLocations = () => {
    axios.get(url + '/ordertable/allorders').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setorders(result.data)
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
<h1>Orders </h1>



<table className="table table-striped">
<thead>
<tr>
<th> Order id  </th>
<th>   Customer id </th>
<th>   Created On  </th>
<th> Total Amount  </th>
<th>   Status </th>
<th>  Tax   </th>
</tr>
    </thead>

<tbody>

{orders.map((order_table) => {
            return <Orderrow order_table={order_table} />
          })}

</tbody>


</table>

</div>
)
    
}
export default Orders