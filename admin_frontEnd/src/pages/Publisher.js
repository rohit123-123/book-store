
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {url} from '../common/constants'
import Publisherrow from '../components/Publisherrow'

const Publisher = () => {

const[publishers,setPublishers]=useState([])


useEffect(() => {
    console.log(`Publisher component got loaded`)
    getPublishers()
  }, [])

const getPublishers = () => {
    axios.get(url + '/publisher/all').then((response) => {
      const result = response.data
      if (result.status === 'success') {
        setPublishers(result.data)
      } else {
        alert('error while loading list of product')
      }
    })
  }


return(

<div> 
    
<h1>Publishers </h1>
<Link to="/AddPublisher" type="button" class="btn btn-success" >Add Publisher
<button type="button" class="btn btn-success"></button>
</Link>

<Link to="/Homeadmin" type="button" class="btn btn-success" >Back
<button type="button" class="btn btn-success"></button>
</Link>

<table className="table table-striped">
<thead>
<tr>

<th>  Publisher_id   </th>
<th>   Publication  </th>
<th>   Publication_Email  </th>
<th>  Delete   </th>
</tr>
    </thead>

<tbody>

{publishers.map((publisher) => {
            return <Publisherrow publisher={ publisher } />
          })}

</tbody>


</table>

</div>
)
    
}
export default Publisher