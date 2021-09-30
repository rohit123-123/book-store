import './Author.css';
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {url} from '../common/constants'
import Customerrow from '../components/Customerrow'

const Customers = () => {

const[customers,setCustomers]=useState([])


useEffect(() => {
    console.log(`Product component got loaded`)
    getCustomers()
  }, [])

const getCustomers = () => {
    axios.get(url + '/customer/all').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setCustomers(result.data)
      } else {
        alert('error while loading list of product')
      }
    })
  }


return(

<div> 

<Link to="/Homeadmin" type="button" class="btn btn-success" >Back
<button type="button" class="btn btn-success"></button>
</Link>
    
<h1> Customers</h1>



<table className="table table-striped">
<thead>
<tr>


<th>  Customer id   </th>
<th>   Cust Name  </th>
<th>   City  </th>
<th>   Pincode  </th>
<th>   Phone no  </th>
<th>   Email  </th>
<th>   Cart_id  </th>
<th>  Delete   </th>
</tr>
    </thead>

<tbody>

{customers.map((customer) => {
            return <Customerrow customer={customer} />
          })}

</tbody>


</table>

</div>
)
    
}
export default Customers